import Link from "next/link";
import Image from "next/image";
import { SAMPLE_INTERVIEWS } from "@/lib/interviews";

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
            <div className="w-full aspect-[4/5] rounded overflow-hidden bg-[var(--grey-300)] relative">
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

      {/* Section header */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 pt-7">
        <h2 className="font-display text-base font-bold text-[var(--ink)] mb-6 pb-2 border-b-2 border-[var(--ink)] inline-block">
          Recent Interviews
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7">
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

      {/* CTA */}
      <div className="bg-[var(--ink)] px-4 sm:px-8 py-11">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-5">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-[var(--cream)] tracking-tight mb-1">
              What do you know?
            </h3>
            <p className="font-body text-[15px] text-[var(--cream)]/45 italic">
              We&apos;re looking for founders and innovators with something worth
              sharing.
            </p>
          </div>
          <Link
            href="/contribute"
            className="bg-[var(--red)] hover:bg-[var(--red-dark)] text-white no-underline px-7 py-3 rounded-sm font-ui text-[13px] font-semibold tracking-wide"
          >
            Contribute Your Interview
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-[1100px] mx-auto px-4 sm:px-8 py-6 flex justify-between flex-wrap gap-2">
        <span className="font-ui text-[11px] text-[var(--grey-500)]">
          © 2026 Global Innovation Magazine
        </span>
        <span className="font-ui text-[11px] text-[var(--grey-500)]">
          Leicester, UK · Since 2013
        </span>
      </footer>
    </>
  );
}
