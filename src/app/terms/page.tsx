export default function TermsPage() {
  const h2s: React.CSSProperties = { fontFamily: "'Playfair Display',Georgia,serif", fontSize: 18, fontWeight: 700, color: "#1a1a1a", margin: "0 0 8px" };
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "48px clamp(16px,4vw,40px) 80px" }}>
      <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12, fontStyle: "italic", color: "#c0392b" }}>Legal</span>
      <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 34, fontWeight: 900, color: "#1a1a1a", margin: "6px 0 32px", letterSpacing: "-0.025em" }}>Terms & Privacy</h1>
      <div style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 15, lineHeight: 1.82, color: "#666" }}>
        {[
          {t:"About this publication", b:"Global Innovation Magazine is published by James O'Flynn. Founded in 2013 in Leicester, UK."},
          {t:"Editorial content", b:"All interviews published on this site were conducted by Global Innovation Magazine. Our '10 Things I Know' format presents interview responses as standalone insights, editorially refined for clarity. New submissions may be processed with AI tools to transform raw responses into polished prose. All content is reviewed before publication."},
          {t:"Archive content", b:"Interviews marked 'From the Archive' were originally published in earlier editions. Roles, titles, and views expressed were accurate at the time of the original interview and may have since changed."},
          {t:"Submissions", b:"By submitting responses, you grant Global Innovation Magazine the right to publish, edit, and distribute your interview. You retain ownership of your original responses. You may request removal at any time by contacting us."},
          {t:"Featured interviews & payments", b:"Our Featured and Innovation Partner tiers involve a fee for guaranteed publication and additional services. We reserve the right to decline submissions that do not meet our editorial standards, regardless of payment. Refunds are available if we decline to publish."},
          {t:"Privacy & data", b:"We collect email addresses solely to send our newsletter. We do not sell or share your email address. You can unsubscribe at any time. Submission form data is stored securely and used only to produce your interview."},
          {t:"Copyright", b:`All editorial content, design, and formatting is © ${new Date().getFullYear()} Global Innovation Magazine. Interview responses remain the intellectual property of the interviewee.`},
        ].map(s => (
          <section key={s.t} style={{ marginBottom: 24 }}>
            <h2 style={h2s}>{s.t}</h2>
            <p style={{ margin: 0 }}>{s.b}</p>
          </section>
        ))}
        <section>
          <h2 style={h2s}>Contact</h2>
          <p style={{ margin: 0 }}>For questions, to request removal of content, or any other enquiries: <a href="mailto:james@globalinnovationmagazine.com" style={{ color: "#c0392b" }}>james@globalinnovationmagazine.com</a></p>
        </section>
        <p style={{ marginTop: 32, color: "#aaa", fontSize: 13, fontStyle: "italic" }}>Last updated: June 2026</p>
      </div>
    </div>
  );
}
