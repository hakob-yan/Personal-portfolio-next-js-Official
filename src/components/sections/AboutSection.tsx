import { SECTION_IDS } from "@/constants/navigation";
import { ABOUT } from "@/constants/profile";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AboutSection() {
  return (
    <section
      id={SECTION_IDS.about}
      className="scroll-mt-24"
      aria-label="About me"
    >
      <Eyebrow index="02">About</Eyebrow>

      <div className="mt-6 grid gap-10 lg:grid-cols-12">
        {/* Reading column */}
        <div className="lg:col-span-8">
          <p className="text-h3 font-medium text-[var(--text-primary)] text-pretty">
            {ABOUT.lead}
          </p>
          <div className="mt-6 max-w-reading space-y-4 text-[var(--text-secondary)] leading-[1.65] text-pretty">
            {ABOUT.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Fact rail */}
        <aside className="lg:col-span-4">
          <dl className="space-y-4 border-l border-[var(--border-subtle)] pl-6">
            {ABOUT.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-mono-label uppercase text-[var(--text-muted)]">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[var(--text-primary)]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
