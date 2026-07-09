import { cn } from "@/lib/utils"

/**
 * Brand logo: gradient circle with initials plus a wordmark label. Shared by
 * the navbar and footer, which render it inside their own `<Link>`.
 */
export function LogoMark({
  initials,
  label,
  labelClassName,
}: {
  initials: string
  label: string
  labelClassName?: string
}) {
  return (
    <>
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 via-yellow-400 to-orange-500 flex items-center justify-center">
        <span className="text-xs font-bold text-black">{initials}</span>
      </div>
      <span className={cn("text-sm font-medium tracking-wide", labelClassName)}>{label}</span>
    </>
  )
}
