import { SECTION_IDS } from "@/constants/navigation";
import { SKILL_GROUPS } from "@/constants/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Server, Network, Cloud, Monitor, FlaskConical } from "lucide-react";

const ICONS = {
  backend: Server,
  architecture: Network,
  cloud: Cloud,
  frontend: Monitor,
  testing: FlaskConical,
} as const;

// Backend-first ordering to match positioning.
const ORDER = ["backend", "architecture", "cloud", "frontend", "testing"];
const ORDERED = [...SKILL_GROUPS].sort(
  (a, b) => ORDER.indexOf(a.key) - ORDER.indexOf(b.key),
);

export function SkillsSection() {
  return (
    <section
      id={SECTION_IDS.skills}
      className="scroll-mt-24"
      aria-label="Technical skills"
    >
      <SectionHeading
        index="04"
        eyebrow="Technical Skills"
        title="The stack, stated plainly"
        description="No self-rated bars — just the tools and patterns I reach for, grouped by where they live in the system."
      />

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {ORDERED.map((group) => {
          const Icon = ICONS[group.key as keyof typeof ICONS];
          return (
            <div key={group.key}>
              <div className="flex items-center gap-2.5 border-b border-[var(--border-subtle)] pb-3">
                {Icon && (
                  <Icon size={16} className="text-[var(--color-primary-hover)]" />
                )}
                <h3 className="font-mono text-mono-label uppercase text-[var(--text-secondary)]">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Tag tone="muted">{skill}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
