"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { PROJECTS } from "@/lib/data/projects-data"
import { ProjectsClient } from "./_components/projects-client"

export default function ProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Header animation - faster timing
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 }
      )
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.3 },
        "-=0.2"
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto min-h-[calc(100svh-112px)]">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h1 
            ref={titleRef}
            className="text-4xl font-bold text-foreground mb-4 opacity-0"
          >
            My Projects
          </h1>
          <p 
            ref={descriptionRef}
            className="text-muted-foreground text-lg opacity-0"
          >
            Explore my portfolio of web applications and digital solutions
          </p>
        </div>

        {/* Client Component for Interactive Features */}
        <ProjectsClient projects={PROJECTS} />
      </div>
    </div>
  )
}
