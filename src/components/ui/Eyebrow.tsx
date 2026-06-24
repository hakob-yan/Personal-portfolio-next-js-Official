type EyebrowProps = {
  /** Two-digit section index, e.g. "02". */
  index?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Mono section label in the documentation/spec style: `02 / CORE EXPERTISE`.
 * A small accent tick anchors it and aids the 5-second scan.
 */
export function Eyebrow({ index, children, className = "" }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-mono-label uppercase ${className}`}
    >
      <span className="h-px w-6 bg-[var(--color-primary)]" aria-hidden />
      {index && (
        <span className="text-[var(--color-primary)]">{index} /</span>
      )}
      <span className="text-[var(--text-muted)]">{children}</span>
    </div>
  );
}
