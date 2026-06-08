import Link from "next/link";
import { getAllInterviews } from "@/lib/interviews";
import SubscribeForm from "@/components/SubscribeForm";

export const revalidate = 60;

export default async function HomePage() {
  const interviews = await getAllInterviews();
  const hero = interviews[0];
  const rest = interviews.slice(1);

  const s: Record<string, React.CSSProperties> = {
    cat: { fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c0392b" },
    tag: { fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#666", background: "#f0ede7", padding: "2px 7px", borderRadius: 2 },
    dot: { fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#ccc" },
    italic: { fontFamily: "'Playfair Display',Georgia,serif", fontSize: 11, fontStyle: "italic", color: "#999" },
  };

  return (
    <>
      {/* Masthead */}
      <div style={{ borderBottom: "1px solid #e8e4dc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "10px clamp(16px,4vw,40px)", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#bbb" }}>Est. 2013 · Leicester, UK</span>
          <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#bbb" }}>Innovation · Leadership · Technology</span>
        </div>
      </div>

      {/* Hero */}
      {hero && (
        <Link href={`/interview/${hero.id}`} style={{ textDecoration: "none", display: "block" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px clamp(16px,4vw,40px)", borderBottom: "1px solid #e8e4dc", display: "grid", gridTemplateColumns: "280px 1fr", gap: 36, alignItems: "center", cursor: "pointer" }}>
            {hero.photo && (
              <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: 4, overflow: "hidden", background: "#e8e4dc" }}>
                <img src={hero.photo} alt={hero.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(15%)" }} />
              </div>
            )}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                <span style={s.cat}>{hero.category}</span>
                <span style={s.dot}>·</span>
                <span style={s.italic}>10 Things I Know</span>
                {hero.archive && <><span style={s.dot}>·</span><span style={s.tag}>Archive</span></>}
              </div>
              <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: "#1a1a1a", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 10px" }}>{hero.name}, {hero.descriptor}</h1>
              <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.5, color: "#777", fontStyle: "italic", margin: "0 0 14px" }}>{hero.subheadline}</p>
              <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, color: "#bbb" }}>{hero.date} · {hero.read_time}</span>
              {hero.pull_quote && (
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 16, fontStyle: "italic", color: "#555", lineHeight: 1.4, margin: 0 }}>"{hero.pull_quote}"</p>
                </div>
              )}
            </div>
          </div>
        </Link>
      )}

      {/* Subscribe inline */}
      <div style={{ borderBottom: "1px solid #e8e4dc", background: "#f7f5ef" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px clamp(16px,4vw,40px)", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>Get every interview in your inbox.</span>
            <span style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 13, color: "#999", fontStyle: "italic", marginLeft: 8 }}>Free, fortnightly.</span>
          </div>
          <div style={{ flex: 1, maxWidth: 360 }}><SubscribeForm source="homepage-inline" variant="minimal" /></div>
        </div>
      </div>

      {/* Section header */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px clamp(16px,4vw,40px) 0" }}>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: "0 0 24px", paddingBottom: 8, borderBottom: "2px solid #1a1a1a", display: "inline-block" }}>Interviews</h2>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px,4vw,40px) 48px", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "28px 24px" }}>
        {rest.map(iv => (
          <Link key={iv.id} href={`/interview/${iv.id}`} style={{ textDecoration: "none", display: "block", paddingBottom: 20, borderBottom: "1px solid #e8e4dc" }}>
            {iv.photo && (
              <div style={{ width: "100%", aspectRatio: "16/10", borderRadius: 3, overflow: "hidden", marginBottom: 14, background: "#e8e4dc" }}>
                <img src={iv.photo} alt={iv.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(15%)" }} />
              </div>
            )}
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap", alignItems: "center" }}>
              <span style={s.cat}>{iv.category}</span>
              {iv.archive && <><span style={s.dot}>·</span><span style={s.tag}>Archive</span></>}
            </div>
            <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 19, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.25, margin: "0 0 2px" }}>{iv.name}</h3>
            <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, color: "#888", marginBottom: 6 }}>{iv.role}, {iv.company}</div>
            <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 14, lineHeight: 1.5, color: "#888", fontStyle: "italic", margin: "0 0 8px" }}>{iv.subheadline}</p>
            <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#bbb" }}>{iv.date} · {iv.read_time}</span>
          </Link>
        ))}
      </div>

      {/* Get Featured CTA */}
      <div style={{ borderTop: "1px solid #e8e4dc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px clamp(16px,4vw,40px)", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12, fontStyle: "italic", color: "#c0392b" }}>Get Featured</span>
            <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 24, fontWeight: 800, color: "#1a1a1a", margin: "4px 0 6px", letterSpacing: "-0.02em" }}>Your story, professionally told.</h3>
            <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 15, color: "#777", margin: 0, lineHeight: 1.5 }}>A "10 Things I Know" feature with editorial polish, newsletter distribution, social assets, and a permanent backlink. From £199.</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <Link href="/get-featured" style={{ background: "#c0392b", color: "#fff", textDecoration: "none", padding: "11px 24px", borderRadius: 3, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, fontWeight: 600 }}>See Pricing →</Link>
            <Link href="/contribute" style={{ border: "1px solid #ddd", color: "#555", textDecoration: "none", padding: "11px 20px", borderRadius: 3, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13 }}>Submit Free</Link>
          </div>
        </div>
      </div>

      <SubscribeForm source="homepage-footer" variant="banner" />

      {/* Footer */}
      <footer style={{ maxWidth: 1100, margin: "0 auto", padding: "20px clamp(16px,4vw,40px)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#bbb" }}>© 2026 Global Innovation Magazine</span>
        <div style={{ display: "flex", gap: 16 }}>
          {[{ href: "/newsletter", l: "Newsletter" }, { href: "/partners", l: "Partners" }, { href: "/terms", l: "Terms & Privacy" }].map(({ href, l }) => (
            <Link key={href} href={href} style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#bbb", textDecoration: "none" }}>{l}</Link>
          ))}
          <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#bbb" }}>Leicester, UK · Since 2013</span>
        </div>
      </footer>
    </>
  );
}
