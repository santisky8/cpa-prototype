import { useRef, useState } from "react";
import { useI18n } from "../i18n/I18nContext";
import { botAnswers } from "../data/botAnswers";
import type { ChatMessage } from "../types";

let nextId = 1;

export default function ChatWidget() {
  const { t, lang, chips } = useI18n();
  const [open, setOpen] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [knowledgeStatus, setKnowledgeStatus] = useState("");

  const repositoryContext = useRef("");
  const uploadedContext = useRef("");
  const contextLoaded = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  function addMessage(text: string, who: ChatMessage["who"]) {
    setMessages((prev) => [...prev, { id: nextId++, text, who }]);
    requestAnimationFrame(() => {
      if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
    });
  }

  function botSay(text: string) {
    setTimeout(() => addMessage(text, "bot"), 320);
  }

  function handleToggle() {
    setOpen((prev) => {
      const next = !prev;
      if (next && !greeted) {
        botSay(t("chatHello"));
        setGreeted(true);
      }
      if (next) requestAnimationFrame(() => inputRef.current?.focus());
      return next;
    });
  }

  async function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []).slice(0, 10);
    const parts = await Promise.all(
      files.map(async (file) => `FILE: ${file.name}\n${(await file.text()).slice(0, 30000)}`)
    );
    uploadedContext.current = parts.join("\n\n");
    setKnowledgeStatus(files.length ? `${files.length} file(s) attached` : "");
  }

  async function loadRepository() {
    setKnowledgeStatus("Loading main…");
    try {
      const r = await fetch("/.netlify/functions/repository-context");
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Repository unavailable");
      repositoryContext.current = data.documents
        .map((d: { path: string; content: string }) => `FILE: ${d.path}\n${d.content}`)
        .join("\n\n");
      contextLoaded.current = true;
      setKnowledgeStatus(`${data.documents.length} repository file(s) loaded`);
    } catch (error) {
      setKnowledgeStatus(error instanceof Error ? error.message : "Repository unavailable");
    }
  }

  async function askAI(question: string): Promise<string | null> {
    const context = [repositoryContext.current, uploadedContext.current].filter(Boolean).join("\n\n");
    if (!context && !contextLoaded.current) return null;
    const r = await fetch("/.netlify/functions/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, context })
    });
    if (!r.ok) return null;
    const data = await r.json();
    return data.answer || null;
  }

  function localAnswer(question: string): string {
    const q = question.toLowerCase();
    const hit = botAnswers[lang].find((rule) => rule.keywords.some((k) => q.includes(k)));
    return hit ? hit.answer : t("chatFallback");
  }

  async function send(text?: string) {
    const q = (text ?? inputValue).trim();
    if (!q) return;
    addMessage(q, "user");
    setInputValue("");
    const aiAnswer = await askAI(q).catch(() => null);
    botSay(aiAnswer || localAnswer(q));
  }

  return (
    <>
      <button
        className="chat-launch"
        aria-expanded={open}
        aria-controls="chatPanel"
        onClick={handleToggle}
      >
        <svg className="chat-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 12.5C4 7.81 8.03 4 13 4s9 3.81 9 8.5-4.03 8.5-9 8.5c-.98 0-1.92-.15-2.8-.42-.96.66-2.42 1.44-4.2 1.92a.6.6 0 0 1-.7-.85c.63-1.16.9-2.2 1-2.9C4.94 17.55 4 15.15 4 12.5Z"
            stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
          />
          <circle cx="9.5" cy="12.5" r="1.1" fill="currentColor" />
          <circle cx="13" cy="12.5" r="1.1" fill="currentColor" />
          <circle cx="16.5" cy="12.5" r="1.1" fill="currentColor" />
        </svg>
        <span>{t("chatlaunch")}</span>
      </button>

      <div className={`chat-panel${open ? " open" : ""}`} id="chatPanel" role="dialog" aria-label="CPA Assist chatbot">
        <div className="chat-head">
          <h3>{t("chath")}</h3>
          <p>{t("chatsub")}</p>
        </div>
        <div className="chat-log" ref={logRef} aria-live="polite">
          {messages.map((m) => (
            <div key={m.id} className={`msg ${m.who}`}>{m.text}</div>
          ))}
        </div>
        <div className="chips">
          {chips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => {
                if (!open) handleToggle();
                send(chip);
              }}
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="knowledge-controls">
          <label className="knowledge-upload">
            Attach files
            <input type="file" multiple accept=".txt,.md,.html,.css,.js,.json,.csv,.xml" onChange={handleFiles} />
          </label>
          <button type="button" onClick={loadRepository}>Load repository</button>
          <span role="status">{knowledgeStatus}</span>
        </div>
        <div className="chat-input">
          <input
            ref={inputRef}
            type="text"
            placeholder={t("chatph")}
            aria-label="Your question"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") send();
            }}
          />
          <button aria-label="Send" onClick={() => send()} />
        </div>
        <p className="chat-demo-note">{t("chatnote")}</p>
      </div>
    </>
  );
}
