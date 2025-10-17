"use client"

import React, { useState, useMemo, useEffect, useRef } from "react"
import { gsap } from "gsap"
import Lottie from "lottie-react"
import { Button } from "@/components/ui/button"
import { SearchBar } from "./search-bar"
import { ProjectCard } from "@/app/(home)/_components/projects/project-card"
import { Project } from "@/lib/data/projects-data"
import nothingAnimation from "@/public/animations/nothing.json"

interface ProjectsClientProps {
  projects: Project[]
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [displayCount, setDisplayCount] = useState(6)
  
  const searchBarRef = useRef<HTMLDivElement>(null)
  const resultsCountRef = useRef<HTMLDivElement>(null)
  const projectsGridRef = useRef<HTMLDivElement>(null)
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const emptyStateRef = useRef<HTMLDivElement>(null)

  // Filter projects based on search query
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects
    
    const query = searchQuery.toLowerCase()
    return projects.filter(project => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.category.some(cat => cat.toLowerCase().includes(query))
    )
  }, [searchQuery, projects])

  // Get projects to display (with load more functionality)
  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, displayCount)
  }, [filteredProjects, displayCount])

  // Check if there are more projects to load
  const hasMoreProjects = displayCount < filteredProjects.length

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    // Reset display count when searching
    setDisplayCount(6)
  }

  // Animation effect for initial load and when projects change
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Search bar animation - faster timing
      tl.fromTo(
        searchBarRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        0.2 // Start after header animation
      )

      // Results count animation (if visible)
      if (searchQuery && resultsCountRef.current) {
        tl.fromTo(
          resultsCountRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3 },
          "-=0.2"
        )
      }

      // Projects grid animation with stagger
      if (displayedProjects.length > 0 && projectsGridRef.current) {
        const projectCards = projectsGridRef.current.children
        tl.fromTo(
          projectCards,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.5,
            stagger: 0.1
          },
          "-=0.1"
        )

        // Load more button animation (if visible)
        if (hasMoreProjects && loadMoreRef.current) {
          tl.fromTo(
            loadMoreRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4 },
            "-=0.3"
          )
        }
      } else if (emptyStateRef.current) {
        // Empty state animation
        tl.fromTo(
          emptyStateRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.1"
        )
      }
    })

    return () => ctx.revert()
  }, [displayedProjects, hasMoreProjects, searchQuery])

  return (
    <>
      {/* Search Bar */}
      <div ref={searchBarRef} className="opacity-0">
        <SearchBar 
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div ref={resultsCountRef} className="mb-6 opacity-0">
          <p className="text-muted-foreground">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
          </p>
        </div>
      )}

      {/* Projects Grid */}
      {displayedProjects.length > 0 ? (
        <>
          <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-14">
            {displayedProjects.map((project) => (
              <div key={project.id} className="opacity-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreProjects && (
            <div ref={loadMoreRef} className="flex justify-center mt-12 opacity-0">
              <Button
                onClick={handleLoadMore}
                variant="outline"
                className="px-8 py-3"
              >
                Load More Projects
              </Button>
            </div>
          )}
        </>
      ) : (
        <div ref={emptyStateRef} className="flex flex-col items-center justify-center py-12 opacity-0">
          <div className="w-64 h-64 mb-6">
            <Lottie 
              animationData={nothingAnimation} 
              loop={true}
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {searchQuery ? "Nothing Found" : "No Projects Yet"}
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            {searchQuery 
              ? `We couldn't find any projects matching "${searchQuery}"`
              : "We found nothing here"}
          </p>
          {searchQuery && (
            <Button
              onClick={() => handleSearchChange("")}
              variant="outline"
              className="px-6 py-2"
            >
              Clear Search
            </Button>
          )}
        </div>
      )}
    </>
  )
}
