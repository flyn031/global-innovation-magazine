import Link from "next/link";
export default function PartnersPage() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "48px clamp(16px,4vw,40px) 80px" }}>
      <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12, fontStyle: "italic", color: "#c0392b" }}>Partners</span>
      <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 34, fontWeight: 900, color: "#1a1a1a", margin: "6px 0 24px", letterSpacing: "-0.025em" }}>Innovation Partners</h1>
      <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 16, color: "#777", lineHeight: 1.8, margin: "0 0 32px" }}>Our Innovation Partners help us keep publishing great interviews and get their brand in front of the founders, innovators, and leaders who read us. £499/quarter — founding partners locked in at £399.</p>
      <div style={{ background: "#f7f5ef", border: "1px solid #e8e4dc", borderRadius: 4, padding: 32, textAlign: "center", marginBottom: 32 }}>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 22, fontWeight: 700, color: "#1a1a1a", margin: "0 0 8px" }}>Founding Partners wanted</h2>
        <p style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 15, color: "#777", fontStyle: "italic", margin: "0 0 20px" }}>We're looking for our first Innovation Partners as we relaunch. Founding partners get locked-in pricing and prominent placement.</p>
        <a href="mailto:james@globalinnovationmagazine.com?subject=Founding%20Partner%20Enquiry" style={{ display: "inline-block", background: "#1a1a1a", color: "#fcfaf7", textDecoration: "none", padding: "11px 24px", borderRadius: 3, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, fontWeight: 600 }}>Enquire About Partnership</a>
      </div>
    </div>
  );
}
