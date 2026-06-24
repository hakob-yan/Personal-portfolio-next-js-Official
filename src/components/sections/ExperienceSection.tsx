import { SECTION_IDS } from "@/constants/navigation";
import { EXPERIENCE } from "@/constants/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section
      id={SECTION_IDS.experience}
      className="scroll-mt-24"
      aria-label="Work experience"
    >
      <SectionHeading
        index="07"
        eyebrow="Work Experience"
        title="Where I've owned systems"
        description="Roles where I led delivery end-to-end, set engineering standards, and shipped under real constraints."
      />

      <ol className="relative space-y-10 border-l border-[var(--border-subtle)] pl-8">
        {EXPERIENCE.map((item) => (
          <li key={`${item.company}-${item.role}-${item.period}`} className="relative">
            {/* Spine node */}
            <span className="absolute -left-[2.15rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--color-primary)] bg-[var(--surface-base)]" />

            <p className="font-mono text-xs text-[var(--text-muted)]">
              {item.period}
            </p>
            <h3 className="mt-1.5 font-display text-h3 font-semibold text-[var(--text-primary)]">
              {item.role}
              <span className="text-[var(--color-primary-hover)]"> · {item.company}</span>
            </h3>
            <p className="mt-2 max-w-reading text-sm text-[var(--text-secondary)]">
              {item.summary}
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-[1.55] text-[var(--text-secondary)]">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
