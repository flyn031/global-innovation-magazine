"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS, CATEGORIES } from "@/lib/questions";

export default function ContributePage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [name, setName] = useState(""); const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); const [role, setRole] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [photo, setPhoto] = useState("");
  const [answers, setAnswers] = useState(QUESTIONS.map(() => ""));
  const [generating, setGenerating] = useState(false);
  const [phase, setPhase] = useState(0); const [dots, setDots] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => { topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }, [step]);
  useEffect(() => {
    if (!generating) return;
    const t = setInterval(() => setDots(d => d.length >= 3 ? "" : d + "."), 500);
    return () => clearInterval(t);
  }, [generating]);

  const canGo = step === 0 ? name && email && company && role : step <= 10 ? answers[step-1].trim().length > 20 : true;
  const phases = ["Reading your responses", "Crafting each insight", "Writing the introduction", "Finishing up"];

  const inputStyle: React.CSSProperties = { width: "100%", background: "#fff", border: "1px solid #ddd", borderRadius: 3, padding: "10px 13px", fontSize: 15, color: "#1a1a1a", fontFamily: "'Source Serif 4',Georgia,serif", outline: "none", boxSizing: "border-box" };

  const handleGenerate = async () => {
    setGenerating(true); setPhase(0);
    try {
      setPhase(1);
      const res = await fetch("/api/generate", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, company, category, photo, answers, email }),
      });
      setPhase(2);
      const data = await res.json();
      setPhase(3);
      await new Promise(r => setTimeout(r, 500));
      if (data.status === "pending_review") {
        router.push("/?submitted=true");
      } else {
        router.push(`/interview/${data.id}`);
      }
    } catch (err) {
      console.error(err);
      alert("Generation failed. Please check your Anthropic API key is set in Railway Variables.");
      setGenerating(false);
    }
  };

  if (generating) return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "100px 40px" }}>
      <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 28, fontWeight: 900, color: "#1a1a1a", marginBottom: 20 }}>Global Innovation</div>
      <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 16, color: "#aaa", fontStyle: "italic", marginBottom: 28 }}>{phases[phase]}{dots}</p>
      <div style={{ display: "flex", gap: 6 }}>
        {phases.map((_, i) => <div key={i} style={{ width: 28, height: 2.5, borderRadius: 1, background: i <= phase ? "#1a1a1a" : "#e8e4dc", transition: "background 0.4s" }} />)}
      </div>
    </div>
  );

  return (
    <div ref={topRef}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "48px clamp(16px,4vw,40px) 0" }}>
        <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12, fontStyle: "italic", color: "#c0392b" }}>Contribute</span>
        <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 34, fontWeight: 900, color: "#1a1a1a", margin: "6px 0 6px", letterSpacing: "-0.025em", lineHeight: 1.15 }}>10 Things I Know</h1>
        <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 16, color: "#999", fontStyle: "italic", margin: "0 0 28px" }}>Ten questions. Your answers. We'll handle the rest.</p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
          <div style={{ flex: 1, height: 2, background: "#e8e4dc", borderRadius: 1, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(step/11)*100}%`, background: "#1a1a1a", transition: "width 0.4s ease" }} />
          </div>
          <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#bbb" }}>{step}/11</span>
        </div>
      </div>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 clamp(16px,4vw,40px) 80px" }}>
        {step === 0 && (
          <div>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 22, fontWeight: 700, color: "#1a1a1a", margin: "0 0 4px" }}>About you</h2>
            <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 14, color: "#aaa", margin: "0 0 24px" }}>So readers know who's talking.</p>
            {[{l:"Full name",v:name,s:setName,p:"e.g. Sarah Chen"},{l:"Your role / title",v:role,s:setRole,p:"e.g. Co-founder & CEO"},{l:"Company or organisation",v:company,s:setCompany,p:"e.g. Luminary AI"},{l:"Email",v:email,s:setEmail,p:"sarah@luminary.ai"},{l:"Photo URL (optional)",v:photo,s:setPhoto,p:"https://..."}].map((f,i) => (
              <div key={i} style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, fontWeight: 500, color: "#777", marginBottom: 5 }}>{f.l}</label>
                <input value={f.v} onChange={e => f.s(e.target.value)} placeholder={f.p} style={inputStyle} />
              </div>
            ))}
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, fontWeight: 500, color: "#777", marginBottom: 5 }}>Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)} style={inputStyle}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        )}
        {step >= 1 && step <= 10 && (
          <div>
            <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 10, fontWeight: 600, color: "#c0392b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Question {step} of 10</div>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 22, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3, margin: "0 0 18px" }}>{QUESTIONS[step-1]}</h2>
            <textarea value={answers[step-1]} onChange={e => { const u=[...answers]; u[step-1]=e.target.value; setAnswers(u); }} placeholder="Take your time. There are no wrong answers…" rows={7} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }} />
            <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: answers[step-1].length >= 20 ? "#aaa" : "#ddd", marginTop: 5, textAlign: "right" }}>{answers[step-1].length} characters{answers[step-1].length < 20 ? " · min 20" : ""}</div>
          </div>
        )}
        {step === 11 && (
          <div>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 22, fontWeight: 700, color: "#1a1a1a", margin: "0 0 4px" }}>Ready to publish</h2>
            <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 14, color: "#aaa", margin: "0 0 20px" }}>Your answers become a "10 Things I Know" feature. Free submissions are reviewed before publishing — usually within 48 hours.</p>
            <div style={{ background: "#fff", border: "1px solid #e8e4dc", borderRadius: 3, padding: "16px 20px" }}>
              <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 17, fontWeight: 700, color: "#1a1a1a" }}>{name}, {role}</div>
              <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, color: "#aaa" }}>{company} · {category}</div>
            </div>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, paddingTop: 20, borderTop: "1px solid #e8e4dc" }}>
          <button onClick={() => step > 0 && setStep(step-1)} disabled={step === 0} style={{ background: "none", border: "1px solid #ddd", color: step === 0 ? "#ddd" : "#666", padding: "9px 18px", borderRadius: 3, fontSize: 13, fontFamily: "'IBM Plex Sans',sans-serif", cursor: step === 0 ? "default" : "pointer" }}>← Back</button>
          {step < 11
            ? <button onClick={() => canGo && setStep(step+1)} disabled={!canGo} style={{ background: canGo ? "#1a1a1a" : "#e8e4dc", border: "none", color: canGo ? "#fcfaf7" : "#bbb", padding: "9px 22px", borderRadius: 3, fontSize: 13, fontFamily: "'IBM Plex Sans',sans-serif", fontWeight: 600, cursor: canGo ? "pointer" : "default" }}>Continue →</button>
            : <button onClick={handleGenerate} style={{ background: "#c0392b", border: "none", color: "#fff", padding: "9px 24px", borderRadius: 3, fontSize: 13, fontFamily: "'IBM Plex Sans',sans-serif", fontWeight: 600, cursor: "pointer" }}>Generate Article →</button>
          }
        </div>
      </div>
    </div>
  );
}
