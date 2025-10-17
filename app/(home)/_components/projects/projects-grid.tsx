"use client"

import React from "react"
import Link from "next/link"
import { ProjectCard } from "./project-card"
import { PROJECTS } from "@/lib/data/projects-data"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProjectsGrid() {
  const displayedProjects = PROJECTS.slice(0, 6)

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-14">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} showPlayVideo={true} />
        ))}
      </div>
      
      {PROJECTS.length > 6 && (
        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button variant="outline" className="flex items-center gap-2 px-8 py-3">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
