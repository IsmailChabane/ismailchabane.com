import type { ExperienceItemType } from "@/features/home/components/experience/work-experience";

export const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "sofimed",
    companyName: "Sofimed Maroc",
    companyLogo: "/work/sofimedmaroc/logo.png", // Will be provided later
    positions: [
      {
        id: "ai-software-engineering-internship",
        title: "AI Software Engineering",
        employmentPeriod: "02.2025 — 08.2025 (6 months)",
        employmentType: "Internship",
        icon: "code",
        description: `- Engineered AI recommendation system using LangGraph with custom prompt engineering and vector embeddings for pump selection optimization
- Architected Next.js 15/TypeScript frontend with Supabase PostgreSQL database, Redis caching layer, and optimized API endpoints for sub-200ms response times
- Built comprehensive admin dashboard for product management, custom prompt configuration, and AI model fine-tuning with role-based access control
- Developed RESTful internal support ticket system with JWT authentication, real-time notifications, and automated reporting using cron jobs
- Created separate analytics dashboard with real-time metrics, user behavior tracking, and AI recommendation performance analytics`,
        skills: [
          { name: "Next.js", icon: "SiNextdotjs" },
          { name: "TypeScript", icon: "SiTypescript" },
          { name: "Supabase", icon: "SiSupabase" },
          { name: "Redis", icon: "SiRedis" },
          { name: "LangGraph", icon: "SiOpenai" },
          { name: "Flask", icon: "SiFlask" },
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "kora-awards",
    companyName: "Kora Awards",
    companyLogo: "/work/koraawards/logo.png", // Will be provided later
    positions: [
      {
        id: "software-developer-freelance-kora",
        title: "Software Developer",
        employmentPeriod: "09.2024 — 11.2024 (3 months)",
        employmentType: "Freelance",
        icon: "code",
        description: `- Built scalable online voting platform with microservices architecture, implementing secure payment processing through multiple gateways (Onafriq, Ngenius, Pvit) with webhook validation and transaction logging
- Developed comprehensive admin dashboard for event management, nominee creation, payment gateway activation/deactivation, and real-time voting monitoring
- Engineered real-time analytics dashboard using React hooks, Firebase Firestore with offline persistence, and WebSocket connections for live transaction monitoring and performance metrics
- Configured CI/CD pipeline with GitHub Actions, automated testing, and deployment to private VPS using Docker containers with Nginx reverse proxy and SSL termination`,
        skills: [
          { name: "Next.js", icon: "SiNextdotjs" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
          { name: "Express.js", icon: "SiExpress" },
          { name: "Docker", icon: "SiDocker" },
          { name: "Umami", icon: "SiGoogleanalytics" },
          { name: "Firebase", icon: "SiFirebase" },
          { name: "React", icon: "SiReact" },
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "africkana",
    companyName: "Africkana",
    companyLogo: "/work/africkana/logo.png", // Will be provided later
    positions: [
      {
        id: "software-developer-freelance-africkana",
        title: "Software Developer",
        employmentPeriod: "08.2023 — 10.2023 (3 months)",
        employmentType: "Freelance",
        icon: "code",
        description: `- Developed progressive web app (PWA) with service workers for offline streaming, implementing Web Audio API for audio playback and custom audio controls with waveform visualization
- Built comprehensive admin dashboard for content management, playlist creation/editing, user management, and radio station configuration with role-based permissions
- Built responsive design system using CSS Grid, Flexbox, and media queries with mobile-first approach, ensuring 95+ Lighthouse performance scores across all devices
- Engineered ad management system with dynamic ad insertion (DAI), MP3 streaming optimization, and automated banner rotation using Intersection Observer API for viewability tracking
- Created separate analytics dashboard for listener metrics, content performance tracking, and advertising revenue analytics`,
        skills: [
          { name: "Next.js", icon: "SiNextdotjs" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
          { name: "Google Analytics", icon: "SiGoogleanalytics" },
          { name: "PWA", icon: "SiPwa" },
          { name: "React", icon: "SiReact" },
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
];
