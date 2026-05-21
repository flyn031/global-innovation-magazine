import Link from "next/link";
import { SAMPLE_INTERVIEWS } from "@/lib/interviews";
import SubscribeForm from "@/components/SubscribeForm";

export default function HomePage() {
  const hero = SAMPLE_INTERVIEWS[0];
  const rest = SAMPLE_INTERVIEWS.slice(1);

  return (
    <>
      {/* Masthead */}
      <div className="border-b border-[var(--grey-300)]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
          <span className="font-ui text-[11px] text-[var(--grey-500)] tracking-wide">
            Est. 2013 · Leicester, UK
          </span>
          <span className="font-ui text-[11px] text-[var(--grey-500)]">
            Innovation · Leadership · Technology
          </span>
        </div>
      </div>

      {/* Hero */}
      <Link href={`/interview/${hero.id}`} className="block no-underline">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-10 border-b border-[var(--grey-300)] grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-center">
          {hero.photo && (
            <div className="w-full aspect-[4/5] rounded overflow-hidden bg-[var(--grey-300)]">
              <img
                src={hero.photo}
                alt={hero.name}
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(20%)" }}
              />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-ui text-[10px] font-semibold tracking-[0.1em] uppercase text-[var(--red)]">
                {hero.category}
              </span>
              <span className="font-ui text-[11px] text-[var(--grey-400)]">·</span>
              <span className="font-display text-[12px] italic text-[var(--grey-600)]">
                10 Things I Know
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-[40px] font-black text-[var(--ink)] leading-[1.15] tracking-tight mb-2.5">
              {hero.name}, {hero.descriptor}
            </h1>
            <p className="font-body text-base md:text-lg leading-relaxed text-[var(--grey-700)] italic mb-3.5 max-w-[520px]">
              {hero.subheadline}
            </p>
            <div className="font-ui text-[12px] text-[var(--grey-500)]">
              {hero.date} · {hero.readTime}
            </div>
            {hero.pull_quote && (
              <div className="mt-4 pt-4 border-t border-[var(--grey-300)]">
                <p className="font-display text-base italic text-[var(--grey-800)] leading-snug">
                  &ldquo;{hero.pull_quote}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Newsletter inline banner */}
      <div className="border-b border-[var(--grey-300)] bg-[var(--grey-100)]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <div className="flex-shrink-0">
            <span className="font-display text-[14px] font-bold text-[var(--ink)]">
              Get every interview in your inbox.
            </span>
            <span className="font-body text-[13px] text-[var(--grey-600)] italic ml-2">
              Free, fortnightly.
            </span>
          </div>
          <div className="flex-1 w-full sm:max-w-[360px]">
            <SubscribeForm source="homepage-inline" variant="minimal" />
          </div>
        </div>
      </div>

      {/* Section header */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 pt-7">
        <h2 className="font-display text-base font-bold text-[var(--ink)] mb-6 pb-2 border-b-2 border-[var(--ink)] inline-block">
          Recent Interviews
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7">
        {rest.map((interview) => (
          <Link
            key={interview.id}
            href={`/interview/${interview.id}`}
            className="block no-underline pb-5 border-b border-[var(--grey-300)] hover:opacity-80 transition-opacity"
          >
            {interview.photo && (
              <div className="w-full aspect-[16/10] rounded-sm overflow-hidden mb-3.5 bg-[var(--grey-300)]">
                <img
                  src={interview.photo}
                  alt={interview.name}
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(20%)" }}
                />
              </div>
            )}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-ui text-[10px] font-semibold tracking-[0.1em] uppercase text-[var(--red)]">
                {interview.category}
              </span>
              <span className="font-ui text-[10px] text-[var(--grey-400)]">·</span>
              <span className="font-display text-[10px] italic text-[var(--grey-500)]">
                10 Things I Know
              </span>
            </div>
            <h3 className="font-display text-[19px] font-extrabold text-[var(--ink)] leading-tight mb-1.5">
              {interview.name}, {interview.role.toLowerCase()}
            </h3>
            <p className="font-body text-sm leading-snug text-[var(--grey-600)] italic mb-2">
              {interview.subheadline}
            </p>
            <span className="font-ui text-[11px] text-[var(--grey-500)]">
              {interview.date} · {interview.readTime}
            </span>
          </Link>
        ))}
      </div>

      {/* Get Featured CTA */}
      <div className="border-t border-[var(--grey-300)]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="font-display text-[12px] italic text-[var(--red)]">
              Get Featured
            </span>
            <h3 className="font-display text-2xl font-extrabold text-[var(--ink)] tracking-tight mt-1 mb-2">
              Your story, professionally told.
            </h3>
            <p className="font-body text-[15px] text-[var(--grey-700)] leading-relaxed">
              A &ldquo;10 Things I Know&rdquo; feature gives you a professionally
              written interview, social media assets, newsletter distribution,
              and a permanent backlink. From £199.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/get-featured"
              className="bg-[var(--red)] hover:bg-[var(--red-dark)] text-white no-underline text-center px-6 py-3 rounded-sm font-ui text-[13px] font-semibold"
            >
              See Pricing →
            </Link>
            <Link
              href="/contribute"
              className="border border-[var(--grey-400)] hover:border-[var(--grey-600)] text-[var(--ink)] no-underline text-center px-6 py-3 rounded-sm font-ui text-[13px] font-medium"
            >
              Submit Free
            </Link>
          </div>
        </div>
      </div>

      {/* Subscribe banner */}
      <SubscribeForm source="homepage-footer" variant="banner" />

      {/* Partner strip — empty state for now */}
      <div className="border-t border-[var(--grey-300)] bg-[var(--grey-100)]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <span className="font-ui text-[11px] text-[var(--grey-500)]">
            Innovation Partners
          </span>
          <Link
            href="/partners"
            className="font-ui text-[11px] text-[var(--red)] no-underline hover:underline"
          >
            Become a partner →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-[1100px] mx-auto px-4 sm:px-8 py-6 flex justify-between flex-wrap gap-2">
        <span className="font-ui text-[11px] text-[var(--grey-500)]">
          © 2026 Global Innovation Magazine
        </span>
        <div className="flex gap-4">
          <Link href="/newsletter" className="font-ui text-[11px] text-[var(--grey-500)] no-underline hover:text-[var(--ink)]">
            Newsletter
          </Link>
          <Link href="/partners" className="font-ui text-[11px] text-[var(--grey-500)] no-underline hover:text-[var(--ink)]">
            Partners
          </Link>
          <span className="font-ui text-[11px] text-[var(--grey-500)]">
            Leicester, UK · Since 2013
          </span>
        </div>
      </footer>
    </>
  );
}
