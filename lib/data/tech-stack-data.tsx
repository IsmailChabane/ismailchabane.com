import React from "react"
import {
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiSocketdotio,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiFramer,
  SiGreensock,
  SiJest,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiGithub,
  SiFigma,
  SiGit,
  SiPostman,
  SiEslint,
  SiPrettier,
  SiVite,
  SiStorybook,
  SiNotion,
  SiStripe,
  SiAppwrite,
  SiWebrtc,
  SiLemonsqueezy,
  SiTrpc,
  SiExpo,
  SiFlutter,
} from "react-icons/si"


import { MdMobileScreenShare } from "react-icons/md";


export interface TechSkill {
  icon: React.ReactNode | string
  name: string
  description: string
  optimize?: boolean
}

export interface TechCategory {
  id: string
  title: string
  skills: TechSkill[]
}

export const techCategories: TechCategory[] = [
  {
    id: "database",
    title: "DATABASE",
    skills: [
      {
        icon: <SiPostgresql className="text-blue-700 dark:text-blue-300 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "PostgreSQL",
        description: "Advanced relational database with JSON support"
      },
      {
        icon: <SiMongodb className="text-green-700 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "MongoDB",
        description: "Flexible NoSQL document database"
      },
      {
        icon: <SiMysql className="text-blue-600 dark:text-blue-300 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "MySQL",
        description: "Popular relational database"
      },
      {
        icon: <SiRedis className="text-red-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Redis",
        description: "In-memory data structure store"
      },
      {
        icon: <SiPrisma className="text-blue-800  dark:text-blue-300 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Prisma",
        description: "Next-generation ORM for Node.js"
      }
    ]
  },
  {
    id: "backend",
    title: "BACKEND",
    skills: [
      {
        icon: <SiNodedotjs className="text-green-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Node.js",
        description: "JavaScript runtime built on Chrome's V8"
      },
      {
        icon: <SiExpress className="text-gray-700 dark:text-gray-300 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Express",
        description: "Fast, minimalist web framework"
      },
      {
        icon: <SiFastapi className="text-green-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "FastAPI",
        description: "Modern Python web framework"
      },
      {
        icon: <SiTrpc className="text-blue-600 dark:text-blue-300 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "tRPC",
        description: "TypeScript-first API framework"
      }
    ]
  },
  {
    id: "frontend",
    title: "FRONTEND",
    skills: [
      {
        icon: <SiReact className="text-cyan-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "React",
        description: "Popular JavaScript library for UIs"
      },
      {
        icon: <SiNextdotjs className="text-gray-900 dark:text-gray-300 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Next.js",
        description: "Production-ready React framework"
      },
      {
        icon: <SiTypescript className="text-blue-600 dark:text-blue-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "TypeScript",
        description: "JavaScript with static type definitions"
      },
      {
        icon: <SiTailwindcss className="text-cyan-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Tailwind",
        description: "Utility-first CSS framework"
      },
      {
        icon: <SiJavascript className="text-yellow-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "JavaScript",
        description: "Dynamic programming language"
      },
      {
        icon: <SiFramer className="text-purple-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Framer",
        description: "Interactive design and prototyping"
      },
      {
        icon: <SiGreensock className="text-green-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "GSAP",
        description: "JavaScript animation library"
      }
    ]
  },
  {
    id: "testing",
    title: "TESTING",
    skills: [
      {
        icon: <SiJest className="text-red-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Jest",
        description: "JavaScript testing framework"
      }
    ]
  },
  {
    id: "devops-cloud",
    title: "DEVOPS & CLOUD",
    skills: [
      {
        icon: <SiDocker className="text-blue-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Docker",
        description: "Containerization platform"
      },
      {
        icon: <SiVercel className="text-black h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Vercel",
        description: "Frontend deployment platform"
      },
      {
        icon: <SiFirebase className="text-orange-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Firebase",
        description: "Google's app development platform"
      },
      {
        icon: <SiGithub className="text-gray-900 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "GitHub",
        description: "Git repository hosting service"
      },
      {
        icon: <SiDocker className="text-blue-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Dokploy",
        description: "Open Source Deployment platform"
      },
      {
        icon: <SiSupabase className="text-green-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Supabase",
        description: "Open source Firebase alternative"
      },
      {
        icon: <SiAppwrite className="text-pink-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Appwrite",
        description: "Open source backend server"
      }
    ]
  },
  {
    id: "tools",
    title: "TOOLS",
    skills: [
      {
        icon: <SiFigma className="text-purple-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Figma",
        description: "Collaborative design tool"
      },
      {
        icon: <SiGit className="text-orange-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Git",
        description: "Distributed version control"
      },
      {
        icon: <SiPostman className="text-orange-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Postman",
        description: "API development environment"
      },
      {
        icon: <SiEslint className="text-purple-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "ESLint",
        description: "JavaScript linting utility"
      },
      {
        icon: <SiPrettier className="text-pink-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Prettier",
        description: "Code formatter"
      },
      {
        icon: <SiVite className="text-purple-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Vite",
        description: "Fast build tool"
      },
      {
        icon: <SiStorybook className="text-pink-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Storybook",
        description: "Tool for building UI components"
      },
      {
        icon: <SiNotion className="text-black h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Notion",
        description: "All-in-one workspace"
      }
    ]
  },
  {
    id: "integrations",
    title: "INTEGRATIONS",
    skills: [
      {
        icon: <SiStripe className="text-purple-700 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Stripe",
        description: "Online payment processing"
      },
      {
        icon: <SiLemonsqueezy className="text-yellow-400 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Lemon squeezy",
        description: "Online payment processing"
      },
      {
        icon: <SiStripe className="text-black h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Onafriq",
        description: "Pan-African payments company"
      },
      {
        icon: <SiNextdotjs className="text-blue-600 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "NextAuth",
        description: "Authentication for Next.js"
      }
    ]
  },
  {
    id: "mobile",
    title: "MOBILE",
    skills: [
      {
        icon: <SiReact className="text-cyan-500 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "React Native",
        description: "Cross-platform mobile development"
      },
      {
        icon: <MdMobileScreenShare className="text-gray-900 dark:text-gray-300 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "PWA",
        description: "Progressive Web Applications"
      },
      {
        icon: <SiExpo className="text-gray-900 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6" />,
        name: "Expo",
        description: "React Native development platform"
      },
    ]
  }
]
