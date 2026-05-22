import Link from "next/link";
import type { Metadata } from "next";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "Get Featured — Global Innovation Magazine",
  description:
    "Get a professionally written feature interview in Global Innovation Magazine. Reach founders, innovators and leaders.",
};

const TIERS = [
  {
    name: "Community",
    price: "Free",
    priceNote: "always",
    description: "Submit your 10 questions and join the queue. We publish the best submissions editorially.",
    features: [
      "Submit your 10 Things I Know answers",
      "Editorial review — published if selected",
      "Listed in our interview archive",
      "Shareable article link",
    ],
    cta: "Submit Your Answers",
    ctaHref: "/contribute",
    highlight: false,
  },
  {
    name: "Featured",
    price: "£199",
    priceNote: "one-off",
    description: "Guaranteed publication within 7 days. A professionally written feature you can use everywhere.",
    features: [
      "Everything in Community, plus:",
      "Guaranteed publication within 7 days",
      "Professional editorial review & polish",
      "Social media asset pack (LinkedIn, X)",
      "Included in next newsletter to all subscribers",
      "\"Featured in Global Innovation Magazine\" badge",
      "SEO-optimised with your target keywords",
      "Permanent dofollow backlink to your site",
    ],
    cta: "Apply to Be Featured",
    ctaHref: "mailto:james@globalinnovationmagazine.com?subject=Featured%20Interview%20Application&body=Hi%2C%0A%0AI'd%20like%20to%20apply%20for%20a%20Featured%20Interview.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWebsite%3A%0A%0AWhat%20makes%20your%20story%20interesting%3A%0A",
    highlight: true,
  },
  {
    name: "Innovation Partner",
    price: "£499",
    priceNote: "per quarter",
    description: "For companies that want ongoing visibility in front of our innovation-focused audience.",
    features: [
      "Everything in Featured, plus:",
      "Logo on homepage partner strip",
      "Sponsored slot in fortnightly newsletter",
      "Backlink from dedicated Partners page",
      "One featured interview per quarter",
      "Early access to trend reports & data",
      "Priority placement in interview grid",
    ],
    cta: "Become a Partner",
    ctaHref: "mailto:james@globalinnovationmagazine.com?subject=Innovation%20Partner%20Enquiry&body=Hi%2C%0A%0AWe're%20interested%20in%20becoming%20an%20Innovation%20Partner.%0A%0ACompany%3A%0AWebsite%3A%0AWhat%20you're%20looking%20for%3A%0A",
    highlight: false,
  },
];

const SOCIAL_PROOF = [
  { stat: "2013", label: "Publishing since" },
  { stat: "50+", label: "Companies featured" },
  { stat: "100%", label: "Of featured interviews shared on LinkedIn" },
];

