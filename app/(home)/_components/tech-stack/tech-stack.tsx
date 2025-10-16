import React from 'react'
// import { techCategories } from '@/lib/data/tech-stack-data'
import { TechCard } from './tech-card'
import { techCategories } from '@/lib/data/tech-stack-data'

export default function TechStack() {
  return (
    <section className="py-12 bg-card-2 rounded-[var(--radius)] border border-border mt-8">
      <div className="container mx-auto">

        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4  relative overflow-hidden">
          {techCategories.map((category, index) => {
            // Calculate position for conditional dividers
            const isLastColumn2Col = (index + 1) % 2 === 0
            const isLastColumn3Col = (index + 1) % 3 === 0
            const isLastColumn4Col = (index + 1) % 4 === 0
            
            // Calculate if it's in the last row
            const totalItems = techCategories.length
            const isLastRow2Col = index >= totalItems - 2
            const isLastRow3Col = index >= totalItems - 3
            const isLastRow4Col = index >= totalItems - 4
            
            return (
              <div
                key={category.id}
                className={`
                  p-3 md:p-5 relative
                  after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px 
                  after:bg-gradient-to-b after:from-transparent dark:after:via-border-2 after:via-border after:to-transparent
                  before:absolute before:bottom-0 before:left-0 before:right-0 before:h-px
                  before:bg-gradient-to-r before:from-transparent dark:before:via-border-2 before:via-border before:to-transparent
                  ${isLastColumn2Col ? 'xl:after:block 2xl:after:block' : 'after:block xl:after:block 2xl:after:block'}
                  ${isLastColumn3Col ? '2xl:after:block' : '2xl:after:block'}
                  ${isLastColumn4Col ? 'after:hidden' : ''}
                  ${isLastRow2Col ? 'xl:before:block 2xl:before:block' : 'before:block xl:before:block 2xl:before:block'}
                  ${isLastRow3Col ? '2xl:before:block' : '2xl:before:block'}
                  ${isLastRow4Col ? 'before:hidden' : ''}
                `}
              >
                <h3 className="text-sm md:text-lg  mb-2 md:mb-4 uppercase tracking-wide text-center  italic font-serif text-foreground">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-1 md:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <TechCard key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
