import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Global Innovation Magazine",
  description: "The story of Global Innovation Magazine, est. 2013 in Leicester, UK.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[600px] mx-auto px-4 sm:px-8 pt-12 pb-20">
      <span className="font-display text-[12px] italic text-[var(--red)]">
        About
      </span>
      <h1 className="font-display text-[34px] font-black text-[var(--ink)] mt-1.5 mb-6 tracking-tight leading-[1.15]">
        The story so far
      </h1>
      <div className="font-body text-base leading-[1.82] text-[var(--grey-800)] space-y-5">
        <p>
          Global Innovation Magazine started in 2013 as a free quarterly digital
          publication with a simple idea: share the excitement of innovation by
          talking to the people making it happen.
        </p>
        <p>
          Over the years we interviewed and worked with some remarkable
          companies and individuals — Airbnb, Thomson Reuters, DP World,
          Brompton Bicycle, Synechron, Specialized Bikes, The Ocean Cleanup,
          Team Sky, Virgin Formula E, Globant, and many others. The questions
          didn&apos;t change much, but the answers were always different. That
          was the whole point.
        </p>
        <p>
          Our &ldquo;10 Things I Know&rdquo; interviews are built around ten
          questions, each answer distilled into a standalone insight. No fluff,
          no filler — just the things worth knowing, from the people who know
          them.
        </p>
        <p>
          We cover innovation across every sector: startups, enterprise, public
          sector transformation, climate tech, AI, biotech, fintech, and
          everything in between. If someone is building something that matters,
          we want to hear from them.
        </p>
        <p>
          The goal hasn&apos;t changed since 2013: bring you interviews that
          impact upon your work, your business, and your life.
        </p>
      </div>

      <div className="border-t border-[var(--grey-300)] mt-8 pt-5 flex gap-7">
        {[
          { val: "2013", label: "Founded" },
          { val: "Leicester", label: "Home" },
          { val: "10", label: "Questions, always" },
        ].map((s) => (
          <div key={s.label}>
            <div className="font-display text-2xl font-black text-[var(--ink)]">
              {s.val}
            </div>
            <div className="font-ui text-[11px] text-[var(--grey-600)]">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/contribute"
        className="inline-block mt-8 bg-[var(--red)] hover:bg-[var(--red-dark)] text-white no-underline px-6 py-3 rounded-sm font-ui text-[13px] font-semibold"
      >
        Contribute an Interview →
      </Link>
    </div>
  );
}
