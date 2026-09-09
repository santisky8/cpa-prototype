const MAX_CONTEXT = 120000;

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(body)
  };
}

export default async function handler(event) {
  if (event.httpMethod !== "POST") return json(405, { error: "Method not allowed" });
  if (!process.env.OPENAI_API_KEY) return json(503, { error: "AI is not configured yet." });

  try {
    const body = JSON.parse(event.body || "{}");
    const question = String(body.question || "").trim();
    const context = String(body.context || "").slice(0, MAX_CONTEXT);
    if (!question) return json(400, { error: "A question is required." });

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const endpoint = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1/chat/completions";
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        messages: [
          { role: "system", content: "You are CPA Assist. Answer only from the supplied site and repository context. If the context does not support an answer, say so clearly." },
          { role: "user", content: `Repository/site context:\n${context}\n\nQuestion:\n${question}` }
        ]
      })
    });
    const result = await upstream.json();
    if (!upstream.ok) return json(502, { error: "The AI provider rejected the request." });
    return json(200, { answer: result.choices?.[0]?.message?.content || "No answer was returned." });
  } catch (error) {
    console.error("assistant", error);
    return json(500, { error: "Assistant request failed." });
  }
}
