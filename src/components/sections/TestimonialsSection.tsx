import { SECTION_IDS } from "@/constants/navigation";
import { PROFILE } from "@/constants/profile";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Quote, ArrowUpRight } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section
      id={SECTION_IDS.testimonials}
      className="scroll-mt-24"
      aria-label="Recommendations"
    >
      <div className="rounded-card border border-[var(--border-subtle)] bg-[var(--surface-card)] p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow index="08">Recommendations</Eyebrow>
          </div>

          <Quote
            size={32}
            className="mx-auto mt-6 text-[var(--border-strong)]"
            aria-hidden
          />

          <h2 className="mt-4 font-display text-h1 font-semibold text-[var(--text-primary)] text-balance">
            Vouched for by the teams I&apos;ve built with
          </h2>

          <p className="mx-auto mt-4 max-w-reading text-[var(--text-secondary)] text-pretty">
            Managers and engineers I&apos;ve worked alongside have left
            recommendations on my LinkedIn — verified, attributed, and in their
            own words. Read what it&apos;s like to ship with me.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href={PROFILE.links.recommendations} variant="primary">
              Read recommendations on LinkedIn
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
