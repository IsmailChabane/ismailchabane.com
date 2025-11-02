"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

interface ProjectGalleryProps {
  images: string[]
  altTexts: string[]
}

export function ProjectGallery({ images, altTexts }: ProjectGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-rotate images when not hovered
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length, isHovered])

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index)
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div 
      className="relative aspect-[16/9] rounded-[var(--radius)] overflow-hidden bg-card-2 border border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={altTexts[index] || `Project image ${index + 1}`}
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-700 ease-in-out ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Navigation Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index
                  ? 'bg-white shadow-lg scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay for better dot visibility */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      )}
    </div>
  )
}
