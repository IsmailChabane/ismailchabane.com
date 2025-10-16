import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface SectionSeparatorProps {
  children: React.ReactNode
  className?: string
  lineClassName?: string
}

export const SectionSeparator = forwardRef<HTMLDivElement, SectionSeparatorProps>(
  ({ children, className, lineClassName }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center gap-4 w-full", className)}>
        <div className={cn("flex-1 h-px bg-border", lineClassName)} aria-hidden="true" />
        <div className="text-muted-foreground">{children}</div>
        <div className={cn("flex-1 h-px bg-border", lineClassName)} aria-hidden="true" />
      </div>
    )
  }
)

SectionSeparator.displayName = "SectionSeparator"
