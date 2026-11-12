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
    title: "Senior Frontend Engineer",
    company: "KOYI",
    location: "Remote",
    startDate: "October 2024",
    endDate: "Present",
    current: true,
    description:
      "Spearheading frontend architecture for an all-in-one learning and talent marketplace—enabling thousands of learners to master new skills, hire vetted professionals, and collaborate with instructors in real time.",
    responsibilities: [
      "Architected high-converting, responsive interfaces for course discovery, professional talent profiles, and real-time instructor messaging",
      "Engineered seamless state management and API integrations that cut page load times and keep learners engaged across devices",
      "Established a reusable component system in React, Next.js, and TypeScript to accelerate feature delivery across the engineering team",
      "Optimized core user journeys from onboarding to checkout, driving higher course completion and booking rates",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
  },
  {
    id: "lukehealth",
    title: "Mobile & Frontend Engineer",
    company: "LukeHealth",
    location: "Remote",
    startDate: "November 2024",
    endDate: "Present",
    current: true,
    description:
      "Building a patient-first digital healthcare mobile application that simplifies appointment booking, prescription tracking, and real-time doctor-patient monitoring.",
    responsibilities: [
      "Designed and shipped frictionless mobile workflows for patient onboarding, instant appointment scheduling, and daily health tracking",
      "Built clinician dashboards enabling doctors to monitor patient vitals, manage prescriptions, and track dosage adherence in real time",
      "Implemented encrypted local and cloud data flows to safeguard sensitive patient records and medical histories",
      "Refined mobile UX for low-latency performance and accessibility across iOS and Android devices",
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "API Integration", "Mobile UI/UX"],
  },
  {
    id: "megawins",
    title: "Lead Frontend Developer",
    company: "Megawins",
    location: "Remote",
    startDate: "April 2024",
    endDate: "March 2025",
    current: false,
    description:
      "Led frontend engineering and UI/UX execution for a high-traffic gaming and real-time transaction platform built for speed, trust, and player retention.",
    responsibilities: [
      "Engineered real-time game play views, live transaction history, and instant wallet top-up/payout workflows",
      "Collaborated with backend teams to integrate multi-factor authentication and bulletproof payment gateway flows",
      "Built a modular Tailwind CSS design system that kept the interface ultra-responsive even during peak traffic spikes",
      "Reduced user drop-off during deposits and withdrawals by streamlining navigation and adding instant visual feedback",
    ],
    technologies: ["React", "Tailwind CSS", "Payment APIs", "Multi-Factor Auth"],
  },
  {
    id: "eec",
    title: "Frontend Developer",
    company: "EEC",
    location: "Remote",
    startDate: "September 2023",
    endDate: "March 2024",
    current: false,
    description:
      "Delivered a modern real-estate and property management platform designed to convert property browsers into qualified buyers and tenants.",
    responsibilities: [
      "Translated complex Swagger API specifications into fast, interactive property search, filtering, and booking workflows",
      "Crafted polished, mobile-first property showcase components that elevated brand trust and buyer engagement",
      "Optimized asset loading and rendering performance for rapid page transitions across desktop and mobile",
    ],
    technologies: ["React", "Swagger API", "Performance Optimization"],
  },
  {
    id: "onionpay",
    title: "Frontend Developer",
    company: "OnionPay",
    location: "Remote",
    startDate: "March 2023",
    endDate: "September 2023",
    current: false,
    description:
      "Built merchant-facing payment tools and analytics dashboards for a digital payment platform—helping businesses accept payments faster and track revenue effortlessly.",
    responsibilities: [
      "Developed one-click payment link generators, automated receipt views, and real-time transaction monitoring tables",
      "Redesigned the merchant analytics dashboard so business owners could visualize cash flow and settlement status at a glance",
      "Improved cross-device accessibility and mobile checkout responsiveness to boost completed payment conversions",
    ],
    technologies: ["React", "JavaScript", "CSS", "Payment APIs"],
  },
  {
    id: "marchesolution",
    title: "Frontend Developer",
    company: "MarcheSolution",
    location: "Remote",
    startDate: "August 2022",
    endDate: "February 2023",
    current: false,
    description:
      "Engineered core modules for an enterprise school management platform—automating academic reporting, digital ID generation, and online examinations.",
    responsibilities: [
      "Built interactive dashboards for student performance analytics, automated report cards, and batch ID card generation",
      "Developed a distraction-free online examination portal with live timers and auto-save reliability",
      "Integrated RESTful endpoints via Swagger documentation while enforcing strict code quality and component reusability",
    ],
    technologies: ["React", "Component Library", "Swagger API", "EdTech Systems"],
  },
  {
    id: "onewallet",
    title: "Frontend Developer",
    company: "OneWallet MFB",
    location: "Remote",
    startDate: "January 2022",
    endDate: "August 2022",
    current: false,
    description:
      "Helped build and scale a community-driven microfinance and digital payments platform tailored for emerging African markets.",
    responsibilities: [
      "Created intuitive onboarding, KYC verification, and wallet management interfaces that built immediate user trust",
      "Integrated loyalty rewards, peer-to-peer transfers, and multi-factor security workflows",
      "Optimized frontend bundle sizes and rendering speed so the platform performed reliably even on 3G mobile networks",
    ],
    technologies: ["React", "Security Features", "Multi-factor Auth", "Fintech Systems"],
  },
  {
    id: "greenleaf",
    title: "Frontend Developer",
    company: "GreenLeaf",
    location: "Remote",
    startDate: "July 2021",
    endDate: "December 2021",
    current: false,
    description:
      "Designed and delivered a high-converting web presence and client portal that modernized the organization's digital outreach and customer engagement.",
    responsibilities: [
      "Built custom, brand-aligned UI components with smooth animations and mobile-first responsiveness",
      "Integrated third-party CRM and communication APIs to automate lead capture and client inquiries",
      "Conducted cross-browser and performance testing to guarantee fast load times and high SEO scores",
    ],
    technologies: ["React", "Third-party APIs", "Performance Optimization", "Responsive UI"],
  },
  {
    id: "moa-delivery",
    title: "Frontend Web Developer",
    company: "MOA Delivery",
    location: "Remote",
    startDate: "January 2021",
    endDate: "June 2021",
    current: false,
    description:
      "Launched a fast, appetite-appealing web ordering and real-time delivery tracking platform for a growing food delivery franchise.",
    responsibilities: [
      "Built an intuitive menu browsing, cart customization, and 3-step checkout flow that increased completed orders",
      "Integrated live order status updates, dynamic menu availability, and customer notification triggers",
      "Engineered mobile-first layouts tailored for on-the-go customers ordering from smartphones",
    ],
    technologies: ["React", "JavaScript", "API Integration", "Real-time Tracking"],
  },
]
