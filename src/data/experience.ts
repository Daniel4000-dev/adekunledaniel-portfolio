export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
  responsibilities: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: "koyi",
    title: "Frontend Developer",
    company: "KOYI",
    location: "Remote",
    startDate: "October 2024",
    endDate: "Present",
    current: true,
    description:
      "Collaborated with a team of developers to build a comprehensive online learning platform, enabling users to access courses, hire professionals, and engage with instructors through a messaging system.",
    responsibilities: [
      "Designed and developed user-friendly UI components for course listings, professional profiles, and messaging interfaces",
      "Integrated key functionalities including course loading, real-time messaging, and user profile management",
      "Optimized UI for responsiveness, ensuring the platform was fully accessible across multiple devices",
      "Worked on the overall design consistency, implementing clean and modern design elements",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
  },
  {
    id: "lukehealth",
    title: "Mobile Developer",
    company: "LukeHealth",
    location: "Remote",
    startDate: "November 2024",
    endDate: "Present",
    current: true,
    description:
      "Collaborated with a development team to create LukeHealth, a medical app designed for users to create personalized profiles, book appointments, and store essential health information.",
    responsibilities: [
      "Designed and implemented user interfaces for profile creation, appointment scheduling, and health tracking",
      "Integrated features allowing doctors to monitor patient health, including prescription tracking and dosage management",
      "Developed secure data storage systems to ensure sensitive health information is safely stored",
      "Optimized the app's usability, focusing on creating an intuitive flow for both patients and healthcare providers",
    ],
    technologies: ["React Native", "Firebase", "API Integration", "Mobile UI/UX"],
  },
  {
    id: "megawins",
    title: "Frontend Developer",
    company: "Megawins",
    location: "Remote",
    startDate: "September 2024",
    endDate: "March 2025",
    current: false,
    description:
      "Led UI/UX design for a secure, community-focused gaming and transaction platform, ensuring a seamless user experience across multiple devices.",
    responsibilities: [
      "Developed key web components for gaming functionalities, including game history tracking and secure payment systems",
      "Collaborated with backend teams to integrate secure payment processing and multi-factor authentication",
      "Optimized platform scalability using Tailwind CSS and modular UI elements",
      "Streamlined user interactions by designing intuitive navigation and dynamic feedback systems",
    ],
    technologies: ["React", "Tailwind CSS", "Payment APIs", "Security Integration"],
  },
  {
    id: "onionpay",
    title: "Frontend Developer",
    company: "OnionPay",
    location: "Remote",
    startDate: "September 2023",
    endDate: "December 2023",
    current: false,
    description:
      "Collaborated in the development of a user-friendly digital payment platform, focusing on enhancing the UI for seamless user interactions.",
    responsibilities: [
      "Designed and implemented UI components for key features such as payment links and receipt generation",
      "Optimized the dashboard layout, providing an intuitive interface for users to track payments",
      "Worked on improving user accessibility, integrating responsive design elements",
      "Contributed to the visual design, maintaining a consistent and engaging aesthetic across the app",
    ],
    technologies: ["React", "JavaScript", "CSS", "API Integration"],
  },
  {
    id: "eec",
    title: "Frontend Developer",
    company: "EEC",
    location: "Remote",
    startDate: "February 2024",
    endDate: "June 2024",
    current: false,
    description: "Collaborated with a team to develop an e-powered estate website.",
    responsibilities: [
      "Integrated endpoints and put logic from the Swagger documentation into practice",
      "Created visually beautiful and cohesive user interface (UI) components",
      "Optimized web pages for maximum speed and scalability",
    ],
    technologies: ["React", "Swagger API", "Performance Optimization"],
  },
  {
    id: "marchesolution",
    title: "Frontend Developer",
    company: "MarcheSolution",
    location: "Remote",
    startDate: "September 2023",
    endDate: "December 2023",
    current: false,
    description:
      "Collaborated with a frontend team to develop a large-scale school management platform with custom system integrations.",
    responsibilities: [
      "Designed and implemented multiple components for student progress analysis and ID card generation",
      "Ensured code quality and standard to ensure a clean and scalable codebase",
      "Integrated endpoints using proper documentation with Swagger",
      "Developed online exam creation functionality",
    ],
    technologies: ["React", "Component Library", "Swagger API", "School Management Systems"],
  },
  {
    id: "onewallet",
    title: "Frontend Developer",
    company: "OneWallet MFB",
    location: "Remote",
    startDate: "January 2023",
    endDate: "October 2023",
    current: false,
    description:
      "Collaborated with a team to develop a secure, community-based digital payment platform aimed at revolutionizing local markets in Africa.",
    responsibilities: [
      "Designed and implemented user-centric UI components for the OneWallet website",
      "Integrated endpoints and developed robust functionalities for tailored rewards and secure payment systems",
      "Optimized web pages for scalability and multi-factor authentication",
    ],
    technologies: ["React", "Security Features", "Multi-factor Auth", "Payment Systems"],
  },
  {
    id: "greenleaf",
    title: "Frontend Developer",
    company: "GreenLeaf",
    location: "Remote",
    startDate: "June 2023",
    endDate: "September 2023",
    current: false,
    description:
      "Built a responsive website for an organization to enhance their online presence and improve user engagement.",
    responsibilities: [
      "Designed custom UI components, ensuring a seamless user experience across devices",
      "Optimized website performance and integrated third-party APIs for additional functionality",
      "Conducted rigorous testing to ensure compatibility, security, and scalability",
    ],
    technologies: ["React", "Third-party APIs", "Performance Optimization", "Testing"],
  },
  {
    id: "moa-delivery",
    title: "Frontend Developer",
    company: "MOA Delivery",
    location: "Remote",
    startDate: "February 2023",
    endDate: "May 2023",
    current: false,
    description:
      "Developed a modern, user-friendly website for a food delivery franchise, featuring an intuitive ordering process and real-time tracking.",
    responsibilities: [
      "Implemented UI components aligned with the brand's identity, enhancing user retention",
      "Integrated API endpoints for dynamic menu updates, order placement, and user notifications",
      "Focused on responsive design and performance optimization for mobile and desktop platforms",
    ],
    technologies: ["React", "API Integration", "Real-time Features", "Food Delivery Systems"],
  },
]
