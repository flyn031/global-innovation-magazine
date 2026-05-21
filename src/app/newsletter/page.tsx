import type { Metadata } from "next";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "Newsletter — Global Innovation Magazine",
  description: "Get every interview in your inbox. Free, fortnightly, no spam.",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-[520px] mx-auto px-4 sm:px-8 pt-12 pb-20">
      <span className="font-display text-[12px] italic text-[var(--red)]">
        Newsletter
      </span>
      <h1 className="font-display text-[34px] font-black text-[var(--ink)] mt-1.5 mb-2 tracking-tight leading-[1.15]">
        Every interview, in your inbox.
      </h1>
      <p className="font-body text-base text-[var(--grey-700)] leading-[1.65] mb-3">
        A fortnightly email with our latest &ldquo;10 Things I Know&rdquo;
        interviews, plus the occasional insight on innovation, leadership, and
        technology. Read by founders, investors, and people building things that
        matter.
      </p>
      <p className="font-body text-sm text-[var(--grey-600)] italic mb-6">
        Free. Fortnightly. Unsubscribe any time.
      </p>
      <SubscribeForm source="newsletter-page" variant="inline" />

      <div className="border-t border-[var(--grey-300)] mt-10 pt-8">
        <h2 className="font-display text-lg font-bold text-[var(--ink)] mb-4">
          What you&apos;ll get
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "The latest interviews",
              desc: "Every new \"10 Things I Know\" feature, delivered as soon as it's published.",
            },
            {
              title: "Founder insights",
              desc: "The recurring themes and patterns we're seeing across all our interviews — what's working, what's changing.",
            },
            {
              title: "No noise",
              desc: "We won't sell your email, stuff your inbox, or pad it with filler. If we don't have something worth reading, we don't send.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-[14px] font-bold text-[var(--ink)] mb-0.5">
                {item.title}
              </h3>
              <p className="font-body text-[14px] text-[var(--grey-700)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsor note */}
      <div className="border-t border-[var(--grey-300)] mt-8 pt-6">
        <p className="font-ui text-[12px] text-[var(--grey-500)] leading-relaxed">
          <span className="font-semibold">Sponsor our newsletter?</span> We
          accept one sponsor per issue. If you build tools, platforms, or
          services for founders and innovators,{" "}
          <a
            href="mailto:newsletter@globalinnovationmagazine.com?subject=Newsletter%20Sponsorship"
            className="text-[var(--red)] underline"
          >
            get in touch
          </a>
          .
        </p>
      </div>
    </div>
  );
}
