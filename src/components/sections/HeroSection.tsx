import Image from "next/image";
import { PROFILE } from "@/constants/profile";
import { SECTION_IDS } from "@/constants/navigation";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Metric } from "@/components/ui/Metric";

export function HeroSection() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[78vh] items-center py-12"
    >
      <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* ── Left: value proposition ── */}
        <div className="lg:col-span-7">
          <Eyebrow index="01">{PROFILE.title}</Eyebrow>

          <h1 className="mt-5 font-display text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[var(--text-primary)] sm:text-5xl md:text-display text-balance">
            {PROFILE.name}
          </h1>

          <p className="mt-5 max-w-xl text-body-lg text-[var(--text-secondary)] text-pretty">
            {PROFILE.tagline}
          </p>

          {/* Inline stack */}
          <p className="mt-5 font-mono text-sm text-[var(--text-muted)]">
            {PROFILE.coreStack.join("  ·  ")}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`#${SECTION_IDS.projects}`} target="_self" variant="primary">
              View Case Studies
            </Button>
            {PROFILE.links.resume && (
              <Button href={PROFILE.links.resume} variant="outline">
                Download CV
              </Button>
            )}
          </div>

          {/* Metric strip — above the fold, the 5-second payload */}
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-4">
            {PROFILE.heroMetrics.map((m) => (
              <Metric
                key={m.label}
                value={m.value}
                label={m.label}
                context={m.context}
              />
            ))}
          </div>
        </div>

        {/* ── Right: portrait ── */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-[340px] overflow-hidden rounded-card border border-[var(--border-subtle)] bg-[var(--surface-card)]">
            <Image
              src={PROFILE.avatar.src}
              alt={PROFILE.avatar.alt}
              width={680}
              height={820}
              priority
              sizes="(max-width: 1024px) 340px, 340px"
              className="h-auto w-full object-cover"
            />
            <div className="flex items-center gap-2 border-t border-[var(--border-subtle)] bg-[var(--surface-elevated)]/85 px-4 py-3 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-metric)] animate-status-pulse" />
              <span className="font-mono text-xs text-[var(--text-secondary)]">
                {PROFILE.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
