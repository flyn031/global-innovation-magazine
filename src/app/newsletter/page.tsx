import SubscribeForm from "@/components/SubscribeForm";
export default function NewsletterPage() {
  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "48px clamp(16px,4vw,40px) 80px" }}>
      <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12, fontStyle: "italic", color: "#c0392b" }}>Newsletter</span>
      <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 34, fontWeight: 900, color: "#1a1a1a", margin: "6px 0 8px", letterSpacing: "-0.025em" }}>Every interview, in your inbox.</h1>
      <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 16, color: "#777", fontStyle: "italic", margin: "0 0 24px" }}>Free. Fortnightly. Unsubscribe any time.</p>
      <SubscribeForm source="newsletter-page" />
      <div style={{ borderTop: "1px solid #e8e4dc", marginTop: 32, paddingTop: 24 }}>
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, color: "#aaa", lineHeight: 1.6 }}>
          <strong>Sponsor our newsletter?</strong> We accept one sponsor per issue. If you build tools or services for founders and innovators, <a href="mailto:james@globalinnovationmagazine.com?subject=Newsletter%20Sponsorship" style={{ color: "#c0392b" }}>get in touch</a>.
        </p>
      </div>
    </div>
  );
}
