"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

/**
 * Shared scroll-reveal helper: creates a ref and reports whether the element
 * has entered the viewport (only once). Used by section components to trigger
 * their entrance animations.
 */
export function useInViewOnce(margin: `${number}px` | `${number}%` = "-100px") {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin })
  return { ref, isInView }
}
