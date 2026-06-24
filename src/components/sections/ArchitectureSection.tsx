import { SECTION_IDS } from "@/constants/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Server, Activity, ShieldCheck } from "lucide-react";

const PATTERNS = [
  {
    icon: Server,
    title: "Service Architectures",
    points: [
      "Modular monoliths with strict boundaries, decomposed to microservices only where a domain needs to scale independently.",
      "Event-driven workflows over RabbitMQ for async, decoupled communication.",
      "Serverless (AWS Lambda) for bursty, high-demand workloads.",
    ],
  },
  {
    icon: Activity,
    title: "Reliability & Performance",
    points: [
      "Redis caching and PostgreSQL indexing for low-latency reads under load.",
      "Health checks, structured logging, and metrics — observability before scale.",
      "Horizontal scaling and capacity planning for high-traffic paths.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Delivery",
    points: [
      "AuthN/AuthZ with JWT, 2FA, and least-privilege service access.",
      "API rate limiting and OWASP-aligned hardening on public contracts.",
      "Dockerized CI/CD (Jenkins, AWS) with automated rollbacks.",
    ],
  },
];

// Lightweight box-and-arrow diagram node.
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
      className={`rounded-btn border bg-[var(--surface-raised)] px-3 py-2 text-center font-mono text-xs ${tones[tone]}`}
    >
      <div>{label}</div>
      {sub && <div className="mt-0.5 text-[0.65rem] text-[var(--text-muted)]">{sub}</div>}
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
        eyebrow="Architecture Case Studies"
        title="How I think about systems"
        description="A representative design — the constraints, the decisions I made, the trade-offs I accepted, and what shipped."
      />

      {/* Featured case study */}
      <Card className="overflow-hidden p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Narrative */}
          <div className="space-y-6 lg:col-span-7">
            <div>
              <h3 className="font-display text-h3 font-semibold text-[var(--text-primary)]">
                Event-driven financial-reporting pipeline
              </h3>
              <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">
                BigBI — Senior Engineer, backend architecture
              </p>
            </div>

            <div>
              <p className="font-mono text-mono-label uppercase text-[var(--color-primary-hover)]">
                Context & constraints
              </p>
              <p className="mt-2 text-sm leading-[1.6] text-[var(--text-secondary)]">
                Financial reporting needed to ingest and process 1M+ events a
                month with accuracy and strong data isolation. Synchronous,
                tightly-coupled services made every spike a shared failure and
                every deploy a risk to reporting integrity.
              </p>
            </div>

            <div>
              <p className="font-mono text-mono-label uppercase text-[var(--color-primary-hover)]">
                Key decisions & trade-offs
              </p>
              <ul className="mt-2 space-y-2 text-sm leading-[1.6] text-[var(--text-secondary)]">
                <li>
                  <span className="text-[var(--text-primary)]">
                    Decomposed into Node.js / NestJS microservices
                  </span>{" "}
                  — accepted added network hops and operational surface in
                  exchange for independent deploys and blast-radius isolation.
                </li>
                <li>
                  <span className="text-[var(--text-primary)]">
                    Moved processing onto event-driven RabbitMQ pipelines
                  </span>{" "}
                  — chose eventual consistency over synchronous calls so a heavy
                  job could never block ingestion or the API.
                </li>
                <li>
                  <span className="text-[var(--text-primary)]">
                    Hardened isolation & automated containerized AWS deploys
                  </span>{" "}
                  — traded extra CI/CD investment for mitigated XSS/clickjacking
                  risk and zero environment drift.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-mono-label uppercase text-[var(--color-primary-hover)]">
                Results
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-[var(--color-metric)]">
                <li>▸ 1M+ events / month processed</li>
                <li>▸ Reporting accuracy & data isolation</li>
                <li>▸ Reliable, automated AWS deploys</li>
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
            <div className="rounded-card border border-[var(--border-subtle)] bg-[var(--surface-base)]/60 p-5 bg-grid-mesh">
              <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-wide text-[var(--text-muted)]">
                Request &amp; job flow
              </p>
              <div className="flex flex-col items-stretch gap-3">
                <Node label="Data sources" />
                <div className="mx-auto h-4 w-px bg-[var(--border-strong)]" />
                <Node label="API gateway" tone="accent" sub="rate-limit · authZ" />
                <div className="mx-auto h-4 w-px bg-[var(--border-strong)]" />
                <div className="grid grid-cols-3 gap-2">
                  <Node label="auth-svc" />
                  <Node label="ingest-svc" tone="accent" />
                  <Node label="report-api" />
                </div>
                <div className="mx-auto h-4 w-px bg-[var(--border-strong)]" />
                <Node label="RabbitMQ" tone="accent" sub="event bus · 1M+/mo" />
                <div className="mx-auto h-4 w-px bg-[var(--border-strong)]" />
                <div className="grid grid-cols-2 gap-2">
                  <Node label="report workers" />
                  <Node label="processors" />
                </div>
                <div className="mx-auto h-4 w-px bg-[var(--border-strong)]" />
                <Node label="PostgreSQL" tone="data" sub="indexed reads" />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Production patterns */}
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
