"use client"

import React from "react"
import { ProjectCard } from "./project-card"
import { PROJECTS } from "@/lib/data/projects-data"

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 gap-y-14">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
