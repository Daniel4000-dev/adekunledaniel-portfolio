export interface Skill {
  id: string
  name: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Other"
  icon?: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  price?: string
}

export const skills: Skill[] = [
  // Frontend
  { id: "react", name: "React", level: "Expert", category: "Frontend" },
  { id: "nextjs", name: "Next.js", level: "Advanced", category: "Frontend" },
  { id: "typescript", name: "TypeScript", level: "Advanced", category: "Frontend" },
  { id: "javascript", name: "JavaScript", level: "Expert", category: "Frontend" },
  { id: "html", name: "HTML/CSS", level: "Expert", category: "Frontend" },
  { id: "tailwind", name: "Tailwind CSS", level: "Expert", category: "Frontend" },
  { id: "shadcn", name: "Shadcn UI", level: "Expert", category: "Frontend" },
  { id: "react-native", name: "React Native", level: "Intermediate", category: "Frontend" },

  // Backend & Database
  { id: "python", name: "Python", level: "Intermediate", category: "Backend" },
  { id: "firebase", name: "Firebase", level: "Advanced", category: "Database" },
  { id: "firestore", name: "Firestore", level: "Advanced", category: "Database" },
  { id: "mongodb", name: "MongoDB", level: "Intermediate", category: "Database" },

  // Tools
  { id: "git", name: "Git", level: "Advanced", category: "Tools" },
  { id: "api", name: "API Integration", level: "Advanced", category: "Tools" },
  { id: "swagger", name: "Swagger", level: "Intermediate", category: "Tools" },
]

export const services: Service[] = [
  {
    id: "react-development",
    title: "React Development",
    description: "Build modern, interactive web applications using React and its ecosystem.",
    features: [
      "Custom React components",
      "State management with Redux/Context",
      "Performance optimization",
      "Testing and debugging",
      "Responsive design implementation",
    ],
    icon: "Code",
    price: "Starting from $500",
  },
  {
    id: "nextjs-applications",
    title: "Next.js Applications",
    description: "Full-stack web applications with server-side rendering and optimal performance.",
    features: [
      "Server-side rendering (SSR)",
      "Static site generation (SSG)",
      "API routes development",
      "SEO optimization",
      "Performance monitoring",
    ],
    icon: "Globe",
    price: "Starting from $800",
  },
  {
    id: "responsive-design",
    title: "Responsive Web Design",
    description: "Create beautiful, mobile-first designs that work perfectly on all devices.",
    features: [
      "Mobile-first approach",
      "Cross-browser compatibility",
      "Accessibility compliance",
      "Modern CSS techniques",
      "UI/UX best practices",
    ],
    icon: "Smartphone",
    price: "Starting from $300",
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: "Seamlessly connect your frontend with backend services and third-party APIs.",
    features: [
      "RESTful API integration",
      "Authentication implementation",
      "Data fetching optimization",
      "Error handling",
      "Real-time data updates",
    ],
    icon: "Database",
    price: "Starting from $400",
  },
]
