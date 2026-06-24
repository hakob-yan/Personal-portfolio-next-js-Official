type MetricProps = {
  value: string;
  label: string;
  context?: string;
  className?: string;
};

/**
 * Conversion weapon: value → label → context. The value is the only teal element
 * on the page (teal = a number that proves something). The context line is what
 * makes the number credible vs. a vanity stat.
 */
export function Metric({ value, label, context, className = "" }: MetricProps) {
  return (
    <div className={className}>
      <div className="tnum font-mono text-2xl font-semibold text-[var(--color-metric)] md:text-[2rem]">
        {value}
      </div>
      <div className="mt-1 font-mono text-mono-label uppercase text-[var(--text-muted)]">
        {label}
      </div>
      {context && (
        <div className="mt-0.5 text-sm text-[var(--text-secondary)]">
          {context}
        </div>
      )}
    </div>
  );
}
