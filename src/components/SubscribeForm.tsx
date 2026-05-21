"use client";
import { useState } from "react";

interface Props {
  source?: string;
  variant?: "inline" | "banner" | "minimal";
  className?: string;
}

export default function SubscribeForm({ source = "website", variant = "inline", className = "" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      setStatus("success");
      setMessage(data.message || "You're in!");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={`${className}`}>
        <p className="font-body text-base text-[var(--red)] italic">
          ✓ {message}
        </p>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className={`bg-[var(--ink)] px-4 sm:px-8 py-10 ${className}`}>
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[520px]">
            <h3 className="font-display text-2xl font-extrabold text-[var(--cream)] tracking-tight mb-1">
              Every interview, in your inbox.
            </h3>
            <p className="font-body text-[15px] text-[var(--cream)]/45 italic mb-5">
              Join founders, innovators, and leaders who get our interviews first.
              Free, fortnightly, no spam.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="you@company.com"
                className="flex-1 bg-white/10 border border-white/15 rounded-sm px-3.5 py-2.5 text-[15px] text-[var(--cream)] font-body outline-none focus:border-white/30 placeholder:text-white/25"
              />
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="bg-[var(--red)] hover:bg-[var(--red-dark)] text-white px-5 py-2.5 rounded-sm font-ui text-[13px] font-semibold border-none cursor-pointer whitespace-nowrap disabled:opacity-50"
              >
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </div>
            {status === "error" && (
              <p className="font-ui text-[12px] text-red-400 mt-2">{message}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="you@company.com"
          className="flex-1 bg-white border border-[var(--grey-400)] rounded-sm px-3 py-2 text-[14px] text-[var(--ink)] font-body outline-none focus:border-[var(--ink)]"
        />
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="bg-[var(--ink)] hover:bg-[var(--grey-900)] text-[var(--cream)] px-4 py-2 rounded-sm font-ui text-[12px] font-semibold border-none cursor-pointer whitespace-nowrap disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </div>
    );
  }

  // Default inline variant
  return (
    <div className={`${className}`}>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="you@company.com"
          className="flex-1 bg-white border border-[var(--grey-400)] rounded-sm px-3.5 py-2.5 text-[15px] text-[var(--ink)] font-body outline-none focus:border-[var(--ink)]"
        />
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="bg-[var(--red)] hover:bg-[var(--red-dark)] text-white px-5 py-2.5 rounded-sm font-ui text-[13px] font-semibold border-none cursor-pointer whitespace-nowrap disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe Free"}
        </button>
      </div>
      {status === "error" && (
        <p className="font-ui text-[12px] text-red-500 mt-1.5">{message}</p>
      )}
    </div>
  );
}
