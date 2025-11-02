import React from "react"
import { notFound } from "next/navigation"
import { Button } from "@/features/shared/ui/button"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { ProjectGallery } from "../components/project-gallery"
import { ProjectCard } from "@/features/home/components/projects/project-card"
import { SectionSeparator } from "@/features/shared/section-separator"
import { PROJECTS } from "@/lib/data/projects-data"
import { getMDXContent } from "@/lib/mdx-utils"
import Link from "next/link"
import Script from "next/script"

interface ProjectDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = PROJECTS.find((p) => p.id === id)
  if (!project) return {}
  const galleryOrThumb = project.gallery && project.gallery.length > 0 ? project.gallery : [project.thumbnail]
  const absolute = (path: string) => `https://ismailchabane.com${path}`
  return {
    metadataBase: new URL('https://ismailchabane.com'),
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${id}` },
    openGraph: {
      url: `/projects/${id}`,
      title: project.title,
      description: project.description,
      images: galleryOrThumb.map((src) => ({ url: absolute(src) })),
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: galleryOrThumb.map((src) => absolute(src)),
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params 
  const project = PROJECTS.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const mdxContent = await getMDXContent(project.id)

  // Get 3 random projects excluding the current one
  const otherProjects = PROJECTS.filter((p) => p.id !== id)
  const shuffled = [...otherProjects].sort(() => Math.random() - 0.5)
  const randomProjects = shuffled.slice(0, 3)

  // Determine images for gallery
  const images = project.gallery && project.gallery.length > 1 
    ? project.gallery 
    : [project.thumbnail]
  
  const altTexts = project.galleryAlt && project.galleryAlt.length > 1 
    ? project.galleryAlt 
    : [project.thumbnailAlt]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full">
        <Script id="project-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          image: images.map((src) => `https://ismailchabane.com${src}`),
          url: `https://ismailchabane.com/projects/${id}`,
        }) }} />
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="outline" className="flex items-center gap-2 bg-card-2 border border-border hover:bg-card-2/80 hover:text-foreground cursor-pointer">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Title - Centered */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground">{project.title}</h1>
        </div>

        {/* Media Section */}
        <div className="mb-8">
          {project.video ? (
            <div className="relative aspect-[16/9] rounded-[var(--radius)] overflow-hidden bg-card-2 border border-border">
              <video
                controls
                className="w-full h-full object-cover"
                poster={project.thumbnail}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <ProjectGallery images={images} altTexts={altTexts} />
          )}
        </div>

        {/* Action Buttons - Below Media */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          {project.links.live && project.links.live !== "#" && project.links.live.trim() !== "" && (
            <Button asChild size="lg" className="flex items-center gap-3 px-8 py-4 text-lg">
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
                Live Site
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button variant="outline" asChild size="lg" className="flex items-center gap-3 px-8 py-4 text-lg">
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View Code
              </a>
            </Button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {project.skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-card-2 border border-border rounded-lg"
              >
                {skill.icon}
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MDX Content */}
        {mdxContent && (
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none mt-12">
            {mdxContent}
          </div>
        )}

        {/* More Projects Section */}
        <div className="mt-24">
          <div className="mb-8">
            <SectionSeparator>
              <span className="text-2xl italic font-serif">Explore More Projects</span>
            </SectionSeparator>
          </div>
          <div className="bg-card-2 border border-border rounded-[var(--radius)] p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {randomProjects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
