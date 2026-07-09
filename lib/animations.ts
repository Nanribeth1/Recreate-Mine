/**
 * Shared framer-motion prop helpers for the site's entrance animations.
 *
 * Every section fades/slides its content in once it scrolls into view. These
 * helpers centralize the repeated `initial` / `animate` / `transition` triples
 * so each component only supplies the values that actually differ (offset,
 * duration, delay).
 */

type RevealOptions = {
  duration?: number
  delay?: number
}

/**
 * Fade + slide up. `inView` gates the `animate` target so the element only
 * settles once it enters the viewport (pass `true` for always-on mount
 * animations like the hero).
 */
export function revealUp(
  inView: boolean,
  { y = 20, duration = 0.5, delay = 0 }: RevealOptions & { y?: number } = {},
) {
  return {
    initial: { opacity: 0, y },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration, delay },
  }
}

/**
 * Fade + scale in, used for image/grid blocks.
 */
export function revealScale(
  inView: boolean,
  { scale = 0.95, duration = 0.6, delay = 0 }: RevealOptions & { scale?: number } = {},
) {
  return {
    initial: { opacity: 0, scale },
    animate: inView ? { opacity: 1, scale: 1 } : {},
    transition: { duration, delay },
  }
}
