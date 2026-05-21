import { notFound } from "next/navigation";
import Link from "next/link";
import { getInterview, SAMPLE_INTERVIEWS } from "@/lib/interviews";
import SubscribeForm from "@/components/SubscribeForm";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return SAMPLE_INTERVIEWS.map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const interview = getInterview(id);
  if (!interview) return {};
  return {
    title: `${interview.name}, ${interview.descriptor} — Global Innovation Magazine`,
    description: interview.seo_description || interview.subheadline,
  };
}

export default async function InterviewPage({ params }: Props) {
  const { id } = await params;
  const interview = getInterview(id);
  if (!interview) notFound();

  return (
    <>
      {/* Header */}
      <div className="max-w-[780px] mx-auto px-4 sm:px-8 pt-10">
        <div
          className={`grid gap-7 items-start ${
            interview.photo ? "grid-cols-1 md:grid-cols-[200px_1fr]" : "grid-cols-1"
          }`}
        >
          {interview.photo && (
            <div className="w-full aspect-[4/5] rounded-sm overflow-hidden bg-[var(--grey-300)]">
              <img
                src={interview.photo}
                alt={interview.name}
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(15%)" }}
              />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="font-ui text-[10px] font-semibold tracking-[0.1em] uppercase text-[var(--red)]">
                {interview.category}
              </span>
              <span className="font-ui text-[11px] text-[var(--grey-400)]">·</span>
              <span className="font-ui text-[11px] text-[var(--grey-600)]">
                {interview.date}
              </span>
            </div>
            <p className="font-display text-[13px] italic text-[var(--red)] mb-2">
              10 Things I Know
            </p>
            <h1 className="font-display text-3xl md:text-[38px] font-black text-[var(--ink)] leading-[1.15] tracking-tight mb-1.5">
              {interview.name}, {interview.descriptor}
            </h1>
            <p className="font-body text-[17px] leading-relaxed text-[var(--grey-700)] italic">
              {interview.subheadline}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[780px] mx-auto px-4 sm:px-8">
        <hr className="border-[var(--grey-300)] my-7" />
      </div>

      {/* Intro */}
      <div className="max-w-[640px] mx-auto px-4 sm:px-8">
        <p className="font-body text-[17px] leading-[1.8] text-[var(--grey-800)]">
          {interview.intro}
        </p>
        <hr className="border-[var(--grey-300)] my-7" />
      </div>

      {/* Insights */}
      <div className="max-w-[640px] mx-auto px-4 sm:px-8">
        {interview.insights.map((insight, i) => (
          <div key={i}>
            <p className="font-body text-[17px] leading-[1.82] text-[var(--grey-900)]">
              {insight}
            </p>
            {i < interview.insights.length - 1 && (
              <div className="insight-divider" />
            )}
          </div>
        ))}
      </div>

      {/* Pull quote */}
      {interview.pull_quote && (
        <div className="max-w-[640px] mx-auto px-4 sm:px-8 pt-9">
          <div className="pull-quote">
            <p className="font-display text-2xl md:text-[28px] font-bold italic text-[var(--ink)] leading-snug">
              &ldquo;{interview.pull_quote}&rdquo;
            </p>
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="max-w-[640px] mx-auto px-4 sm:px-8 pt-7">
        <div className="flex gap-1.5 flex-wrap mb-7">
          {interview.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-sm bg-[var(--grey-200)] font-ui text-[11px] font-medium text-[var(--grey-600)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Subscribe + Get Featured */}
      <div className="max-w-[640px] mx-auto px-4 sm:px-8 pt-4 pb-6">
        <div className="bg-[var(--grey-100)] border border-[var(--grey-300)] rounded-sm p-6 mb-6">
          <h3 className="font-display text-[15px] font-bold text-[var(--ink)] mb-1">
            Enjoyed this interview?
          </h3>
          <p className="font-body text-[13px] text-[var(--grey-600)] italic mb-3">
            Get every &ldquo;10 Things I Know&rdquo; interview in your inbox. Free, fortnightly.
          </p>
          <SubscribeForm source={`interview-${interview.id}`} variant="minimal" />
        </div>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block border border-[var(--grey-400)] text-[var(--grey-700)] no-underline px-4 py-2 rounded-sm font-ui text-[13px] font-medium hover:border-[var(--grey-600)]"
          >
            ← Back to all interviews
          </Link>
          <Link
            href="/get-featured"
            className="inline-block font-ui text-[13px] text-[var(--red)] no-underline hover:underline"
          >
            Want to be featured? →
          </Link>
        </div>
      </div>
    </>
  );
}
