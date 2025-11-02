'use server'

interface GitHubContributionDay {
  date: string
  contributionCount: number
  color: string
}

interface GitHubContributionsResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number
        weeks: Array<{
          contributionDays: Array<{
            date: string
            contributionCount: number
            color: string
          }>
        }>
      }
    }
  }
}

/**
 * Fetches GitHub contribution data for a user using GraphQL API
 * @param username - GitHub username
 * @returns Contribution data or null if error
 */
export async function getGitHubContributions(
  username: string
): Promise<{
  totalContributions: number
  contributions: GitHubContributionDay[]
} | null> {
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  const githubUsername = username || process.env.GITHUB_USERNAME

  if (!token || !githubUsername) {
    console.warn('GitHub credentials not configured')
    return null
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection(from: "${new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString()}", to: "${new Date().toISOString()}") {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username: githubUsername },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const data: { data: GitHubContributionsResponse } = await response.json()

    if (!data.data?.user?.contributionsCollection) {
      throw new Error('Invalid response from GitHub API')
    }

    const { contributionCalendar } = data.data.user.contributionsCollection
    const contributions: GitHubContributionDay[] = []

    // Flatten the weeks array into a single contributions array
    contributionCalendar.weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        contributions.push({
          date: day.date,
          contributionCount: day.contributionCount,
          color: day.color,
        })
      })
    })

    return {
      totalContributions: contributionCalendar.totalContributions,
      contributions,
    }
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    return null
  }
}
