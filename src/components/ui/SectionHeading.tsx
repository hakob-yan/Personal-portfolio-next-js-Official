import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
};

/**
 * Standard section opener: mono eyebrow → display title → optional lead.
 * Consistent rhythm across sections is subconscious quality signaling.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-h1 font-semibold text-[var(--text-primary)] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-reading text-body-lg text-[var(--text-secondary)] text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
