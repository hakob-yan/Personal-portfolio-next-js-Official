import { SECTION_IDS } from "@/constants/navigation";
import { PROJECTS } from "@/constants/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { ArrowUpRight } from "lucide-react";

// Flatten the categorized tech stack into a single de-duplicated chip list.
function flattenStack(
  stack: Record<string, readonly string[] | undefined>,
): string[] {
  const seen = new Set<string>();
  for (const values of Object.values(stack)) {
    if (!values) continue;
    for (const v of values) seen.add(v);
  }
  return Array.from(seen);
}

const ROW_LABELS = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Approach" },
  { key: "outcome", label: "Impact" },
] as const;

export function ProjectsSection() {
  return (
    <section
      id={SECTION_IDS.projects}
      className="scroll-mt-24"
      aria-label="Featured projects"
    >
      <SectionHeading
        index="05"
        eyebrow="Featured Projects"
        title="Systems shipped to production"
        description="Each led with the outcome, then the engineering behind it — problem, approach, and measurable impact. The way I'd walk you through it in an interview."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project) => {
          const stack = flattenStack(project.techStack);
          const primary = project.links?.[0];
          return (
            <Card
              key={project.id}
              as="article"
              interactive
              className="group relative flex flex-col p-6 md:p-7"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-h3 font-semibold text-[var(--text-primary)]">
                  {primary ? (
                    <a
                      href={primary.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors after:absolute after:inset-0 group-hover:text-[var(--color-primary-hover)] focus-visible:outline-none focus-visible:underline"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-[var(--color-metric)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-metric)]" />
                  Production
                </span>
              </div>

              {/* Outcome headline */}
              <p className="mt-2 text-[var(--text-secondary)] text-pretty">
                {project.oneLiner}
              </p>

              {/* Problem / Approach / Impact */}
              <dl className="mt-5 space-y-3 border-t border-[var(--border-subtle)] pt-5 text-sm">
                {ROW_LABELS.map(({ key, label }) => {
                  const value = project[key as keyof typeof project] as string;
                  if (!value) return null;
                  return (
                    <div key={key} className="grid grid-cols-[5.5rem_1fr] gap-3">
                      <dt className="font-mono text-mono-label uppercase text-[var(--color-primary-hover)]">
                        {label}
                      </dt>
                      <dd className="leading-[1.55] text-[var(--text-secondary)]">
                        {value}
                      </dd>
                    </div>
                  );
                })}
              </dl>

              {/* Metrics */}
              {project.metrics?.length ? (
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {project.metrics.slice(0, 4).map((metric) => (
                    <li
                      key={metric}
                      className="font-mono text-xs text-[var(--color-metric)]"
                    >
                      ▸ {metric}
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* Stack + visit cue pinned to bottom */}
              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                {primary ? (
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-sm text-[var(--color-primary-hover)] transition-colors group-hover:text-[var(--color-primary)]">
                    {primary.label}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                ) : null}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
