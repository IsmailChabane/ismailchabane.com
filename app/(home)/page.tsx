import React from 'react'
import Hero from './_components/hero/hero'
import ProjectsSection from './_components/projects-section'
import { SectionSeparator } from '@/components/shared/section-separator'
import TechStack from './_components/tech-stack/tech-stack'
import { WorkExperience } from '@/app/(home)/_components/experience/work-experience'
import { WORK_EXPERIENCE } from '@/lib/data/work-experience-data'
import { ProjectsGrid } from './_components/projects/projects-grid'

export default function HomePage() {
  return (
    <main className='container mx-auto bg-card rounded-[var(--radius)] border border-border  min-h-[calc(100svh-112px)] p-4    '>
      <Hero />
      <ProjectsSection />
      <SectionSeparator className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Tech Stack</h2>
      </SectionSeparator>
      <TechStack />
      <SectionSeparator className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Experience</h2>
      </SectionSeparator>
      <WorkExperience experiences={WORK_EXPERIENCE} className="mt-6" />
      <SectionSeparator className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Projects</h2>
      </SectionSeparator>
      <ProjectsGrid />
    </main>
  )
} 
