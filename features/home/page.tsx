"use client"

import React, { useRef, Suspense } from 'react'
import Hero from './components/hero/hero'
import ProjectsSection from './components/projects-section'
import { SectionSeparator } from '@/features/shared/section-separator'
import TechStack from './components/tech-stack/tech-stack'
import { WorkExperience } from '@/features/home/components/experience/work-experience'
import { WORK_EXPERIENCE } from '@/lib/data/work-experience-data'
import { ProjectsGrid } from './components/projects/projects-grid'
import { GitHubContributionsSection } from './components/github-contributions/github-contributions-section'

interface HomePageProps {
  githubContributions: {
    totalContributions: number
    contributions: Array<{
      date: string
      contributionCount: number
      color: string
    }>
  } | null
}

export default function HomePage({ githubContributions }: HomePageProps) {
  const projectsHeaderRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    projectsHeaderRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Projects Showcase Section */}
      <ProjectsSection onScrollToProjects={scrollToProjects} />
      
      {/* Work Experience Section */}
      <SectionSeparator className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Experience</h2>
      </SectionSeparator>
      <WorkExperience experiences={WORK_EXPERIENCE} className="mt-6" />

      {/* GitHub Contributions Section */}
      <GitHubContributionsSection githubContributions={githubContributions} />

      {/* Tech Stack Section */}
      <SectionSeparator className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Tech Stack</h2>
      </SectionSeparator>
      <TechStack />

      {/* Projects Grid Section */}
      <SectionSeparator ref={projectsHeaderRef} className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Projects</h2>
      </SectionSeparator>
      <ProjectsGrid />
    </>
  )
}
