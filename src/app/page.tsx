"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  Menu,
  X,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Zap,
  TrendingUp,
  ShieldCheck,
  Layers,
} from "lucide-react"
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

  const handleHireMe = () => {
    window.location.href = "/contact"
  }

  const valuePillars = [
    {
      icon: Zap,
      title: "Launch Faster Without Tech Debt",
      description:
        "I transform complex product specs and Figma designs into clean, production-ready React, Next.js, and React Native code—helping your team hit aggressive launch deadlines with confidence.",
    },
    {
      icon: TrendingUp,
      title: "Turn Visitors Into Paying Users",
      description:
        "Every micro-interaction, checkout flow, and onboarding screen is engineered for speed and clarity—reducing drop-offs and maximizing user conversion and retention.",
    },
    {
      icon: ShieldCheck,
      title: "Fintech-Grade Security & Reliability",
      description:
        "With 5+ years building payment gateways, healthcare apps, and real-time dashboards, I build resilient frontends with bulletproof auth, smooth API state management, and zero-lag UX.",
    },
    {
      icon: Layers,
      title: "Scale Effortlessly as You Grow",
      description:
        "I architect modular component libraries and strict TypeScript codebases so your engineering team can ship new features 2x faster as your product and user base expand.",
    },
  ]

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
                Available to Ship Your Next Big Product • 5+ Years Experience
              </motion.div>

              <motion.h1
                className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-brand-dark leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
                  Daniel
                </span>{" "}
                — I Build Products Users Love.
              </motion.h1>

              <motion.h2
                className="mb-6 text-xl md:text-2xl font-semibold text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Senior Frontend Engineer • Helping Startups & Brands Ship Fast, High-Converting Web & Mobile Apps
              </motion.h2>

              <motion.p
                className="mb-8 text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Over the past <strong>5+ years</strong>, I&apos;ve helped ambitious companies across fintech,
                healthcare, edtech, adtech, and gaming turn complex ideas into blazing-fast, revenue-driving digital
                products. Whether you need to launch a category-defining MVP, revamp a sluggish interface to boost
                conversions, or scale your engineering team with React, Next.js, and TypeScript—I deliver interfaces
                that win hearts from the very first click.
              </motion.p>

              {/* Key Impact Metrics */}
              <motion.div
                className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-2xl bg-white/80 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-blue">5+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-blue">10+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Live Products Shipped</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-blue">100%</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">On-Time Delivery</div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button className="bg-brand-blue text-white hover:bg-brand-blue-hover px-6 py-6 text-base" onClick={handleHireMe}>
                  Let&apos;s Build Your Product
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={handleDownloadCV}
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white bg-transparent px-6 py-6 text-base"
                >
                  Download My CV
                  <Download className="ml-2 h-5 w-5" />
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
                  <span>Abuja, FCT (Open to Remote Worldwide)</span>
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
                  alt="Adekunle Daniel Oluwaseyi - Senior Frontend Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-6 right-6 rounded-lg bg-white/95 backdrop-blur-sm p-3 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="text-sm font-semibold text-brand-dark">5+ Years Experience</div>
                  <div className="text-xs text-brand-blue font-medium">Production-Proven Impact</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-20 left-6 rounded-lg bg-white/95 backdrop-blur-sm p-3 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  <div className="text-sm font-semibold text-brand-dark">React & Next.js</div>
                  <div className="text-xs text-gray-600">High-Converting Interfaces</div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-6 rounded-lg bg-white/95 backdrop-blur-sm p-3 shadow-lg"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                >
                  <div className="text-sm font-semibold text-brand-dark">TypeScript & Mobile</div>
                  <div className="text-xs text-gray-600">Scalable Architecture</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Can Help You Achieve Section */}
      <section className="py-16 md:py-24 bg-brand-dark text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="inline-block mb-3 rounded-full bg-brand-blue/20 px-4 py-1.5 text-sm font-semibold text-brand-blue">
              WHY TEAMS HIRE ME
            </span>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              What I Can Help You Achieve
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              You don&apos;t just need another developer writing code—you need an engineering partner obsessed with your
              product&apos;s speed, user retention, and business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  className="rounded-2xl bg-gray-800/80 border border-gray-700 p-8 hover:border-brand-blue transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
                </motion.div>
              )
            })}
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
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brand-dark">
              The Toolkit Behind Your Next Product
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              5+ years of battle-tested mastery across modern frontend frameworks, state management, and cross-platform
              technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", level: "Expert" },
              { name: "Next.js", level: "Expert" },
              { name: "TypeScript", level: "Advanced" },
              { name: "JavaScript (ES6+)", level: "Expert" },
              { name: "React Native", level: "Advanced" },
              { name: "Tailwind CSS", level: "Expert" },
              { name: "Shadcn UI", level: "Expert" },
              { name: "Framer Motion", level: "Advanced" },
              { name: "Redux Toolkit", level: "Advanced" },
              { name: "Zustand", level: "Advanced" },
              { name: "Chakra UI", level: "Proficient" },
              { name: "HTML5 / CSS3", level: "Expert" },
              { name: "Firebase", level: "Advanced" },
              { name: "REST & GraphQL APIs", level: "Expert" },
              { name: "MongoDB", level: "Proficient" },
              { name: "Git & CI/CD", level: "Advanced" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="rounded-xl bg-gray-50 p-4 text-center hover:bg-brand-blue/5 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="font-semibold text-brand-dark mb-1">{skill.name}</div>
                <div className="text-xs text-brand-blue font-medium">{skill.level}</div>
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
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brand-dark">Proven Results in Production</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Real products engineered to solve business bottlenecks, delight users, and scale across markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "KOYI Learning & Talent Platform",
                description:
                  "Empowered thousands of learners and professionals to connect, book courses, and collaborate via real-time messaging with a fast, conversion-focused Next.js experience.",
                tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                status: "Live in Production",
              },
              {
                title: "LukeHealth Medical App",
                description:
                  "Bridged the gap between patients and doctors with instant appointment booking, dosage tracking, and real-time clinician monitoring on mobile.",
                tech: ["React Native", "Firebase", "API Integration"],
                status: "Current Project",
              },
              {
                title: "Megawins Gaming Platform",
                description:
                  "Engineered a high-concurrency gaming and instant-payout platform with multi-factor security that boosted player trust and transaction completion.",
                tech: ["React", "Tailwind CSS", "Payment APIs"],
                status: "Live in Production",
              },
              {
                title: "OnionPay Digital Payment Suite",
                description:
                  "Simplified merchant collections with one-click payment links, automated receipts, and real-time revenue analytics dashboards.",
                tech: ["React", "JavaScript", "Payment APIs"],
                status: "Live in Production",
              },
              {
                title: "AET Ads – AdTech Analytics",
                description:
                  "Built an intuitive self-serve advertising and live campaign analytics platform that helps brands track ROI and scale ad spend effortlessly.",
                tech: ["React", "Next.js", "Analytics", "AdTech"],
                status: "Live in Production",
              },
              {
                title: "OneWallet MFB Platform",
                description:
                  "Delivered a secure, community-driven digital banking and rewards platform optimized for fast performance across African markets.",
                tech: ["React", "Security Features", "Multi-factor Auth"],
                status: "Live in Production",
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
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === "Current Project"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-dark">{project.title}</h3>
                <p className="mb-4 text-muted-foreground text-sm leading-relaxed">{project.description}</p>
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
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/project">
              <Button className="bg-brand-blue text-white hover:bg-brand-blue-hover px-6 py-6 text-base">
                Explore All Live Projects & Case Studies
                <ArrowUpRight className="ml-2 h-5 w-5" />
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
          <h2 className="mb-4 text-4xl font-bold">Ready to Build Something Users Will Love?</h2>
          <p className="mb-8 max-w-2xl text-gray-300 text-lg">
            Let&apos;s turn your product vision into a fast, scalable, and high-converting reality.
          </p>
          <Button className="bg-brand-blue text-white hover:bg-brand-blue-hover px-6 py-6 text-base" onClick={handleHireMeClick}>
            Start a Conversation <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <hr className="mb-12 border-gray-800" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Senior Frontend Engineer with 5+ years of experience helping startups and enterprises ship high-converting
              web and mobile products with React, Next.js, and TypeScript.
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
          <p className="text-sm text-gray-400">Copyright© 2026 Adekunle Daniel Oluwaseyi. All Rights Reserved.</p>
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
