import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const contentDirectory = path.join(process.cwd(), 'content', 'projects')

export async function getMDXContent(projectId: string) {
  try {
    const filePath = path.join(contentDirectory, `${projectId}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const source = fs.readFileSync(filePath, 'utf8')
    
    const { content } = await compileMDX({
      source,
      options: {
        parseFrontmatter: false,
      },
    })

    return content
  } catch (error) {
    console.error(`Error loading MDX content for ${projectId}:`, error)
    return null
  }
}
