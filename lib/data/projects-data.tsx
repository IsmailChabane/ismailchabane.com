import React from "react"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiFirebase,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiStripe,
  SiFigma,
  SiGithub,
  SiVercel,
  SiJavascript,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiFastapi,
  SiGraphql,
  SiSocketdotio,
  SiJest,
  SiGit,
  SiPostman,
  SiEslint,
  SiPrettier,
  SiVite,
  SiStorybook,
  SiNotion,
  SiAppwrite,
  SiWebrtc,
  SiLemonsqueezy,
  SiTrpc,
  SiExpo,
  SiFlutter,
  SiSpring,
  SiAmazon,
  SiAwslambda
} from "react-icons/si"
import { FaServer, FaDatabase, FaJava } from "react-icons/fa"
import { MdMobileScreenShare } from "react-icons/md"

export interface Project {
  id: string
  title: string
  description: string
  category: string[]
  thumbnail: string
  thumbnailAlt: string
  gallery?: string[]
  galleryAlt?: string[]
  skills: { name: string; icon: React.ReactNode }[]
  links: {
    live?: string
    github?: string
    caseStudy?: string
  }
  video?: string // for future use
}

export const PROJECTS: Project[] = [
  {
    id: "africkana",
    title: "Africkana Radio",
    description: "Progressive web app for African music streaming with offline capabilities, real-time analytics, and comprehensive admin dashboard for content management.",
    category: ["Music", "PWA", "Streaming"],
    thumbnail: "/work/africkana/website.png",
    thumbnailAlt: "Ismail Chabane - Project - Africkana Radio - African music streaming platform with modern UI",
    gallery: [
      "/work/africkana/website.png",
      "/work/africkana/website2.png"
    ],
    galleryAlt: [
      "Ismail Chabane - Project - Africkana Radio - Main dashboard interface showing music streaming features",
      "Ismail Chabane - Project - Africkana Radio - Mobile responsive design with offline capabilities"
    ],
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-gray-300 h-4 w-4" /> },
      { name: "React", icon: <SiReact className="text-cyan-500 h-4 w-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 dark:text-blue-500 h-4 w-4" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 h-4 w-4" /> },
      { name: "PWA", icon: <MdMobileScreenShare className="text-gray-900 dark:text-gray-300 h-4 w-4" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500 h-4 w-4" /> }
    ],
    links: {
      live: "https://africkana.com",
      github: "https://github.com/yourusername/africkana"
    }
  },
  {
    id: "kora-awards",
    title: "Kora Awards Voting Platform",
    description: "Scalable online voting platform with microservices architecture, secure payment processing, and real-time analytics dashboard for award ceremonies.",
    category: ["Voting", "E-commerce", "Analytics"],
    thumbnail: "/work/koraawards/website.png",
    thumbnailAlt: "Ismail Chabane - Project - Kora Awards Voting Platform - Online voting system with secure payment processing",
    gallery: [
      "/work/koraawards/website.png"
    ],
    galleryAlt: [
      "Ismail Chabane - Project - Kora Awards Voting Platform - Voting interface with real-time analytics dashboard"
    ],
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-gray-300 h-4 w-4" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300 h-4 w-4" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-600 h-4 w-4" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500 h-4 w-4" /> },
      { name: "Stripe", icon: <SiStripe className="text-purple-700 h-4 w-4" /> },
      { name: "React", icon: <SiReact className="text-cyan-500 h-4 w-4" /> }
    ],
    links: {
      live: "https://koraawards.com",
      github: "https://github.com/yourusername/kora-awards"
    }
  },
  {
    id: "sofimed-maroc",
    title: "Sofimed Maroc AI System",
    description: "AI-powered pump selection system with LangGraph integration, comprehensive admin dashboard, and real-time analytics for medical equipment optimization.",
    category: ["AI", "Healthcare", "Dashboard"],
    thumbnail: "/work/sofimedmaroc/website.png",
    thumbnailAlt: "Ismail Chabane - Project - Sofimed Maroc AI System - AI-powered medical equipment selection platform",
    gallery: [
      "/work/sofimedmaroc/website.png"
    ],
    galleryAlt: [
      "Ismail Chabane - Project - Sofimed Maroc AI System - AI dashboard with pump selection interface and analytics"
    ],
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-gray-300 h-4 w-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 dark:text-blue-500 h-4 w-4" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-600 h-4 w-4" /> },
      { name: "Redis", icon: <SiRedis className="text-red-600 h-4 w-4" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 dark:text-blue-300 h-4 w-4" /> },
      { name: "Python", icon: <SiFastapi className="text-green-500 h-4 w-4" /> }
    ],
    links: {
      live: "https://sofimedmaroc.com",
      github: "https://github.com/yourusername/sofimed-ai"
    }
  },
  {
    id: "softskills-club",
    title: "Soft Skills Club",
    description: "Educational platform for professional development with interactive courses, progress tracking, and community features for skill enhancement.",
    category: ["Education", "Learning", "Community"],
    thumbnail: "/work/softskillsclub/website.png",
    thumbnailAlt: "Ismail Chabane - Project - Soft Skills Club - Educational platform for professional development",
    gallery: [
      "/work/softskillsclub/website.png"
    ],
    galleryAlt: [
      "Ismail Chabane - Project - Soft Skills Club - Learning platform interface with course progress tracking"
    ],
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-gray-300 h-4 w-4" /> },
      { name: "React", icon: <SiReact className="text-cyan-500 h-4 w-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 dark:text-blue-500 h-4 w-4" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 h-4 w-4" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700 h-4 w-4" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600 h-4 w-4" /> }
    ],
    links: {
      live: "https://softskillsclub.com",
      github: "https://github.com/yourusername/softskills-club"
    }
  },
  {
    id: "vote-moi",
    title: "Vote Moi",
    description: "Democratic voting platform with secure authentication, real-time results, and comprehensive audit trails for transparent elections.",
    category: ["Democracy", "Security", "Voting"],
    thumbnail: "/work/votemoi/website.png",
    thumbnailAlt: "Ismail Chabane - Project - Vote Moi - Democratic voting platform with secure authentication",
    gallery: [
      "/work/votemoi/website.png",
      "/work/votemoi/website2.png"
    ],
    galleryAlt: [
      "Ismail Chabane - Project - Vote Moi - Voting interface with real-time results and security features",
      "Ismail Chabane - Project - Vote Moi - Mobile responsive voting platform with audit trails"
    ],
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-gray-300 h-4 w-4" /> },
      { name: "React", icon: <SiReact className="text-cyan-500 h-4 w-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 dark:text-blue-500 h-4 w-4" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-600 h-4 w-4" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 dark:text-blue-300 h-4 w-4" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-600 h-4 w-4" /> }
    ],
    links: {
      live: "https://votemoi.com",
      github: "https://github.com/yourusername/vote-moi"
    }
  },
  {
    id: "pdf-orca",
    title: "PDF Orca",
    description: "Advanced PDF processing tool with OCR capabilities, document conversion, and batch processing features for document management workflows.",
    category: ["PDF", "OCR", "Automation"],
    thumbnail: "/work/pdforca/website.png",
    thumbnailAlt: "Ismail Chabane - Project - PDF Orca - Advanced PDF processing tool with OCR capabilities",
    gallery: [
      "/work/pdforca/website.png"
    ],
    galleryAlt: [
      "Ismail Chabane - Project - PDF Orca - Document processing interface with OCR and batch conversion features"
    ],
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-gray-300 h-4 w-4" /> },
      { name: "React", icon: <SiReact className="text-cyan-500 h-4 w-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 dark:text-blue-500 h-4 w-4" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600 h-4 w-4" /> },
      { name: "Python", icon: <SiFastapi className="text-green-500 h-4 w-4" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-600 h-4 w-4" /> }
    ],
    links: {
      live: "https://pdforca.com",
      github: "https://github.com/yourusername/pdf-orca"
    }
  }
]
