"use client"

import { useEffect, useState } from "react"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "./kibo-ui-contribution-graph"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/features/shared/ui/tooltip"

interface GitHubContributionsProps {
  totalContributions: number
  contributions: Array<{
    date: string
    contributionCount: number
    color: string
  }>
}

/**
 * Calculates contribution intensity level for color mapping
 */
function getContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0
  if (count <= 1) return 1
  if (count <= 3) return 2
  if (count <= 6) return 3
  return 4
}

/**
 * Transforms GitHub contribution data to Kibo UI Activity format
 */
function transformToActivities(
  contributions: GitHubContributionsProps['contributions']
): Activity[] {
  return contributions.map(contribution => ({
    date: contribution.date,
    count: contribution.contributionCount,
    level: getContributionLevel(contribution.contributionCount) as 0 | 1 | 2 | 3 | 4,
  }))
}

export function GitHubContributions({ 
  totalContributions, 
  contributions 
}: GitHubContributionsProps) {
  const [isDark, setIsDark] = useState(false)
  const activities = transformToActivities(contributions)

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    
    return () => observer.disconnect()
  }, [])

  if (activities.length === 0) {
    return null
  }

  // GitHub colors for light and dark mode
  // Based on background color #161616, progressing to lighter grey shades
  const getFillColor = (level: number): string => {
    if (isDark) {
      const darkColors = [
        '#2a2a2a', // 0 contributions - lighter than #161616 to be visible
        '#0e4429', // 1-3 contributions - GitHub original dark green
        '#006d32', // 4-6 contributions - GitHub original green
        '#1f8a3a', // 7-9 contributions - darker medium green
        '#2ea043', // 10+ contributions - darker bright green
      ]
      return darkColors[level] || darkColors[0]
    } else {
      const lightColors = [
        '#ebedf0', // 0 contributions
        '#9be9a8', // 1-3 contributions
        '#40c463', // 4-6 contributions
        '#30a14e', // 7-9 contributions
        '#216e39', // 10+ contributions
      ]
      return lightColors[level] || lightColors[0]
    }
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    })
  }

  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || process.env.GITHUB_USERNAME

  return (
    <div className="w-full">
      <ContributionGraph
        className="w-full py-2"
        data={activities}
        totalCount={totalContributions}
        blockSize={22}
        blockMargin={6}
        blockRadius={3}
      >
        <ContributionGraphCalendar
          className="px-2"
          title="GitHub Contributions"
        >
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip>
              <TooltipTrigger asChild>
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                    style={{ fill: getFillColor(activity.level) }}
                    className="cursor-pointer transition-opacity hover:opacity-80"
                  />
                </g>
              </TooltipTrigger>
              <TooltipContent className="font-sans bg-card-2 text-card-foreground border dark:border-border-2 px-4 py-2 text-sm" sideOffset={0}>
                <p>
                  <span className="font-bold text-green-500">{activity.count}</span> contribution{activity.count !== 1 ? "s" : ""} on {formatDate(activity.date)}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-2 mt-2">
          <ContributionGraphTotalCount>
            {({ totalCount, year }) => (
              <div className="text-muted-foreground">
                {totalCount.toLocaleString("en")} contributions in {year}
                {githubUsername && (
                  <> on{" "}
                    <a
                      className="font-bold underline underline-offset-4 hover:text-green-500 transition-colors"
                      href={`https://github.com/${githubUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    .
                  </>
                )}
              </div>
            )}
          </ContributionGraphTotalCount>

          <ContributionGraphLegend>
            {({ level }) => (
              <svg height={25} width={25} className="block ">
                <rect
                  style={{ fill: getFillColor(level) }}
                  height={25}
                  rx={6}
                  ry={3}
                  width={25}
                />
              </svg>
            )}
          </ContributionGraphLegend>
        </ContributionGraphFooter>
      </ContributionGraph>
    </div>
  )
}
