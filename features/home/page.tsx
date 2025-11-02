"use client"

import React, { useRef, Suspense } from 'react'
import Hero from './components/hero/hero'
import ProjectsSection from './components/projects-section'
import { SectionSeparator } from '@/features/shared/section-separator'
import TechStack from './components/tech-stack/tech-stack'
import { WorkExperience } from '@/features/home/components/experience/work-experience'
import { WORK_EXPERIENCE } from '@/lib/data/work-experience-data'
import { ProjectsGrid } from './components/projects/projects-grid'
import { GitHubContributions } from './components/github-contributions/github-contributions'

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

      {/* Tech Stack Section */}
      <SectionSeparator className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Tech Stack</h2>
      </SectionSeparator>
      <TechStack />

      {/* GitHub Contributions Section */}
      {githubContributions && (
        <>
          <SectionSeparator className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
            <h2 className="text-2xl italic font-serif">GitHub Activity</h2>
          </SectionSeparator>
          <div className="mt-6">
            <Suspense fallback={
              <div className="w-full bg-card-2 rounded-[var(--radius)] border border-border p-6 animate-pulse">
                <div className="h-4 bg-muted rounded w-1/3 mb-4"></div>
                <div className="h-32 bg-muted rounded"></div>
              </div>
            }>
              <GitHubContributions
                totalContributions={githubContributions.totalContributions}
                contributions={githubContributions.contributions}
              />
            </Suspense>
          </div>
        </>
      )}

      {/* Projects Grid Section */}
      <SectionSeparator ref={projectsHeaderRef} className='mt-8' lineClassName='bg-border max-w-md mx-auto'>
        <h2 className="text-2xl italic font-serif">My Projects</h2>
      </SectionSeparator>
      <ProjectsGrid />
    </>
  )
}
