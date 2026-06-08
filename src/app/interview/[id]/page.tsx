import { notFound } from "next/navigation";
import Link from "next/link";
import { getInterview, getAllInterviewIds } from "@/lib/interviews";
import SubscribeForm from "@/components/SubscribeForm";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const ids = await getAllInterviewIds();
  return ids.map(id => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const iv = await getInterview(id);
  if (!iv) return {};
  return { title: `${iv.name} — Global Innovation Magazine`, description: iv.seo_description || iv.subheadline };
}

const cat: React.CSSProperties = { fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c0392b" };
const archiveTag: React.CSSProperties = { fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#666", background: "#f0ede7", padding: "2px 7px", borderRadius: 2 };

export default async function InterviewPage({ params }: Props) {
  const { id } = await params;
  const iv = await getInterview(id);
  if (!iv) notFound();

  return (
    <>
      {/* Header */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "40px clamp(16px,4vw,40px) 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: iv.photo ? "200px 1fr" : "1fr", gap: 28, alignItems: "start" }}>
          {iv.photo && (
            <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: 3, overflow: "hidden", background: "#e8e4dc", position: "relative" }}>
              <img src={iv.photo} alt={iv.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(15%)" }} />
              {iv.id === "boyan-slat" && (
                <span style={{ position: "absolute", bottom: 8, right: 8, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.7)", background: "rgba(0,0,0,0.4)", padding: "2px 6px", borderRadius: 2 }}>Photo: The Ocean Cleanup</span>
              )}
            </div>
          )}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              <span style={cat}>{iv.category}</span>
              <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#ccc" }}>·</span>
              <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#999" }}>{iv.date}</span>
              {iv.archive && <><span style={{ color: "#ccc" }}>·</span><span style={archiveTag}>From the Archive</span></>}
              {iv.issue && <><span style={{ color: "#ccc" }}>·</span><span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#aaa", fontStyle: "italic" }}>{iv.issue}</span></>}
            </div>
            <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 13, fontStyle: "italic", color: "#c0392b", margin: "0 0 8px" }}>10 Things I Know</p>
            <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#1a1a1a", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 6px" }}>{iv.name}, {iv.descriptor}</h1>
            <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 17, lineHeight: 1.5, color: "#777", fontStyle: "italic", margin: 0 }}>{iv.subheadline}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 clamp(16px,4vw,40px)" }}>
        <hr style={{ border: "none", borderTop: "1px solid #e8e4dc", margin: "28px 0" }} />
      </div>

      {/* Intro */}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 clamp(16px,4vw,40px)" }}>
        <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 17, lineHeight: 1.8, color: "#555", margin: "0 0 8px" }}>{iv.intro}</p>
        <hr style={{ border: "none", borderTop: "1px solid #e8e4dc", margin: "28px 0" }} />
      </div>

      {/* Insights */}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 clamp(16px,4vw,40px)" }}>
        {iv.insights.map((insight, i) => (
          <div key={i}>
            <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 17, lineHeight: 1.82, color: "#333", margin: 0 }}>{insight}</p>
            {i < iv.insights.length - 1 && <div className="insight-divider" />}
          </div>
        ))}
      </div>

      {/* Pull quote */}
      {iv.pull_quote && (
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "36px clamp(16px,4vw,40px) 0" }}>
          <div className="pull-quote">
            <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(20px,3vw,28px)", fontWeight: 700, fontStyle: "italic", color: "#1a1a1a", lineHeight: 1.35, margin: 0 }}>"{iv.pull_quote}"</p>
          </div>
        </div>
      )}

      {/* Tags */}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "28px clamp(16px,4vw,40px) 0" }}>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {iv.tags.map(t => (
            <span key={t} style={{ padding: "3px 9px", borderRadius: 2, background: "#f0ede7", fontSize: 11, fontFamily: "'IBM Plex Sans',sans-serif", fontWeight: 500, color: "#999" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Archive disclaimer */}
      {iv.archive && (
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "16px clamp(16px,4vw,40px) 0" }}>
          <div style={{ border: "1px solid #e8e4dc", borderRadius: 3, padding: "12px 16px", background: "#f7f5ef" }}>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, color: "#888", lineHeight: 1.5, margin: 0 }}>
              <strong>From the Archive</strong> — This interview was originally published in {iv.issue || "Global Innovation Magazine"} ({iv.date}). Roles, titles, and views expressed were accurate at the time of the original interview and may have since changed.
            </p>
          </div>
        </div>
      )}

      {/* Subscribe */}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "20px clamp(16px,4vw,40px)" }}>
        <div style={{ background: "#f7f5ef", border: "1px solid #e8e4dc", borderRadius: 3, padding: "20px 24px", marginBottom: 20 }}>
          <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 15, fontWeight: 700, color: "#1a1a1a", margin: "0 0 4px" }}>Enjoyed this interview?</h3>
          <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 13, color: "#888", fontStyle: "italic", margin: "0 0 12px" }}>Get every "10 Things I Know" interview in your inbox. Free, fortnightly.</p>
          <SubscribeForm source={`interview-${iv.id}`} variant="minimal" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <Link href="/" style={{ border: "1px solid #ddd", color: "#666", textDecoration: "none", padding: "9px 18px", borderRadius: 3, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13 }}>← Back to all interviews</Link>
          <Link href="/get-featured" style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: "#c0392b", textDecoration: "none" }}>Want to be featured? →</Link>
        </div>
      </div>
    </>
  );
}
