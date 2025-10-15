import type React from "react"
import { cn } from "@/lib/utils"

interface SectionSeparatorProps {
  children: React.ReactNode
  className?: string
  lineClassName?: string
}

export function SectionSeparator({ children, className, lineClassName }: SectionSeparatorProps) {
  return (
    <div className={cn("flex items-center gap-4 w-full", className)}>
      <div className={cn("flex-1 h-px bg-border", lineClassName)} aria-hidden="true" />
      <div className="text-muted-foreground">{children}</div>
      <div className={cn("flex-1 h-px bg-border", lineClassName)} aria-hidden="true" />
    </div>
  )
}
