type CardProps = {
  children: React.ReactNode;
  /** Enables the 2px lift + border-brighten hover. */
  interactive?: boolean;
  as?: "div" | "article";
  className?: string;
};

/**
 * Base surface card. Hover is a restrained 2px lift + border brighten — no glow,
 * no gradient border. Subtle is the senior signal.
 */
export function Card({
  children,
  interactive = false,
  as: Tag = "div",
  className = "",
}: CardProps) {
  const hover = interactive
    ? "transition-all duration-[160ms] ease-reveal hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)] hover:shadow-card"
    : "";

  return (
    <Tag
      className={`rounded-card border border-[var(--border-subtle)] bg-[var(--surface-card)] ${hover} ${className}`}
    >
      {children}
    </Tag>
  );
}
