"use client"

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus, ArrowRight, Mail, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const availableTextRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return

    // Set initial position for the text (at the top of the container)
    gsap.set(textRef.current, { y: -200 })

    // Create the scroll-triggered animation
    const animation = gsap.to(textRef.current, {
      y: 0, // move to center
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          // Additional fine-tuning of the animation
          const progress = self.progress
          gsap.set(textRef.current, { 
            y: gsap.utils.interpolate(-200, 0, progress)
          })
        }
      }
    })

    // Animate elements in sequence when they come into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.from(availableTextRef.current, { 
      opacity: 0, 
      y: 20, 
      duration: 0.6,
      ease: "power2.out"
    })
    .from(headingRef.current, { 
      opacity: 0, 
      y: 30, 
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .from(descriptionRef.current, { 
      opacity: 0, 
      y: 20, 
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .from(buttonRef.current, { 
      opacity: 0, 
      y: 20, 
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")

    return () => {
      animation.kill()
      tl.kill()
    }
  }, [])

  return (
    <footer 
      ref={containerRef}
      className="relative w-full h-[80svh] bg-card-2 mt-12 rounded-[var(--radius)] overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 50%),
          linear-gradient(45deg, rgba(0,0,0,0.1) 0%, transparent 30%),
          linear-gradient(225deg, rgba(0,0,0,0.08) 0%, transparent 40%),
          linear-gradient(315deg, rgba(0,0,0,0.05) 0%, transparent 25%),
          radial-gradient(ellipse at top, rgba(0,0,0,0.1) 0%, transparent 70%),
          var(--color-card-2)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%'
      }}
    >
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div ref={textRef} className="text-center max-w-2xl mx-auto">
          {/* Available to work text */}
          <div ref={availableTextRef} className="flex items-center justify-center mb-4">
            <div className="h-px bg-muted-foreground w-8 mr-4"></div>
            <span className="text-muted-foreground text-sm italic">Available to work</span>
            <div className="h-px bg-muted-foreground w-8 ml-4"></div>
          </div>

          {/* Main heading */}
          <h1 ref={headingRef} className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-muted-foreground">Let's</span>{' '}
            <span className="text-foreground">Connect</span>
          </h1>

          {/* Description */}
          <p ref={descriptionRef} className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Feel free to contact me if having any questions. I'm available for new projects or just for chatting.
          </p>

          {/* Book a Meeting button */}
        </div>
      </div>

      {/* Placeholder for future social icons and legal links */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between items-end px-8">
        <div className="text-muted-foreground text-sm">
          <p>© Ismail Chabane, 2025</p>
        </div>
        
        <div className="flex gap-4">
          {/* Social icons */}
          <Link 
            href="mailto:ismailchabane2@gmail.com"
            className="w-12 h-12 z-10 bg-card border cursor-pointer border-border rounded-full flex items-center justify-center hover:bg-card-2 transition-colors"
          >
            <Mail className="w-5 h-5 text-card-3-foreground" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/ismail-chabane/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 z-10 bg-card border cursor-pointer border-border rounded-full flex items-center justify-center hover:bg-card-2 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-card-3-foreground" />
          </Link>
          <Link 
            href="https://github.com/IsmailChabane"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 z-10 bg-card border cursor-pointer border-border rounded-full flex items-center justify-center hover:bg-card-2 transition-colors"
          >
            <Github className="w-5 h-5 text-card-3-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
