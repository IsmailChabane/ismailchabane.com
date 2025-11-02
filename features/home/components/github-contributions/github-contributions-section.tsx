"use client"

import { Suspense } from 'react'
import { SectionSeparator } from '@/features/shared/section-separator'
import { GitHubContributions } from './github-contributions'

interface GitHubContributionsSectionProps {
  githubContributions: {
    totalContributions: number
    contributions: Array<{
      date: string
      contributionCount: number
      color: string
    }>
  } | null
}

export function GitHubContributionsSection({ githubContributions }: GitHubContributionsSectionProps) {
  if (!githubContributions) {
    return null
  }

  return (
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
  )
}

