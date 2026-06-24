export const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 rounded-btn text-sm font-medium transition-all duration-[160ms] ease-reveal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)]";

export const BUTTON_VARIANTS = {
  // Solid steel-blue with dark ink text for AA contrast.
  primary:
    "px-5 py-2.5 bg-[var(--color-primary)] text-ink-950 hover:bg-[var(--color-primary-hover)] disabled:opacity-60",
  // Neutral outline that warms to accent on hover.
  outline:
    "px-5 py-2.5 border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-hover)] disabled:opacity-60",
  // Low-emphasis text/link action.
  ghost:
    "px-3 py-2 font-mono text-[var(--color-primary-hover)] hover:text-[var(--color-primary)] disabled:opacity-60",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
