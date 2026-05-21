"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS, CATEGORIES } from "@/lib/questions";

export default function ContributePage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [photo, setPhoto] = useState("");
  const [answers, setAnswers] = useState(QUESTIONS.map(() => ""));
  const [generating, setGenerating] = useState(false);
  const [genPhase, setGenPhase] = useState(0);
  const [dots, setDots] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  useEffect(() => {
    if (!generating) return;
    const t = setInterval(() => setDots((d) => (d.length >= 3 ? "" : d + ".")), 500);
    return () => clearInterval(t);
  }, [generating]);

  const canProceed =
    step === 0
      ? name && email && company && role
      : step <= 10
      ? answers[step - 1].trim().length > 20
      : true;

  const phases = [
    "Reading your responses",
    "Crafting each insight",
    "Writing the introduction",
    "Finishing up",
  ];

  const handleGenerate = async () => {
    setGenerating(true);
    setGenPhase(0);
    try {
      setGenPhase(1);
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, company, category, photo, answers }),
      });
      setGenPhase(2);
      const data = await res.json();
      setGenPhase(3);
      // For now, just show the result — in production this would save to DB
      // and redirect to /interview/[new-id]
      alert("Article generated! In production this saves to your database. Check the console for the result.");
      console.log("Generated interview:", data);
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Generation failed — check console. The API route needs an ANTHROPIC_API_KEY env var.");
      setGenerating(false);
    }
  };

  if (generating) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-8">
        <div className="font-display text-[28px] font-black text-[var(--ink)] mb-5 tracking-tight">
          Global Innovation
        </div>
        <p className="font-body text-base text-[var(--grey-600)] italic mb-7">
          {phases[genPhase]}{dots}
        </p>
        <div className="flex gap-1.5">
          {phases.map((_, i) => (
            <div
              key={i}
              className="w-7 h-[2.5px] rounded-sm transition-colors"
              style={{ background: i <= genPhase ? "var(--ink)" : "var(--grey-300)" }}
            />
          ))}
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white border border-[var(--grey-400)] rounded-sm px-3.5 py-2.5 text-[15px] text-[var(--ink)] font-body outline-none focus:border-[var(--ink)] transition-colors";

  return (
    <div ref={topRef}>
      <div className="max-w-[600px] mx-auto px-4 sm:px-8 pt-12">
        <span className="font-display text-[12px] italic text-[var(--red)]">
          Contribute
        </span>
        <h1 className="font-display text-[34px] font-black text-[var(--ink)] mt-1.5 mb-1.5 tracking-tight leading-[1.15]">
          10 Things I Know
        </h1>
        <p className="font-body text-base text-[var(--grey-600)] italic mb-7">
          Ten questions. Your answers. We&apos;ll handle the rest.
        </p>

        {/* Progress */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="flex-1 h-0.5 bg-[var(--grey-300)] rounded-sm overflow-hidden">
            <div
              className="h-full bg-[var(--ink)] transition-all duration-400"
              style={{ width: `${(step / 11) * 100}%` }}
            />
          </div>
          <span className="font-ui text-[11px] text-[var(--grey-500)] tabular-nums">
            {step}/11
          </span>
        </div>
      </div>

      <div className="max-w-[600px] mx-auto px-4 sm:px-8 pb-20">
        {step === 0 && (
          <div>
            <h2 className="font-display text-[22px] font-bold text-[var(--ink)] mb-1">
              About you
            </h2>
            <p className="font-body text-sm text-[var(--grey-600)] mb-6">
              So readers know who&apos;s talking.
            </p>
            {[
              { label: "Full name", val: name, set: setName, ph: "e.g. Sarah Chen" },
              { label: "Your role / title", val: role, set: setRole, ph: "e.g. Co-founder & CEO" },
              { label: "Company or organisation", val: company, set: setCompany, ph: "e.g. Luminary AI" },
              { label: "Email", val: email, set: setEmail, ph: "sarah@luminary.ai" },
              { label: "Photo URL (optional)", val: photo, set: setPhoto, ph: "https://..." },
            ].map((f, i) => (
              <div key={i} className="mb-4">
                <label className="block font-ui text-[11px] font-medium text-[var(--grey-700)] mb-1.5">
                  {f.label}
                </label>
                <input
                  value={f.val}
                  onChange={(e) => f.set(e.target.value)}
                  placeholder={f.ph}
                  className={inputClass}
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block font-ui text-[11px] font-medium text-[var(--grey-700)] mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step >= 1 && step <= 10 && (
          <div>
            <div className="font-ui text-[10px] font-semibold text-[var(--red)] tracking-[0.08em] uppercase mb-2.5">
              Question {step} of 10
            </div>
            <h2 className="font-display text-[22px] font-bold text-[var(--ink)] leading-snug mb-4">
              {QUESTIONS[step - 1]}
            </h2>
            <textarea
              value={answers[step - 1]}
              onChange={(e) => {
                const u = [...answers];
                u[step - 1] = e.target.value;
                setAnswers(u);
              }}
              placeholder="Take your time. There are no wrong answers…"
              rows={7}
              className={`${inputClass} resize-y leading-[1.7]`}
            />
            <div className="font-ui text-[11px] text-right mt-1.5" style={{
              color: answers[step - 1].length >= 20 ? "var(--grey-600)" : "var(--grey-400)",
            }}>
              {answers[step - 1].length} characters
              {answers[step - 1].length < 20 && " · min 20"}
            </div>
          </div>
        )}

        {step === 11 && (
          <div>
            <h2 className="font-display text-[22px] font-bold text-[var(--ink)] mb-1">
              Ready to publish
            </h2>
            <p className="font-body text-sm text-[var(--grey-600)] mb-5">
              Your answers become a &ldquo;10 Things I Know&rdquo; feature.
            </p>
            <div className="bg-white border border-[var(--grey-300)] rounded-sm p-4 mb-4">
              <div className="font-display text-[17px] font-bold text-[var(--ink)]">
                {name}, {role}
              </div>
              <div className="font-ui text-[12px] text-[var(--grey-600)]">
                {company} · {category}
              </div>
            </div>
          </div>
        )}

        {/* Nav */}
        <div className="flex justify-between mt-7 pt-5 border-t border-[var(--grey-300)]">
          <button
            onClick={() => step > 0 && setStep(step - 1)}
            disabled={step === 0}
            className="border border-[var(--grey-400)] px-4 py-2 rounded-sm font-ui text-[13px] font-medium disabled:text-[var(--grey-400)] disabled:cursor-default text-[var(--grey-700)] cursor-pointer hover:border-[var(--grey-600)] bg-transparent"
          >
            ← Back
          </button>
          {step < 11 ? (
            <button
              onClick={() => canProceed && setStep(step + 1)}
              disabled={!canProceed}
              className="px-5 py-2 rounded-sm font-ui text-[13px] font-semibold border-none cursor-pointer disabled:cursor-default transition-colors"
              style={{
                background: canProceed ? "var(--ink)" : "var(--grey-300)",
                color: canProceed ? "var(--cream)" : "var(--grey-500)",
              }}
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              className="bg-[var(--red)] hover:bg-[var(--red-dark)] text-white px-6 py-2 rounded-sm font-ui text-[13px] font-semibold border-none cursor-pointer"
            >
              Generate Article →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
