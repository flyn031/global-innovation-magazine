import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";

const TIERS = [
  { name: "Community", price: "Free", note: "always", highlight: false, cta: "Submit Your Answers", ctaHref: "/contribute",
    features: ["Submit your 10 Things I Know answers","Editorial review — published if selected","Listed in our interview archive","Shareable article link"] },
  { name: "Featured", price: "£199", note: "one-off", highlight: true, cta: "Apply to Be Featured", ctaHref: `mailto:james@globalinnovationmagazine.com?subject=Featured%20Interview%20Application`,
    features: ["Everything in Community, plus:","Guaranteed publication within 7 days","Professional editorial review & polish","Social media asset pack (LinkedIn, X)","Included in next newsletter","'Featured in GIM' badge for your site","SEO-optimised with your keywords","Permanent dofollow backlink"] },
  { name: "Innovation Partner", price: "£499", note: "per quarter", highlight: false, cta: "Become a Partner", ctaHref: `mailto:james@globalinnovationmagazine.com?subject=Innovation%20Partner%20Enquiry`,
    features: ["Everything in Featured, plus:","Logo on homepage partner strip","Sponsored slot in fortnightly newsletter","One featured interview per quarter","Early access to trend reports","Priority placement in interview grid"] },
];

export default function GetFeaturedPage() {
  const h3s: React.CSSProperties = { fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, color: "#1a1a1a", marginBottom: 6 };
  return (
    <>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px clamp(16px,4vw,40px) 40px", textAlign: "center" }}>
        <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12, fontStyle: "italic", color: "#c0392b" }}>Get Featured</span>
        <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(32px,5vw,48px)", fontWeight: 900, color: "#1a1a1a", margin: "8px 0 16px", letterSpacing: "-0.025em", lineHeight: 1.1 }}>Your story, professionally told.</h1>
        <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 18, color: "#777", fontStyle: "italic", maxWidth: 560, margin: "0 auto 32px" }}>A "10 Things I Know" feature gives you a professionally written interview you can share with investors, clients, and your network.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginBottom: 40 }}>
          {[{s:"2013",l:"Publishing since"},{s:"50+",l:"Companies featured"},{s:"10",l:"Questions, always"}].map(s => (
            <div key={s.l}><div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 28, fontWeight: 900, color: "#1a1a1a" }}>{s.s}</div><div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "#999" }}>{s.l}</div></div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px,4vw,40px) 60px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
        {TIERS.map(t => (
          <div key={t.name} style={{ background: t.highlight ? "#1a1a1a" : "#fff", border: t.highlight ? "none" : "1px solid #e8e4dc", borderRadius: 4, padding: 28, display: "flex", flexDirection: "column", position: "relative" }}>
            {t.highlight && <div style={{ position: "absolute", top: -12, left: 24, background: "#c0392b", color: "#fff", fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 2 }}>Most Popular</div>}
            <h3 style={{ ...h3s, fontSize: 18, color: t.highlight ? "#fcfaf7" : "#1a1a1a", margin: "0 0 4px" }}>{t.name}</h3>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
              <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 30, fontWeight: 900, color: t.highlight ? "#fcfaf7" : "#1a1a1a" }}>{t.price}</span>
              <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, color: t.highlight ? "rgba(252,250,247,0.45)" : "#aaa" }}>{t.note}</span>
            </div>
            <ul style={{ flex: 1, listStyle: "none", padding: 0, margin: "0 0 24px" }}>
              {t.features.map((f,i) => (
                <li key={i} style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: t.highlight ? (i===0?"rgba(252,250,247,0.4)":"rgba(252,250,247,0.8)") : (i===0&&t.name!=="Community"?"#aaa":"#555"), padding: "4px 0", fontStyle: i===0&&t.name!=="Community"?"italic":"normal" }}>
                  {(i>0||t.name==="Community") && <span style={{ color: "#c0392b", marginRight: 8 }}>✓</span>}{f}
                </li>
              ))}
            </ul>
            <a href={t.ctaHref} style={{ display: "block", textAlign: "center", textDecoration: "none", padding: "11px 0", borderRadius: 3, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, fontWeight: 600, background: t.highlight ? "#c0392b" : t.name==="Community" ? "#1a1a1a" : "transparent", color: t.highlight||t.name==="Community" ? "#fff" : "#1a1a1a", border: t.name==="Innovation Partner" ? "1px solid #ddd" : "none" }}>{t.cta}</a>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid #e8e4dc" }}>
        <div style={{ maxWidth: 500, margin: "0 auto", padding: "48px clamp(16px,4vw,40px)", textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 18, fontWeight: 700, color: "#1a1a1a", margin: "0 0 6px" }}>Not ready yet? Stay in the loop.</h3>
          <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 14, color: "#aaa", fontStyle: "italic", margin: "0 0 16px" }}>Get every interview in your inbox. Free, fortnightly.</p>
          <SubscribeForm source="get-featured-page" />
        </div>
      </div>
    </>
  );
}