export default function GetFeaturedPage() {
  return (
    <>
      {/* Hero */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-8 pt-12 pb-10 text-center">
        <span className="font-display text-[12px] italic text-[var(--red)]">
          Get Featured
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-black text-[var(--ink)] mt-2 mb-4 tracking-tight leading-[1.1]">
          Your story, professionally told.
        </h1>
        <p className="font-body text-lg text-[var(--grey-700)] italic leading-relaxed max-w-[600px] mx-auto mb-8">
          A &ldquo;10 Things I Know&rdquo; feature gives you a professionally written
          interview you can share with investors, clients, and your network.
          Reach thousands of founders and innovation leaders.
        </p>

        {/* Social proof */}
        <div className="flex justify-center gap-10 mb-10">
          {SOCIAL_PROOF.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-black text-[var(--ink)]">
                {s.stat}
              </div>
              <div className="font-ui text-[11px] text-[var(--grey-600)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing tiers */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-sm p-7 flex flex-col ${
                tier.highlight
                  ? "bg-[var(--ink)] text-[var(--cream)] ring-2 ring-[var(--red)] relative"
                  : "bg-white border border-[var(--grey-300)]"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-7 bg-[var(--red)] text-white font-ui text-[10px] font-bold tracking-[0.08em] uppercase px-3 py-1 rounded-sm">
                  Most Popular
                </div>
              )}
              <div className="mb-5">
                <h3
                  className={`font-display text-lg font-bold mb-1 ${
                    tier.highlight ? "text-[var(--cream)]" : "text-[var(--ink)]"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1.5">
                  <span
                    className={`font-display text-3xl font-black ${
                      tier.highlight ? "text-[var(--cream)]" : "text-[var(--ink)]"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`font-ui text-[12px] ${
                      tier.highlight ? "text-[var(--cream)]/50" : "text-[var(--grey-600)]"
                    }`}
                  >
                    {tier.priceNote}
                  </span>
                </div>
                <p
                  className={`font-body text-sm leading-relaxed mt-2.5 ${
                    tier.highlight ? "text-[var(--cream)]/60" : "text-[var(--grey-700)]"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span
                      className={`font-ui text-[13px] mt-0.5 ${
                        tier.highlight
                          ? i === 0
                            ? "text-[var(--cream)]/40"
                            : "text-[var(--red)]"
                          : i === 0 && tier.name !== "Community"
                          ? "text-[var(--grey-500)]"
                          : "text-[var(--red)]"
                      }`}
                    >
                      {i === 0 && tier.name !== "Community" ? "" : "✓"}
                    </span>
                    <span
                      className={`font-ui text-[13px] leading-snug ${
                        tier.highlight
                          ? i === 0
                            ? "text-[var(--cream)]/40 italic"
                            : "text-[var(--cream)]/80"
                          : i === 0 && tier.name !== "Community"
                          ? "text-[var(--grey-500)] italic"
                          : "text-[var(--grey-800)]"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                className={`block text-center no-underline py-3 rounded-sm font-ui text-[13px] font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-[var(--red)] hover:bg-[var(--red-dark)] text-white"
                    : tier.name === "Community"
                    ? "bg-[var(--ink)] hover:bg-[var(--grey-900)] text-[var(--cream)]"
                    : "border border-[var(--grey-400)] hover:border-[var(--grey-600)] text-[var(--ink)]"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* What you get section */}
      <div className="border-t border-[var(--grey-300)]">
        <div className="max-w-[720px] mx-auto px-4 sm:px-8 py-14">
          <h2 className="font-display text-2xl font-bold text-[var(--ink)] mb-8 text-center tracking-tight">
            What a Featured Interview gets you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "A real article, not a template",
                desc: "Your answers are transformed into a professionally written feature that reads like a quality magazine interview. Not a blog post, not a press release.",
              },
              {
                title: "LinkedIn-ready content",
                desc: "We provide a social media pack: a LinkedIn post, a pull quote graphic, and suggested copy. Most of our featured interviews get 50+ likes on LinkedIn.",
              },
              {
                title: "SEO that actually works",
                desc: "Your feature is optimised with relevant keywords, meta descriptions, and structured data. A permanent, high-quality backlink to your website.",
              },
              {
                title: "Newsletter distribution",
                desc: "Your interview goes out to our full subscriber list of founders, investors, and innovation leaders. Real people, not purchased lists.",
              },
              {
                title: "Credibility you can use",
                desc: "\"As featured in Global Innovation Magazine\" — use our badge on your website, in pitch decks, and in your email signature.",
              },
              {
                title: "Done in days, not weeks",
                desc: "Submit your answers, and your feature is live within 7 days. No back-and-forth, no editorial delays. We handle everything.",
              },
            ].map((item) => (
              <div key={item.title} className="pb-5">
                <h3 className="font-display text-[15px] font-bold text-[var(--ink)] mb-1.5">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] leading-relaxed text-[var(--grey-700)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="border-t border-[var(--grey-300)] bg-[var(--grey-100)]">
        <div className="max-w-[600px] mx-auto px-4 sm:px-8 py-14">
          <h2 className="font-display text-xl font-bold text-[var(--ink)] mb-8 text-center">
            Common questions
          </h2>
          {[
            {
              q: "Can I see an example before I commit?",
              a: "Every interview on our homepage is a real example of the format. Browse them — that's exactly what yours will look like.",
            },
            {
              q: "How long does it take?",
              a: "Most people complete the 10 questions in 15-20 minutes. Your feature is published within 7 days of submission for Featured tier.",
            },
            {
              q: "Can I review it before it goes live?",
              a: "Featured and Partner tier interviews include a review step. You'll see the final piece before publication.",
            },
            {
              q: "What if I want to update my interview later?",
              a: "Featured and Partner interviews can be updated once within 30 days of publication.",
            },
            {
              q: "Do you accept everyone?",
              a: "We're looking for people building things that matter — founders, innovators, leaders. We don't accept purely promotional submissions.",
            },
            {
              q: "Is this just AI-generated content?",
              a: "AI helps us transform your answers into polished prose efficiently, but every Featured interview gets a human editorial review. The insights and voice are entirely yours.",
            },
          ].map((faq) => (
            <div key={faq.q} className="mb-5 pb-5 border-b border-[var(--grey-300)] last:border-none">
              <h3 className="font-display text-[15px] font-bold text-[var(--ink)] mb-1">
                {faq.q}
              </h3>
              <p className="font-body text-[14px] leading-relaxed text-[var(--grey-700)]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="border-t border-[var(--grey-300)]">
        <div className="max-w-[500px] mx-auto px-4 sm:px-8 py-12 text-center">
          <h3 className="font-display text-lg font-bold text-[var(--ink)] mb-2">
            Not ready yet? Stay in the loop.
          </h3>
          <p className="font-body text-sm text-[var(--grey-600)] italic mb-5">
            Get every interview in your inbox. Free, fortnightly.
          </p>
          <SubscribeForm source="get-featured-page" variant="inline" />
        </div>
      </div>
    </>
  );
}
