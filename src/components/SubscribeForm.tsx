"use client";
import { useState } from "react";

interface Props {
  source?: string;
  variant?: "inline" | "banner" | "minimal";
}

export default function SubscribeForm({ source = "website", variant = "inline" }: Props) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    if (!email || !email.includes("@")) { setMsg("Please enter a valid email."); setStatus("error"); return; }
    if (!consent) { setMsg("Please tick the box to confirm you're happy to hear from us."); setStatus("error"); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (data.alreadySubscribed) {
        setStatus("success");
        setMsg("You're already on the list — we'll be in touch when new interviews go live.");
      } else {
        setStatus("success");
        setMsg("You're in. We'll let you know when new interviews are published. Nothing else.");
      }
      setEmail("");
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Please try again.");
    }
  };

  // Success state — shown after subscribing
  if (status === "success") return (
    <div style={{
      background: "#f7f5ef", border: "1px solid #e8e4dc",
      borderLeft: "3px solid #c0392b", borderRadius: 3,
      padding: "14px 18px",
    }}>
      <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 15, fontWeight: 700, color: "#1a1a1a", margin: "0 0 2px" }}>✓ You're in.</p>
      <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 13, color: "#777", fontStyle: "italic", margin: 0 }}>{msg}</p>
    </div>
  );

  const inputStyle: React.CSSProperties = {
    flex: 1, border: "1px solid #ddd", borderRadius: 3, padding: "10px 13px",
    fontSize: 14, fontFamily: "'Source Serif 4',Georgia,serif",
    outline: "none",
    background: variant === "banner" ? "rgba(255,255,255,0.1)" : "#fff",
    color: variant === "banner" ? "#fcfaf7" : "#1a1a1a",
  };

  const btnStyle: React.CSSProperties = {
    background: variant === "banner" ? "#c0392b" : "#1a1a1a",
    border: "none", color: "#fff", padding: "10px 20px", borderRadius: 3,
    fontSize: 13, fontFamily: "'IBM Plex Sans',sans-serif", fontWeight: 600,
    cursor: status === "loading" ? "default" : "pointer", whiteSpace: "nowrap",
    opacity: status === "loading" ? 0.7 : 1,
  };

  const labelColor = variant === "banner" ? "rgba(252,250,247,0.55)" : "#999";
  const linkColor = variant === "banner" ? "rgba(252,250,247,0.7)" : "#777";

  if (variant === "banner") return (
    <div style={{ background: "#1a1a1a", padding: "40px clamp(16px,4vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 24, fontWeight: 800, color: "#fcfaf7", margin: "0 0 4px", letterSpacing: "-0.02em" }}>New interviews, straight to your inbox.</h3>
        <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 15, color: "rgba(252,250,247,0.45)", fontStyle: "italic", margin: "0 0 16px" }}>We'll notify you when new interviews are published. No spam, no marketing.</p>
        <div style={{ display: "flex", gap: 8, maxWidth: 420, marginBottom: 10 }}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && submit()} placeholder="you@company.com" style={inputStyle} />
          <button onClick={submit} disabled={status === "loading"} style={btnStyle}>{status === "loading" ? "..." : "Subscribe"}</button>
        </div>
        <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer" }}>
          <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} style={{ marginTop: 2, flexShrink: 0 }} />
          <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: labelColor, lineHeight: 1.5 }}>
            I'd like to receive new interview notifications from Global Innovation Magazine. I can unsubscribe at any time. See our <a href="/terms" style={{ color: linkColor }}>privacy policy</a>.
          </span>
        </label>
        {status === "error" && <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, color: "#e74c3c", margin: "8px 0 0" }}>{msg}</p>}
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && submit()} placeholder="you@company.com" style={inputStyle} />
        <button onClick={submit} disabled={status === "loading"} style={btnStyle}>{status === "loading" ? "..." : "Subscribe"}</button>
      </div>
      <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer" }}>
        <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} style={{ marginTop: 2, flexShrink: 0 }} />
        <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#999", lineHeight: 1.5 }}>
          I'd like to be notified when new interviews are published. No spam, unsubscribe any time. <a href="/terms" style={{ color: "#777" }}>Privacy policy</a>.
        </span>
      </label>
      {status === "error" && <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, color: "#e74c3c", margin: "6px 0 0" }}>{msg}</p>}
    </div>
  );
}
