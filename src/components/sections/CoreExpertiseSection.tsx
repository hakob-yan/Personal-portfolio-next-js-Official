import { SECTION_IDS } from "@/constants/navigation";
import { CORE_EXPERTISE, type ExpertiseArea } from "@/constants/expertise";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Network, Cloud, MonitorSmartphone } from "lucide-react";

const ICONS: Record<ExpertiseArea["key"], React.ElementType> = {
  systems: Network,
  cloud: Cloud,
  fullstack: MonitorSmartphone,
};

export function CoreExpertiseSection() {
  return (
    <section
      id={SECTION_IDS.expertise}
      className="scroll-mt-24"
      aria-label="Core expertise"
    >
      <SectionHeading
        index="03"
        eyebrow="Core Expertise"
        title="What I own end-to-end"
        description="Backend-first by design — roughly 70% systems, 30% frontend — but I own the full stack when the product needs it. These are the areas I take responsibility for end-to-end."
      />

      {/* Focus split — positioning, not self-rated proficiency */}
      <div className="mb-12 max-w-md">
        <div className="mb-2 flex items-center justify-between font-mono text-xs">
          <span className="text-[var(--color-primary-hover)]">Backend · 70%</span>
          <span className="text-[var(--text-muted)]">Frontend · 30%</span>
        </div>
        <div
          className="flex h-1.5 overflow-hidden rounded-full bg-[var(--surface-raised)]"
          role="img"
          aria-label="Focus split: 70 percent backend, 30 percent frontend"
        >
          <div className="bg-accent-500" style={{ width: "70%" }} />
          <div className="bg-accent-500/40" style={{ width: "30%" }} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {CORE_EXPERTISE.map((area) => {
          const Icon = ICONS[area.key];
          return (
            <Card key={area.key} interactive className="p-6">
              <div className="grid h-11 w-11 place-items-center rounded-btn border border-[var(--border-subtle)] bg-[var(--surface-raised)]">
                <Icon size={20} className="text-[var(--color-primary-hover)]" />
              </div>
              <h3 className="mt-5 font-display text-h3 font-semibold text-[var(--text-primary)]">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.6] text-[var(--text-secondary)]">
                {area.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
