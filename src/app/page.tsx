"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, Download, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
    // { href: "/service", label: "Services" },
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

// Home content inline
function HomeContent() {
  const handleDownloadCV = () => {
    const path = "/Adekunle_Daniel_Oluwaseyi_CV.pdf"
    const a = document.createElement("a")
    a.href = path
    a.download = "Adekunle_Daniel_Oluwaseyi_CV.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  // const handleContactMe = () => {
  //   window.location.href = "/contact"
  // }

  const handleHireMe = () => {
    window.location.href = "/contact"
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-light pt-12 pb-16 min-h-screen flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <motion.div
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-medium text-brand-blue"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue"></span>
                </span>
                Available for new opportunities
              </motion.div>

              <motion.h1
                className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl text-brand-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
                  Daniel
                </span>
              </motion.h1>

              <motion.h2
                className="mb-6 text-2xl md:text-3xl font-semibold text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Frontend Developer
              </motion.h2>

              <motion.p
                className="mb-8 text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Self-motivated and enthusiastic frontend developer with hands-on experience designing appealing user
                experiences. Proficient in React, Next.js, and modern web technologies, committed to creating visually
                attractive and responsive websites.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button className="bg-brand-blue text-white hover:bg-brand-blue-hover" onClick={handleHireMe}>
                  Hire Me
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={handleDownloadCV}
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white bg-transparent"
                >
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="flex flex-wrap gap-6 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-blue" />
                  <a href="mailto:dadekunle31@gmail.com" className="hover:text-brand-blue">
                    dadekunle31@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-blue" />
                  <a href="tel:08163752061" className="hover:text-brand-blue">
                    08163752061
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-blue" />
                  <span>Abuja, FCT</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a
                  href="https://github.com/Daniel4000-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-adekunle-oluwaseyi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[600px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue/20 to-blue-600/20">
                <Image
                  src="/images/profile-pic.jpg"
                  // /placeholder.svg?height=600&width=500&text=Daniel+Adekunle
                  alt="Adekunle Daniel Oluwaseyi - Frontend Developer"
                  // height={1000}
                  // width={1000}
                 fill
                 className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-6 right-6 rounded-lg bg-white/90 backdrop-blur-sm p-3 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="text-sm font-semibold text-brand-dark">React.js</div>
                  <div className="text-xs text-gray-600">Expert Level</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-20 left-6 rounded-lg bg-white/90 backdrop-blur-sm p-3 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  <div className="text-sm font-semibold text-brand-dark">Next.js</div>
                  <div className="text-xs text-gray-600">Advanced</div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-6 rounded-lg bg-white/90 backdrop-blur-sm p-3 shadow-lg"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                >
                  <div className="text-sm font-semibold text-brand-dark">TypeScript</div>
                  <div className="text-xs text-gray-600">Proficient</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brand-dark">Technical Skills</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Proficient in modern web technologies and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", level: "Expert" },
              { name: "Next.js", level: "Advanced" },
              { name: "TypeScript", level: "Proficient" },
              { name: "JavaScript", level: "Expert" },
              { name: "Tailwind CSS", level: "Expert" },
              { name: "Chakra UI", level: "Proficient" },
              { name: "Framer Motion", level: "Proficient" },
              { name: "HTML/CSS", level: "Expert" },
              { name: "Firebase", level: "Proficient" },
              { name: "MongoDB", level: "Intermediate" },
              { name: "Python", level: "Intermediate" },
              { name: "Shadcn UI", level: "Expert" },
              { name: "Redux Toolkit", level: "Proficient" },
              { name: "Zustand", level: "Proficient" },
              { name: "Git", level: "Proficient" },
              { name: "API Integration", level: "Advanced" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="rounded-xl bg-gray-50 p-4 text-center hover:bg-brand-blue/5 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="font-semibold text-brand-dark mb-1">{skill.name}</div>
                <div className="text-xs text-brand-blue">{skill.level}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brand-dark">Recent Projects</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Some of the projects I&apos;ve worked on recently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "KOYI Learning Platform",
                description:
                  "Comprehensive online learning platform with course management, messaging system, and professional profiles.",
                tech: ["React", "Next.js", "TypeScript"],
                status: "Completed",
              },
              {
                title: "LukeHealth Medical App",
                description:
                  "Medical app for patient profiles, appointment booking, and health tracking with doctor monitoring features.",
                tech: ["React Native", "Firebase", "API Integration"],
                status: "In Development",
              },
              {
                title: "Megawins Gaming Platform",
                description:
                  "Secure gaming and transaction platform with payment processing and multi-factor authentication.",
                tech: ["React", "Tailwind CSS", "Payment APIs"],
                status: "Completed",
              },
              {
                title: "OnionPay Digital Platform",
                description:
                  "User-friendly digital payment platform with payment links, receipt generation, and transaction management.",
                tech: ["React", "JavaScript", "API Integration"],
                status: "Completed",
              },
              {
                title: "MarcheSolution School Management",
                description:
                  "Large-scale school management platform with student progress tracking, ID generation, and online exams.",
                tech: ["React", "Swagger API", "Component Library"],
                status: "Completed",
              },
              {
                title: "OneWallet MFB Platform",
                description:
                  "Secure digital payment platform for African markets with rewards system and identity verification.",
                tech: ["React", "Security Features", "Multi-factor Auth"],
                status: "Completed",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-3">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${
                      project.status === "Current Project"
                        ? "bg-green-100 text-green-800"
                        : project.status === "In Development"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-dark">{project.title}</h3>
                <p className="mb-4 text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-brand-blue/10 text-brand-blue rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/project">
              <Button className="bg-brand-blue text-white hover:bg-brand-blue-hover">
                {/* View All Projects */}
                View Some Live Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
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
              Frontend Developer specializing in React, Next.js, and modern web technologies. Based in Abuja, FCT.
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
              {/* <li>
                <Link href="/service" className="hover:text-brand-blue">
                  Services
                </Link>
              </li> */}
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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <HomeContent />
      </main>
      <Footer />
    </>
  )
}
