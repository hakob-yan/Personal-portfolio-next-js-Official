type TagProps = {
  children: React.ReactNode;
  /** "accent" for stack chips, "muted" for neutral metadata. */
  tone?: "accent" | "muted";
  className?: string;
};

/**
 * Monospace tech chip. Mono font instantly reads as "real stack", not marketing.
 */
export function Tag({ children, tone = "accent", className = "" }: TagProps) {
  const tones = {
    accent:
      "bg-[var(--color-primary-soft)] text-accent-400 border-[rgba(59,130,196,0.2)]",
    muted:
      "bg-white/[0.03] text-[var(--text-secondary)] border-[var(--border-subtle)]",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-tag border px-2.5 py-1 font-mono text-[0.8125rem] leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
