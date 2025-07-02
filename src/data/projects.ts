export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: "Web App" | "Mobile App" | "Website" | "E-commerce" | "Dashboard"
  status: "Completed" | "In Progress" | "Planned"
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  year: number
}

export const projects: Project[] = [
  {
    id: "koyi-platform",
    title: "KOYI Learning Platform",
    description:
      "Comprehensive online learning platform with course management, messaging system, and professional profiles.",
    longDescription:
      "A full-featured online learning platform that enables users to access courses, hire professionals, and engage with instructors through an integrated messaging system. Built with modern React architecture and responsive design principles.",
    image: "/images/portfolio-1.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
    category: "Web App",
    status: "In Progress",
    featured: true,
    year: 2024,
  },
  {
    id: "lukehealth-app",
    title: "LukeHealth Medical App",
    description:
      "Medical app for patient profiles, appointment booking, and health tracking with doctor monitoring features.",
    longDescription:
      "A comprehensive medical application designed for patients to create personalized profiles, book appointments, and store essential health information. Includes features for doctors to monitor patient health and manage prescriptions.",
    image: "/images/portfolio-2.png",
    technologies: ["React Native", "Firebase", "API Integration", "Mobile UI/UX"],
    category: "Mobile App",
    status: "In Progress",
    featured: true,
    year: 2024,
  },
  {
    id: "megawins-platform",
    title: "Megawins Gaming Platform",
    description: "Secure gaming and transaction platform with payment processing and multi-factor authentication.",
    longDescription:
      "A secure, community-focused gaming and transaction platform with comprehensive payment processing, multi-factor authentication, and scalable architecture designed for high-traffic events.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Tailwind CSS", "Payment APIs", "Security Integration"],
    category: "Web App",
    status: "Completed",
    featured: true,
    year: 2024,
  },
  {
    id: "onionpay-platform",
    title: "OnionPay Digital Platform",
    description:
      "User-friendly digital payment platform with payment links, receipt generation, and transaction management.",
    longDescription:
      "A comprehensive digital payment platform focused on providing seamless user interactions with features like payment links, receipt generation, and intuitive transaction management dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "JavaScript", "CSS", "API Integration"],
    category: "Web App",
    status: "Completed",
    featured: false,
    year: 2023,
  },
  {
    id: "marchesolution-school",
    title: "MarcheSolution School Management",
    description:
      "Large-scale school management platform with student progress tracking, ID generation, and online exams.",
    longDescription:
      "A comprehensive school management platform with custom system integrations including student progress analysis, ID card and certificate generation, and online exam creation functionality.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Component Library", "Swagger API", "School Management Systems"],
    category: "Dashboard",
    status: "Completed",
    featured: false,
    year: 2023,
  },
  {
    id: "onewallet-platform",
    title: "OneWallet MFB Platform",
    description: "Secure digital payment platform for African markets with rewards system and identity verification.",
    longDescription:
      "A secure, community-based digital payment platform aimed at revolutionizing local markets in Africa, featuring tailored rewards, secure payment systems, and comprehensive identity verification.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Security Features", "Multi-factor Auth", "Payment Systems"],
    category: "Web App",
    status: "Completed",
    featured: false,
    year: 2023,
  },
]

export const projectCategories = ["All", "Web App", "Mobile App", "Website", "E-commerce", "Dashboard"] as const
