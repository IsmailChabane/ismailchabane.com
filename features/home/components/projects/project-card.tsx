"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/features/shared/ui/button"
import { ArrowRight } from "lucide-react"
import { Project } from "@/lib/data/projects-data"
import { AnimatedLink } from "@/features/shared/animated-link"

interface ProjectCardProps {
  project: Project
  showPlayVideo?: boolean
}

export function ProjectCard({ project, showPlayVideo = false }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Determine images for carousel
  const images = project.gallery && project.gallery.length > 1 
    ? project.gallery 
    : [project.thumbnail]
  
  // Determine alt texts for carousel
  const altTexts = project.galleryAlt && project.galleryAlt.length > 1 
    ? project.galleryAlt 
    : [project.thumbnailAlt]


  const handleMouseEnter = () => {
    setIsHovering(true)
    setCurrentImageIndex(0) // Reset to first image
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setCurrentImageIndex(0) // Reset to first image
  }

  // Auto-rotate images when multiple images exist and user is hovering
  useEffect(() => {
    if (images.length > 1 && isHovering) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [images.length, isHovering])

  return (
    <div className="group">
      <div 
        className={`relative rounded-[var(--radius)] overflow-hidden ${!project.video ? 'cursor-pointer' : 'cursor-pointer'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (!project.video) {
            window.location.href = `/projects/${project.id}`
          }
        }}
      >
        {/* Project Images with Carousel */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={altTexts[index] || project.thumbnailAlt}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`absolute inset-0 object-cover transition-opacity duration-700 ease-in-out ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          
          {/* Gradient Overlay on Hover */}
          {isHovering && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent transition-opacity duration-300" />
          )}

          {/* Overlay Content - Different based on video availability and showPlayVideo prop */}
          {isHovering && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              {project.video && showPlayVideo ? (
                // Show Play Video button when video exists and showPlayVideo is true
                <Button
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 bg-white text-black font-regular w-36 py-3 rounded-sm cursor-pointer hover:bg-white/10 hover:backdrop-blur-sm hover:text-white hover:border-white hover:border"
                  onClick={(e) => {
                    e.stopPropagation()
                    // Empty handler for now - will implement later
                    console.log('Play clicked for', project.title)
                  }}
                >
                  <ArrowRight className="w-6 h-6" />
                  Play Video
                </Button>
              ) : !project.video ? (
                // Show "View Project" when no video exists
                <Button
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 bg-white text-black font-regular w-36 py-3 rounded-sm cursor-pointer hover:bg-white/10 hover:backdrop-blur-sm hover:text-white hover:border-white hover:border"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.location.href = `/projects/${project.id}`
                  }}
                >
                  <ArrowRight className="w-6 h-6" />
                  View Project
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {/* Project Name and Tags Below - Floating Outside */}
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground  ">
          {project.title}
        </h3>
        
        {/* Learn More Link - Only show when not on home page or when video exists but showPlayVideo is false */}
        {(!showPlayVideo || (project.video && !showPlayVideo)) && (
          <AnimatedLink href={`/projects/${project.id}`} className="text-md font-semibold text-foreground flex items-center gap-2 cursor-pointer hover:text-muted-foreground transition-colors">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </AnimatedLink>
        )}
        </div>
      </div>
  )
}
