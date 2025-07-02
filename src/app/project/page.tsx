"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, Github, ExternalLink, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Logo component inline
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white">
        <span className="font-bold">DA</span>
      </div>
      <span className="text-xl font-bold text-white">DANIEL</span>
    </Link>
  )
}

// Navbar component inline
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/resume", label: "Resume" },
    { href: "/project", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-black py-4",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative transition-colors hover:text-brand-blue",
                      isActive ? "text-brand-blue font-medium" : "text-white",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-brand-blue"
                        layoutId="navbar-underline"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 top-full w-full bg-black p-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav>
              <ul className="flex flex-col gap-6">
                {links.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "relative transition-colors hover:text-brand-blue",
                          isActive ? "text-brand-blue font-medium" : "text-white",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// Projects content inline
function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "KOYI - Online Learning Platform",
      description:
        "Comprehensive online learning platform enabling users to access courses, hire professionals, and engage with instructors through messaging system.",
      image: "/placeholder.svg?height=300&width=500&text=KOYI+Learning+Platform",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      category: "Web Application",
      status: "Current Project",
      period: "October 2024 - Present",
      features: [
        "Course management system",
        "Real-time messaging",
        "Professional profiles",
        "Responsive design",
        "User authentication",
      ],
    },
    {
      id: 2,
      title: "LukeHealth - Medical App",
      description:
        "Medical application for patient profiles, appointment booking, and health tracking with secure data storage.",
      image: "/placeholder.svg?height=300&width=500&text=LukeHealth+Medical+App",
      technologies: ["React Native", "Firebase", "TypeScript", "Healthcare APIs"],
      category: "Mobile Application",
      status: "Current Project",
      period: "November 2024 - Present",
      features: [
        "Patient profile management",
        "Appointment scheduling",
        "Health tracking",
        "Doctor monitoring system",
        "Secure data storage",
      ],
    },
    {
      id: 3,
      title: "Megawins - Gaming Platform",
      description:
        "Secure, community-focused gaming and transaction platform with payment processing and user profiles.",
      image: "/placeholder.svg?height=300&width=500&text=Megawins+Gaming+Platform",
      technologies: ["React", "Tailwind CSS", "Payment APIs", "Authentication"],
      category: "Web Application",
      status: "Completed",
      period: "September 2024 - March 2025",
      features: [
        "Game history tracking",
        "Secure payment systems",
        "Dynamic user profiles",
        "Multi-factor authentication",
        "Scalable UI components",
      ],
    },
    {
      id: 4,
      title: "OnionPay - Payment Platform",
      description:
        "User-friendly digital payment platform with payment links, receipt generation, and transaction management.",
      image: "/placeholder.svg?height=300&width=500&text=OnionPay+Payment+Platform",
      technologies: ["React", "JavaScript", "Payment APIs", "Dashboard UI"],
      category: "Fintech",
      status: "Completed",
      period: "September 2023 - December 2023",
      features: [
        "Payment link generation",
        "Receipt management",
        "Transaction tracking",
        "Dashboard analytics",
        "Mobile responsive design",
      ],
    },
    {
      id: 5,
      title: "MarcheSolution - School Management",
      description:
        "Large-scale school management platform with student progress tracking, ID card generation, and online exam creation.",
      image: "/placeholder.svg?height=300&width=500&text=MarcheSolution+School+Platform",
      technologies: ["React", "JavaScript", "APIs", "Educational Tools"],
      category: "Education",
      status: "Completed",
      period: "September 2023 - December 2023",
      features: [
        "Student progress tracking",
        "ID card generation",
        "Certificate creation",
        "Online exam system",
        "Analytics dashboard",
      ],
    },
    {
      id: 6,
      title: "OneWallet MFB - Digital Payment",
      description:
        "Secure, community-based digital payment platform for African local markets with rewards and identity verification.",
      image: "/placeholder.svg?height=300&width=500&text=OneWallet+MFB+Platform",
      technologies: ["React", "JavaScript", "Payment Systems", "Security"],
      category: "Fintech",
      status: "Completed",
      period: "January 2023 - October 2023",
      features: [
        "Tailored rewards system",
        "Secure payment processing",
        "Identity verification",
        "Multi-factor authentication",
        "Community features",
      ],
    },
    {
      id: 7,
      title: "EEC - Estate Website",
      description:
        "E-powered estate website with endpoint integration and optimized performance for real estate management.",
      image: "/placeholder.svg?height=300&width=500&text=EEC+Estate+Website",
      technologies: ["React", "JavaScript", "APIs", "Real Estate"],
      category: "Real Estate",
      status: "Completed",
      period: "February 2024 - June 2024",
      features: [
        "Property listings",
        "API integrations",
        "Performance optimization",
        "Responsive design",
        "User interface components",
      ],
    },
    {
      id: 8,
      title: "MOA Delivery - Food Delivery",
      description: "Modern food delivery website with intuitive ordering process and real-time tracking functionality.",
      image: "/placeholder.svg?height=300&width=500&text=MOA+Delivery+Platform",
      technologies: ["React", "JavaScript", "APIs", "Real-time Tracking"],
      category: "Food Delivery",
      status: "Completed",
      period: "February 2023 - May 2023",
      features: [
        "Intuitive ordering system",
        "Real-time tracking",
        "Dynamic menu updates",
        "User notifications",
        "Brand-aligned UI",
      ],
    },
  ]

  const categories = [
    "All",
    "Web Application",
    "Mobile Application",
    "Fintech",
    "Education",
    "Real Estate",
    "Food Delivery",
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-light pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1
              className="mb-6 text-5xl font-bold md:text-6xl text-brand-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              My Projects
            </motion.h1>
            <motion.h2
              className="mb-4 text-2xl font-semibold text-brand-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Adekunle Daniel Oluwaseyi
            </motion.h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              A showcase of my professional projects spanning fintech, healthcare, education, and gaming platforms. Each
              project demonstrates my expertise in modern frontend technologies and user-centered design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="container">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              >
                <Button
                  variant="outline"
                  className={`rounded-full ${
                    activeFilter === category
                      ? "bg-brand-blue text-white hover:bg-brand-blue/90 border-brand-blue"
                      : "bg-white border-gray-300 hover:border-brand-blue hover:text-brand-blue"
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group rounded-xl bg-white p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Current Project" ? "default" : "secondary"}
                      className={project.status === "Current Project" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{project.title}</h3>
                  <p className="text-sm text-brand-blue font-medium mb-2">{project.period}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-brand-dark mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-brand-blue rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-transparent">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-brand-dark text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Project Statistics</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              A summary of my professional project experience and achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "10+", label: "Projects Completed", icon: "🚀" },
              { number: "5", label: "Industries Served", icon: "🏢" },
              { number: "3+", label: "Years Experience", icon: "⏱️" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="mb-4 text-4xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.2 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  {stat.icon}
                </motion.div>
                <h3 className="mb-2 text-3xl font-bold text-brand-blue">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Footer component inline
function Footer() {
  const handleHireMeClick = () => {
    window.location.href = "/contact"
  }

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container py-16">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-4xl font-bold">Let&apos;s Work Together</h2>
          <Button className="bg-brand-blue text-white hover:bg-brand-blue-hover" onClick={handleHireMeClick}>
            Hire me <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <hr className="mb-12 border-gray-800" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Frontend Developer with 3+ years of experience specializing in React, Next.js, and modern web
              technologies. Based in Abuja, FCT.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/Daniel4000-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-brand-blue hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-adekunle-oluwaseyi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-brand-blue hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold text-brand-blue">Navigation</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/" className="hover:text-brand-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-blue">
                  About
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-brand-blue">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-brand-blue">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/project" className="hover:text-brand-blue">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-blue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold text-brand-blue">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="tel:08163752061" className="hover:text-brand-blue">
                  08163752061
                </a>
              </li>
              <li>
                <a href="mailto:dadekunle31@gmail.com" className="hover:text-brand-blue">
                  dadekunle31@gmail.com
                </a>
              </li>
              <li>
                <span>Abuja, Federal Capital Territory</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-12 border-gray-800" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400">Copyright© 2024 Adekunle Daniel Oluwaseyi. All Rights Reserved.</p>
          <div className="text-sm text-gray-400">
            <span>User Terms & Conditions | Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <ProjectsContent />
      </main>
      <Footer />
    </>
  )
}
