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
  gallery?: string[]
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
    gallery: [
      "/work/africkana/website.png",
      "/work/africkana/website2.png"
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
    gallery: [
      "/work/koraawards/website.png"
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
    gallery: [
      "/work/sofimedmaroc/website.png"
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
    gallery: [
      "/work/softskillsclub/website.png"
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
    gallery: [
      "/work/votemoi/website.png",
      "/work/votemoi/website2.png"
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
    gallery: [
      "/work/pdforca/website.png"
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
