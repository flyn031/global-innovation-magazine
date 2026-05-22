import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Privacy — Global Innovation Magazine",
  description: "Terms of use and privacy policy for Global Innovation Magazine.",
};

export default function TermsPage() {
  return (
    <div className="max-w-[600px] mx-auto px-4 sm:px-8 pt-12 pb-20">
      <span className="font-display text-[12px] italic text-[var(--red)]">
        Legal
      </span>
      <h1 className="font-display text-[34px] font-black text-[var(--ink)] mt-1.5 mb-8 tracking-tight leading-[1.15]">
        Terms & Privacy
      </h1>

      <div className="font-body text-[15px] leading-[1.82] text-[var(--grey-800)] space-y-6">
        <section>
          <h2 className="font-display text-lg font-bold text-[var(--ink)] mb-2">
            About this publication
          </h2>
          <p>
            Global Innovation Magazine is published by James O&apos;Flynn. The magazine
            was originally founded in 2013 in Leicester, UK, and has been relaunched
            as a digital publication.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--ink)] mb-2">
            Editorial content
          </h2>
          <p>
            All interviews published on this site were conducted by Global Innovation
            Magazine. Our &ldquo;10 Things I Know&rdquo; format presents interview
            responses as standalone insights, editorially refined for clarity and
            readability. The substance and views expressed belong to the interviewee.
          </p>
          <p>
            New submissions may be editorially processed with the assistance of AI
            tools to transform raw interview responses into polished prose. All
            content is reviewed before publication. The insights, opinions and voice
            remain entirely those of the interviewee.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--ink)] mb-2">
            Archive content
          </h2>
          <p>
            Interviews marked &ldquo;From the Archive&rdquo; were originally published
            in earlier editions of Global Innovation Magazine. They are presented
            here in our current editorial format. Roles, titles, company affiliations,
            and views expressed were accurate at the time of the original interview
            and may have since changed. Archive dates are clearly displayed on each
            piece.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--ink)] mb-2">
            Submissions
          </h2>
          <p>
            By submitting responses through our &ldquo;Contribute&rdquo; form, you
            grant Global Innovation Magazine the right to publish, edit, and distribute
            your interview in our editorial format across our website, newsletter, and
            social media channels. You retain ownership of your original responses.
            You may request removal of your published interview at any time by
            contacting us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--ink)] mb-2">
            Featured interviews & payments
          </h2>
          <p>
            Our Featured and Innovation Partner tiers involve a fee for guaranteed
            publication, additional distribution, and supplementary materials. Payment
            does not influence editorial content &mdash; we reserve the right to
            decline submissions that do not meet our editorial standards, regardless
            of payment. Refunds are available if we decline to publish your submission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--ink)] mb-2">
            Privacy & data
          </h2>
          <p>
            We collect email addresses through our newsletter signup form for the sole
            purpose of sending you our newsletter. We do not sell, rent, or share your
            email address with third parties. You can unsubscribe at any time.
          </p>
          <p>
            Submission form data (name, email, company, interview responses) is stored
            securely and used only for the purpose of producing and publishing your
            interview. We will not use your data for any other purpose without your
            explicit consent.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--ink)] mb-2">
            Copyright
          </h2>
          <p>
            All editorial content, design, and formatting on this site is
            &copy; {new Date().getFullYear()} Global Innovation Magazine. Interview
            responses remain the intellectual property of the interviewee. The
            editorial presentation and format (&ldquo;10 Things I Know&rdquo;) is
            &copy; Global Innovation Magazine.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--ink)] mb-2">
            Contact
          </h2>
          <p>
            For any questions about these terms, to request removal of content, or
            for any other enquiries, please contact us at{" "}
            <a
              href="mailto:james@globalinnovationmagazine.com"
              className="text-[var(--red)] underline"
            >
              james@globalinnovationmagazine.com
            </a>
          </p>
        </section>

        <p className="text-[var(--grey-500)] text-sm italic pt-4 border-t border-[var(--grey-300)]">
          Last updated: May 2026
        </p>
      </div>
    </div>
  );
}
