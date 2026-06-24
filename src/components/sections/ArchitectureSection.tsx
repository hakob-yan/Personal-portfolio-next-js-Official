import { SECTION_IDS } from "@/constants/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Server, Activity, ShieldCheck } from "lucide-react";

// Supporting principles — each grounded in CV-verifiable work.
const PATTERNS = [
  {
    icon: Server,
    title: "Service Architectures",
    points: [
      "Modular services with clear boundaries, decomposed to microservices only where a domain needs to scale on its own.",
      "Event-driven workflows over RabbitMQ for async, decoupled communication.",
      "Serverless (AWS Lambda) for bursty, high-demand workloads.",
    ],
  },
  {
    icon: Activity,
    title: "Reliability & Performance",
    points: [
      "PostgreSQL indexing and isolation-level tuning — cut one report path from 6s to 1s.",
      "CloudWatch metrics and structured logging for visibility before scale.",
      "Horizontal scaling and capacity planning for high-traffic paths.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Delivery",
    points: [
      "Data privacy and tenant isolation; mitigated XSS and clickjacking in production.",
      "Containerized AWS (ECS/EC2) deployments via GitLab CI with consistent environments.",
      "Automated, repeatable releases that eliminated environment drift.",
    ],
  },
];

// ── Diagram primitives ──
function Node({
  label,
  sub,
  tone = "default",
}: {
  label: string;
  sub?: string;
  tone?: "default" | "accent" | "data";
}) {
  const tones = {
    default: "border-[var(--border-strong)] text-[var(--text-secondary)]",
    accent: "border-[var(--color-primary)] text-[var(--color-primary-hover)]",
    data: "border-[rgba(45,212,191,0.4)] text-[var(--color-metric)]",
  } as const;
  return (
    <div
      className={`rounded-btn border bg-[var(--surface-raised)] px-2.5 py-2 text-center font-mono text-xs ${tones[tone]}`}
    >
      <div>{label}</div>
      {sub && (
        <div className="mt-0.5 text-[0.65rem] text-[var(--text-muted)]">{sub}</div>
      )}
    </div>
  );
}

function Flow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 py-1.5 pl-1">
      <span className="text-[var(--border-strong)]">↓</span>
      <span className="font-mono text-[0.65rem] uppercase tracking-wide text-[var(--text-muted)]">
        {label}
      </span>
    </div>
  );
}

function Tier({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 font-mono text-[0.65rem] uppercase tracking-wide text-[var(--text-muted)]">
        {caption}
      </p>
      {children}
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <section
      id={SECTION_IDS.architecture}
      className="scroll-mt-24"
      aria-label="Architecture case studies"
    >
      <SectionHeading
        index="06"
        eyebrow="Architecture Case Study"
        title="A production system I designed and shipped"
        description="Event-driven microservices I architected at BigBI for an enterprise BI platform — the real constraints, the decisions and trade-offs, and the measurable outcome."
      />

      {/* Featured case study */}
      <Card className="overflow-hidden p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Narrative */}
          <div className="space-y-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="font-display text-h3 font-semibold text-[var(--text-primary)]">
                Event-driven financial-reporting pipeline
              </h3>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                BigBI · Senior Engineer (contract)
              </span>
            </div>

            <div>
              <p className="font-mono text-mono-label uppercase text-[var(--color-primary-hover)]">
                Context & constraints
              </p>
              <p className="mt-2 text-sm leading-[1.6] text-[var(--text-secondary)]">
                An enterprise BI platform needed to ingest and process 1M+ events
                a month with reporting accuracy and strict data isolation.
                Tightly-coupled, synchronous services made every spike a shared
                failure and every deploy a risk to reporting integrity.
              </p>
            </div>

            <div>
              <p className="font-mono text-mono-label uppercase text-[var(--color-primary-hover)]">
                Decisions & trade-offs
              </p>
              <ul className="mt-2 space-y-2 text-sm leading-[1.6] text-[var(--text-secondary)]">
                <li>
                  <span className="text-[var(--text-primary)]">
                    Decomposed into Node.js / NestJS microservices
                  </span>{" "}
                  — accepted more network hops and operational surface for
                  independent deploys and contained blast radius.
                </li>
                <li>
                  <span className="text-[var(--text-primary)]">
                    Made processing event-driven over RabbitMQ
                  </span>{" "}
                  — chose eventual consistency (and the extra observability it
                  demands) so a heavy job could never block ingestion.
                </li>
                <li>
                  <span className="text-[var(--text-primary)]">
                    Enforced data isolation and automated AWS deploys
                  </span>{" "}
                  — invested in CI/CD and isolation work up front to mitigate
                  XSS/clickjacking and remove environment drift.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-mono-label uppercase text-[var(--color-primary-hover)]">
                Outcome
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-[var(--color-metric)]">
                <li>▸ 1M+ events / month processed</li>
                <li>▸ Reporting accuracy & data isolation</li>
                <li>▸ Reliable, drift-free AWS deploys</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {["Node.js", "NestJS", "RabbitMQ", "PostgreSQL", "Docker", "AWS"].map(
                (t) => (
                  <Tag key={t}>{t}</Tag>
                ),
              )}
            </div>
          </div>

          {/* Diagram */}
          <div className="lg:col-span-5">
            <figure className="rounded-card border border-[var(--border-subtle)] bg-[var(--surface-base)]/60 bg-grid-mesh p-5">
              <figcaption className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[0.7rem] uppercase tracking-wide text-[var(--text-secondary)]">
                  Event-driven pipeline
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wide text-[var(--text-muted)]">
                  illustrative
                </span>
              </figcaption>

              <Tier caption="Producers · NestJS">
                <div className="grid grid-cols-2 gap-2">
                  <Node label="ingest-svc" />
                  <Node label="report-svc" />
                </div>
              </Tier>

              <Flow label="publish events" />

              <Tier caption="Event bus">
                <Node label="RabbitMQ" tone="accent" sub="1M+ events / mo" />
              </Tier>

              <Flow label="consume" />

              <Tier caption="Consumers · workers">
                <div className="grid grid-cols-3 gap-2">
                  <Node label="worker" />
                  <Node label="worker" />
                  <Node label="worker" />
                </div>
              </Tier>

              <Flow label="persist · isolated" />

              <Tier caption="Storage">
                <Node label="PostgreSQL" tone="data" sub="indexed · isolated" />
              </Tier>

              <p className="mt-4 border-t border-[var(--border-subtle)] pt-3 font-mono text-[0.65rem] uppercase tracking-wide text-[var(--text-muted)]">
                Containerized · AWS (ECS/EC2) · automated CI/CD
              </p>
            </figure>
          </div>
        </div>
      </Card>

      {/* Supporting principles */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {PATTERNS.map((pattern) => {
          const Icon = pattern.icon;
          return (
            <Card key={pattern.title} interactive className="p-6">
              <div className="flex items-center gap-2.5">
                <Icon size={18} className="text-[var(--color-primary-hover)]" />
                <h3 className="font-semibold text-[var(--text-primary)]">
                  {pattern.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm leading-[1.55] text-[var(--text-secondary)]">
                {pattern.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
