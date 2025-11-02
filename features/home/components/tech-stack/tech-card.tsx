import React from 'react'

interface TechCardProps {
  skill: {
    icon: React.ReactNode | string
    name: string
    description: string
    optimize?: boolean
  }
}

export function TechCard({ skill }: TechCardProps) {
  const renderIcon = () => {
    if (typeof skill.icon === 'string') {
      // Check if it's an SVG string
      if (skill.icon.startsWith('<svg') || skill.icon.startsWith('<img')) {
        return (
          <div 
            className="flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: skill.icon }}
          />
        )
      }
      // If it's an image URL, render as img tag
      return (
        <div 
          className="flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: skill.icon }}
        />
      )
    }
    
    // React component icon
    return (
      <div className="flex items-center justify-center">
        {skill.icon}
      </div>
    )
  }

  return (
    <div className="bg-card-3 rounded-[var(--radius)] p-3 aspect-square flex flex-col items-center justify-center gap-2  transition-all duration-300 outline outline-border shadow-sm  hover:ring-4 hover:ring-border dark:hover:ring-card hover:-ring-offset-2">
      <div className="flex items-center justify-center">
        {renderIcon()}
      </div>
      <span draggable={false} className="text-xs md:text-sm xl:text-sm font-medium text-center text-foreground select-none leading-tight">
        {skill.name}
      </span>
    </div>
  )
}
