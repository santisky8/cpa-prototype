const DEFAULT_REPO = "santisky8/cpa-prototype";
const DEFAULT_REF = "main";
const MAX_FILES = 40;
const MAX_FILE_BYTES = 120000;
const TEXT_EXTENSIONS = new Set([".txt", ".md", ".html", ".css", ".js", ".json", ".csv", ".xml"]);

function response(status, body) {
  return {
    statusCode: status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(body)
  };
}

function isTextFile(path) {
  const dot = path.lastIndexOf(".");
  return dot >= 0 && TEXT_EXTENSIONS.has(path.slice(dot).toLowerCase());
}

export default async function handler(event) {
  if (event.httpMethod !== "GET") return response(405, { error: "Method not allowed" });

  const repo = process.env.GITHUB_REPOSITORY || DEFAULT_REPO;
  const ref = process.env.GITHUB_REF || DEFAULT_REF;
  const token = process.env.GITHUB_TOKEN;
  const headers = { Accept: "application/vnd.github+json", "User-Agent": "cpa-prototype" };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const treeUrl = `https://api.github.com/repos/${repo}/git/trees/${encodeURIComponent(ref)}?recursive=1`;
    const treeResponse = await fetch(treeUrl, { headers });
    if (!treeResponse.ok) return response(treeResponse.status, { error: "Could not read the configured GitHub repository." });
    const tree = await treeResponse.json();
    const files = (tree.tree || [])
      .filter((entry) => entry.type === "blob" && isTextFile(entry.path) && entry.size <= MAX_FILE_BYTES)
      .slice(0, MAX_FILES);

    const documents = await Promise.all(files.map(async (entry) => {
      const url = `https://api.github.com/repos/${repo}/contents/${entry.path}?ref=${encodeURIComponent(ref)}`;
      const fileResponse = await fetch(url, { headers });
      if (!fileResponse.ok) return null;
      const file = await fileResponse.json();
      if (file.encoding !== "base64" || !file.content) return null;
      const content = Buffer.from(file.content.replace(/\n/g, ""), "base64").toString("utf8");
      return { path: entry.path, content: content.slice(0, MAX_FILE_BYTES) };
    }));

    return response(200, { repository: repo, ref, documents: documents.filter(Boolean) });
  } catch (error) {
    console.error("repository-context", error);
    return response(500, { error: "Repository retrieval failed." });
  }
}
