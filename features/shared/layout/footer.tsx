import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import { ShadowOverlay } from '../shadow-overlay'

export default function Footer() {

  return (
    <footer className="relative w-full h-[80svh] bg-card-2 mt-12 rounded-[var(--radius)] overflow-hidden">
      {/* Animated Shadow Overlay Background */}
      <ShadowOverlay
        color="rgba(128, 128, 128, 0.6)"
        animation={{
          scale: 50,
          speed: 60
        }}
        noise={{
          opacity: 0.4,
          scale: 1
        }}
        sizing="fill"
      />
      
      {/* Content container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Available to work text */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-muted-foreground w-8 mr-4"></div>
            <span className="text-muted-foreground text-sm italic">Available to work</span>
            <div className="h-px bg-muted-foreground w-8 ml-4"></div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-muted-foreground">Let's</span>{' '}
            <span className="text-foreground">Connect</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Feel free to contact me if having any questions. I'm available for new projects or just for chatting.
          </p>
        </div>
      </div>

      {/* Social icons and legal links */}
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
