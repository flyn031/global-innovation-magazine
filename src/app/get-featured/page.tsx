// app/get-featured/page.tsx
// Global Innovation Magazine — "Get Featured" pricing page (cream editorial style)
//
// SETUP (one-time):
// 1. Replace the two Stripe URLs below with your real Payment Links from
//    the Stripe dashboard (they look like https://buy.stripe.com/xxxx).
// 2. In each Payment Link's settings in Stripe, set "After payment" to
//    redirect to https://www.globalinnovationmagazine.com (your homepage)
//    and enable "Collect customer name and email".
//
// No API keys or server code needed for this version.

const STRIPE_FEATURED_URL = "https://buy.stripe.com/REPLACE_WITH_FEATURED_LINK";
const STRIPE_PARTNER_URL = "https://buy.stripe.com/REPLACE_WITH_PARTNER_LINK";

// Only list names you can point to a genuine published feature for.
const ARCHIVE_NAMES = [
  "DP World",
  "Thomson Reuters",
  "The Ocean Cleanup",
  "Brompton Bicycle",
  "Airbnb",
  "Formula E",
  "Mahindra Racing",
  "Yes Bank India",
];

const tiers = [
  {
    name: "Community",
    price: "Free",
    cadence: "",
    blurb: "Submit your answers. Published editorially if selected.",
    features: [
      "Answer the 10 questions",
      "Considered for editorial publication",
      "Part of the Global Innovation community",
    ],
    cta: "Submit your story",
    href: "/contribute",
    featured: false,
  },
  {
    name: "Featured",
    price: "£199",
    cadence: "one-off",
    blurb:
      "Your profile, permanently, alongside the names that built this magazine.",
    features: [
      "Guaranteed publication within 7 days",
      "Shareable social assets, designed for you",
      "Inclusion in the newsletter",
      "Featured badge + permanent backlink",
      "A feature you keep and share forever",
    ],
    cta: "Get Featured",
    href: STRIPE_FEATURED_URL,
    featured: true,
  },
  {
    name: "Innovation Partner",
    price: "£499",
    cadence: "per quarter",
    blurb: "For companies that want a standing presence in the magazine.",
    features: [
      "Everything in Featured",
      "Your logo on the homepage",
      "Newsletter sponsor slot",
      "A fresh interview every quarter",
      "Priority editorial support",
    ],
    cta: "Become a Partner",
    href: STRIPE_PARTNER_URL,
    featured: false,
  },
];

export default function GetFeaturedPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#2b2926]">
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-10 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#9a7a2e]">
          Established 2013
        </p>
        <h1 className="mx-auto max-w-3xl font-serif text-4xl leading-tight text-[#1c1a17] sm:text-5xl">
          Be featured alongside the world&rsquo;s innovators.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4a4742]">
          Global Innovation Magazine profiles the people building the future.
          Add your story to the same pages &mdash; published, shareable, and
          yours to keep.
        </p>

        <div className="mt-9">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#8a857c]">
            Past features include
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#3a3833]">
            {ARCHIVE_NAMES.map((name, i) => (
              <span key={name} className="whitespace-nowrap">
                {name}
                {i < ARCHIVE_NAMES.length - 1 && (
                  <span className="ml-4 text-[#c9c2b4]">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-16 md:grid-cols-3">
        {tiers.map((tier) => {
          const isExternal = tier.href.startsWith("http");
          return (
            <div
              key={tier.name}
              className={[
                "relative flex flex-col rounded-2xl p-8",
                tier.featured
                  ? "border-2 border-[#c5a059] bg-[#fffdf8] shadow-sm"
                  : "border border-[#e0dace] bg-white",
              ].join(" ")}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#c5a059] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#1c1a17]">
                  Most chosen
                </span>
              )}

              <h2 className="font-serif text-2xl text-[#1c1a17]">
                {tier.name}
              </h2>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-[#1c1a17]">
                  {tier.price}
                </span>
                {tier.cadence && (
                  <span className="text-sm text-[#8a857c]">{tier.cadence}</span>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#4a4742]">
                {tier.blurb}
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-[#34322e]">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-0.5 text-[#9a7a2e]">&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={[
                  "mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
                  tier.featured
                    ? "bg-[#1c1a17] text-[#f4f1ea] hover:bg-[#33302b]"
                    : "border border-[#c9c2b4] text-[#2b2926] hover:border-[#9a7a2e] hover:text-[#9a7a2e]",
                ].join(" ")}
              >
                {tier.cta}
              </a>
            </div>
          );
        })}
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24 text-center">
        <p className="text-xs text-[#8a857c]">
          Past editorial features. Inclusion does not imply endorsement of paid
          services.
        </p>
        <p className="mt-4 text-sm text-[#4a4742]">
          Questions, or a paid enquiry?{" "}
          <a
            href="mailto:james@globalinnovationmagazine.com"
            className="text-[#9a7a2e] underline-offset-4 hover:underline"
          >
            james@globalinnovationmagazine.com
          </a>
        </p>
      </section>
    </main>
  );
}