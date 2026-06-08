"use client";
import { useState } from "react";

interface Props {
  source?: string;
  variant?: "inline" | "banner" | "minimal";
}

export default function SubscribeForm({ source = "website", variant = "inline" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      setStatus("success"); setMsg(data.message || "You're in!"); setEmail("");
    } catch {
      setStatus("error"); setMsg("Something went wrong. Try again.");
    }
  };

  if (status === "success") return (
    <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 15, color: "#c0392b", fontStyle: "italic" }}>✓ {msg}</p>
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
    cursor: "pointer", whiteSpace: "nowrap",
  };

  if (variant === "banner") return (
    <div style={{ background: "#1a1a1a", padding: "40px clamp(16px,4vw,40px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 24, fontWeight: 800, color: "#fcfaf7", margin: "0 0 4px", letterSpacing: "-0.02em" }}>Every interview, in your inbox.</h3>
        <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 15, color: "rgba(252,250,247,0.45)", fontStyle: "italic", margin: "0 0 20px" }}>Join founders, innovators, and leaders who get our interviews first. Free, fortnightly.</p>
        <div style={{ display: "flex", gap: 8, maxWidth: 420 }}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && submit()} placeholder="you@company.com" style={{ ...inputStyle, border: "1px solid rgba(255,255,255,0.15)" }} />
          <button onClick={submit} disabled={status === "loading"} style={btnStyle}>{status === "loading" ? "..." : "Subscribe"}</button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && submit()} placeholder="you@company.com" style={inputStyle} />
      <button onClick={submit} disabled={status === "loading"} style={btnStyle}>{status === "loading" ? "..." : "Subscribe"}</button>
    </div>
  );
}
