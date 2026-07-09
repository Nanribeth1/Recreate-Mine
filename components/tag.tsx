import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Rounded pill used for tech/skill tags. Callers pass sizing and color
 * (padding, background, text size) via `className`; the shared shape and
 * typography live here.
 */
export function Tag({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span className={cn("font-medium tracking-wider rounded-full", className)}>
      {children}
    </span>
  )
}
