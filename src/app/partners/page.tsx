import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation Partners — Global Innovation Magazine",
  description: "Our Innovation Partners support the magazine and get visibility in front of founders and innovation leaders.",
};

export default function PartnersPage() {
  return (
    <div className="max-w-[700px] mx-auto px-4 sm:px-8 pt-12 pb-20">
      <span className="font-display text-[12px] italic text-[var(--red)]">
        Partners
      </span>
      <h1 className="font-display text-[34px] font-black text-[var(--ink)] mt-1.5 mb-2 tracking-tight leading-[1.15]">
        Innovation Partners
      </h1>
      <p className="font-body text-base text-[var(--grey-700)] leading-[1.65] mb-8">
        Our Innovation Partners help us keep publishing great interviews and get
        their brand in front of the founders, innovators, and leaders who read
        us. If your company builds tools, services, or platforms for
        innovation-driven teams, we should talk.
      </p>

      {/* Empty state / CTA */}
      <div className="bg-[var(--grey-100)] border border-[var(--grey-300)] rounded-sm p-8 text-center mb-10">
        <h2 className="font-display text-xl font-bold text-[var(--ink)] mb-2">
          Founding Partners wanted
        </h2>
        <p className="font-body text-sm text-[var(--grey-700)] italic leading-relaxed mb-5 max-w-[400px] mx-auto">
          We&apos;re looking for our first Innovation Partners as we relaunch.
          Founding partners get locked-in pricing and prominent placement as our
          audience grows.
        </p>
        <a
          href="mailto:partners@globalinnovationmagazine.com?subject=Founding%20Partner%20Enquiry"
          className="inline-block bg-[var(--ink)] hover:bg-[var(--grey-900)] text-[var(--cream)] no-underline px-6 py-2.5 rounded-sm font-ui text-[13px] font-semibold"
        >
          Enquire About Partnership
        </a>
      </div>

      {/* What partners get */}
      <h2 className="font-display text-lg font-bold text-[var(--ink)] mb-4">
        What partners get
      </h2>
      <div className="space-y-4 mb-8">
        {[
          { title: "Homepage logo placement", desc: "Your brand visible on every page load, in the partner strip at the bottom of the homepage." },
          { title: "Newsletter sponsorship", desc: "A dedicated sponsor slot in our fortnightly newsletter, read by founders and innovation leaders." },
          { title: "One featured interview per quarter", desc: "A guaranteed \"10 Things I Know\" feature for someone from your company — CEO, CTO, head of product." },
          { title: "Dedicated backlink", desc: "A permanent dofollow link from our Partners page to your website. Great for SEO." },
          { title: "Priority visibility", desc: "Your interview placed at the top of the grid and in prominent positions across the site." },
        ].map((item) => (
          <div key={item.title} className="pb-3 border-b border-[var(--grey-200)]">
            <h3 className="font-display text-[14px] font-bold text-[var(--ink)] mb-0.5">
              {item.title}
            </h3>
            <p className="font-body text-[14px] text-[var(--grey-700)] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[var(--ink)] rounded-sm p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="font-display text-lg font-bold text-[var(--cream)]">
              £499/quarter
            </div>
            <div className="font-ui text-[12px] text-[var(--cream)]/50">
              Founding partners: £399/quarter (locked in)
            </div>
          </div>
          <a
            href="mailto:partners@globalinnovationmagazine.com?subject=Founding%20Partner%20Enquiry"
            className="bg-[var(--red)] hover:bg-[var(--red-dark)] text-white no-underline px-5 py-2.5 rounded-sm font-ui text-[13px] font-semibold"
          >
            Become a Partner →
          </a>
        </div>
      </div>
    </div>
  );
}
