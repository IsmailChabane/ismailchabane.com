"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, Info } from "lucide-react"
import { Project } from "@/lib/data/projects-data"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Determine images for carousel
  const images = project.gallery && project.gallery.length > 1 
    ? project.gallery 
    : [project.thumbnail]

  // Determine primary button
  const hasPrimaryLink = project.links.live || project.links.github
  const primaryButton = {
    label: project.links.live ? "Live Site" : "GitHub",
    link: project.links.live || project.links.github,
    icon: project.links.live ? ArrowRight : Github
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    setCurrentImageIndex(0) // Reset to first image
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setCurrentImageIndex(0) // Reset to first image
  }

  // Auto-rotate images when multiple images exist
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [images.length])

  return (
    <div className="group">
      <div 
        className="relative rounded-[var(--radius)] overflow-hidden cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Project Images with Carousel */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${project.title} project screenshot ${index + 1}`}
              fill
              className={`absolute inset-0 object-cover transition-opacity duration-700 ease-in-out ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          
          {/* Gradient Overlay on Hover */}
          {isHovering && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent transition-opacity duration-300" />
          )}

          {/* Play Button Overlay */}
          {isHovering && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 bg-white text-black font-regular w-36 py-3 rounded-sm cursor-pointer hover:bg-white/10 hover:backdrop-blur-sm hover:text-white hover:border-white hover:border"
                onClick={() => {
                  // Empty handler for now - will implement later
                  console.log('Play clicked for', project.title)
                }}
              >
                <ArrowRight className="w-6 h-6" />
                Play Video
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Project Name and Tags Below - Floating Outside */}
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground  ">
          {project.title}
        </h3>
        
        {/* Category Tags on the right */}
        {/* <div className="flex gap-2">
          {project.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded"
            >
              {cat}
            </span>
          ))} */}
          <h2 className="text-md font-semibold text-foreground underline flex items-center gap-2 cursor-pointer ">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </h2>
        </div>
      </div>
  )
}
