"use client"

import React, { useRef } from 'react'
import Hero from './components/hero/hero'
import ProjectsSection from './components/projects-section'
import { SectionSeparator } from '@/features/shared/section-separator'
import TechStack from './components/tech-stack/tech-stack'
import { WorkExperience } from '@/features/home/components/experience/work-experience'
import { WORK_EXPERIENCE } from '@/lib/data/work-experience-data'
import { ProjectsGrid } from './components/projects/projects-grid'

export default function HomePage() {
  const projectsHeaderRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    projectsHeaderRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }

  return (
    <>
      <Hero />
      <ProjectsSection onScrollToProjects={scrollToProjects} />
      <SectionSeparator className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Tech Stack</h2>
      </SectionSeparator>
      <TechStack />
      <SectionSeparator className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Experience</h2>
      </SectionSeparator>
      <WorkExperience experiences={WORK_EXPERIENCE} className="mt-6" />
      <SectionSeparator ref={projectsHeaderRef} className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Projects</h2>
      </SectionSeparator>
      <ProjectsGrid />
      </>
  )
}
