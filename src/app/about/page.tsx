import Link from "next/link";
export default function AboutPage() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "48px clamp(16px,4vw,40px) 80px" }}>
      <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12, fontStyle: "italic", color: "#c0392b" }}>About</span>
      <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 34, fontWeight: 900, color: "#1a1a1a", margin: "6px 0 24px", letterSpacing: "-0.025em" }}>The story so far</h1>
      <div style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 16, lineHeight: 1.82, color: "#555" }}>
        <p>Global Innovation Magazine started in 2013 as a free quarterly digital publication with a simple idea: share the excitement of innovation by talking to the people making it happen.</p>
        <p>Over the years we interviewed and worked with some remarkable companies and individuals — Airbnb, Thomson Reuters, DP World, Brompton Bicycle, Synechron, Specialized Bikes, The Ocean Cleanup, Team Sky, Virgin Formula E, Globant, YES Bank India, and many others.</p>
        <p>Our "10 Things I Know" interviews are built around ten questions, each answer distilled into a standalone insight. No fluff, no filler — just the things worth knowing, from the people who know them.</p>
        <p style={{ marginBottom: 32 }}>The goal hasn't changed since 2013: bring you interviews that impact upon your work, your business, and your life.</p>
      </div>
      <div style={{ borderTop: "1px solid #e8e4dc", paddingTop: 20, display: "flex", gap: 28, marginBottom: 32 }}>
        {[{v:"2013",l:"Founded"},{v:"Leicester",l:"Home"},{v:"10",l:"Questions, always"}].map(s => (
          <div key={s.l}><div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 24, fontWeight: 900, color: "#1a1a1a" }}>{s.v}</div><div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#aaa" }}>{s.l}</div></div>
        ))}
      </div>
      <Link href="/contribute" style={{ display: "inline-block", background: "#c0392b", color: "#fff", textDecoration: "none", padding: "12px 26px", borderRadius: 3, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, fontWeight: 600 }}>Contribute an Interview →</Link>
    </div>
  );
}
