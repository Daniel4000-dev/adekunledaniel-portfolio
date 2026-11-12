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
  const [activeFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "KOYI – Learning & Talent Marketplace",
      description:
        "Empowered thousands of learners to master new skills, hire vetted professionals, and collaborate with instructors in real time through a high-converting Next.js platform.",
      image: "/images/koyi.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      category: "EdTech & Marketplace",
      status: "Live in Production",
      period: "October 2024 - Present",
      features: [
        "High-conversion course discovery & enrollment",
        "Real-time instructor & client messaging",
        "Dynamic professional talent profiles",
        "Mobile-first responsive design",
        "Seamless role-based authentication",
      ],
      liveLink: "https://koyi.africa",
    },
    {
      id: 3,
      title: "Megawins – High-Concurrency Gaming Platform",
      description:
        "Engineered a fast, trusted gaming and instant-payout platform designed to handle peak traffic while keeping deposits, gameplay, and withdrawals frictionless.",
      image: "/images/megawins.png",
      technologies: ["React", "Tailwind CSS", "Payment APIs", "Multi-Factor Auth"],
      category: "Gaming & Fintech",
      status: "Live in Production",
      period: "April 2024 - March 2025",
      features: [
        "Instant wallet top-ups & automated payouts",
        "Real-time game history & live odds tracking",
        "Multi-factor authentication & account security",
        "Zero-lag modular UI components",
      ],
      liveLink: "https://megawins.com.ng/",
    },
    {
      id: 7,
      title: "AET Ads – Self-Serve AdTech & Analytics",
      description:
        "Built an intuitive advertising and campaign intelligence platform that helps brands launch targeted campaigns, monitor live ROI, and share executive reports in one click.",
      image: "/images/aet.png",
      technologies: ["React", "Next.js", "JavaScript", "Analytics", "AdTech"],
      category: "AdTech",
      status: "Live in Production",
      period: "March 2024 - January 2025",
      features: [
        "Live campaign ROI & performance tracking",
        "Interactive real-time analytics dashboards",
        "One-click shareable client reports",
        "Multi-channel ad network integration",
      ],
      liveLink: "https://ads.aet.ng/",
    },
    {
      id: 4,
      title: "OnionPay – Merchant Payment Suite",
      description:
        "Accelerated merchant collections by building one-click payment link generators, instant digital receipts, and real-time revenue settlement dashboards.",
      image: "/images/onionpay.png",
      technologies: ["React", "JavaScript", "Payment APIs", "Dashboard UI"],
      category: "Fintech",
      status: "Live in Production",
      period: "March 2023 - September 2023",
      features: [
        "Instant payment link generation",
        "Automated customer receipt engine",
        "Real-time transaction & settlement tracking",
        "Merchant cash-flow analytics dashboard",
      ],
      liveLink: "https://onionpay.io/",
    },
    {
      id: 8,
      title: "Kiiwii – Gamified Rewards Platform",
      description:
        "Drove daily user retention with an interactive Spin-to-Win rewards platform where users win instant vouchers for electricity, mobile data, and TV subscriptions.",
      image: "/images/kiiwii.png",
      technologies: ["React", "Gamification", "Rewards Engine", "Voucher APIs"],
      category: "Consumer Web App",
      status: "Live in Production",
      period: "2023",
      features: [
        "60fps interactive spinning wheel physics",
        "Instant utility, data & TV voucher redemption",
        "Daily streak mechanics for repeat engagement",
        "Frictionless 3-step onboarding flow",
      ],
      liveLink: "https://kiiwii.co",
    },
    {
      id: 9,
      title: "QuickCare – AI Doctor & Health Triage",
      description:
        "Made preliminary medical guidance accessible in under 3 minutes by combining interactive health quizzes, daily wellness rewards, and an AI-powered symptom assistant.",
      image: "/images/quickcare.png",
      technologies: ["React", "AI Integration", "Telehealth UX", "Gamification"],
      category: "HealthTech",
      status: "Live in Production",
      period: "2023",
      features: [
        "AI-powered symptom & medical insights assistant",
        "Interactive 3-minute health assessment quizzes",
        "Daily wellness engagement rewards",
        "Accessible, mobile-optimized patient interface",
      ],
      liveLink: "https://quickcare.ng",
    },
    {
      id: 10,
      title: "Click’d – Gamified Social Matchmaking",
      description:
        "Reimagined social discovery with a swipe-based matchmaking app featuring streak multipliers, probability boost engines, and instant airtime rewards.",
      image: "/images/clickd.png",
      technologies: ["React", "Interactive Gestures", "Matchmaking Engine", "Rewards API"],
      category: "Social & Consumer",
      status: "Live in Production",
      period: "2022 - 2023",
      features: [
        "Smooth touch-gesture swipe & match interface",
        "Swipe streak bonuses & reward multipliers",
        "Instant airtime payout integration",
        "Premium 'Who Liked Me' conversion flows",
      ],
      liveLink: "https://clickd.africa",
    },
    {
      id: 6,
      title: "OneWallet MFB – Digital Microfinance Banking",
      description:
        "Delivered a secure, community-centered digital banking and payments platform tailored for emerging African markets, complete with KYC verification and loyalty rewards.",
      image: "/images/onewallet.png",
      technologies: ["React", "JavaScript", "Payment Systems", "Multi-Factor Security"],
      category: "Fintech",
      status: "Live in Production",
      period: "January 2022 - August 2022",
      features: [
        "Fast KYC identity verification workflows",
        "Secure peer-to-peer & merchant payments",
        "Tailored community rewards engine",
        "Optimized for low-bandwidth mobile networks",
      ],
      liveLink: "https://www.onewalletweb.com/",
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-light pt-12 pb-16">
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
              Products Built to Convert &amp; Scale
            </motion.h1>
            <motion.h2
              className="mb-4 text-2xl font-semibold text-brand-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              5+ Years of Shipping Live Platforms Across Fintech, HealthTech, EdTech &amp; Consumer Web
            </motion.h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              Every project below solved a real business problem—turning complex workflows into fast, intuitive user
              experiences that drive adoption, retention, and revenue.
            </p>
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
                className="group rounded-xl bg-white p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div>
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="h-48 w-full object-fill transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={project.status === "Current Project" ? "default" : "secondary"}
                        className="bg-brand-blue text-white hover:bg-brand-blue-hover"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-brand-dark mb-1">{project.title}</h3>
                    <p className="text-sm text-brand-blue font-medium mb-2">{project.period}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-brand-dark mb-2">Impact &amp; Key Deliverables:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 px-3 bg-transparent text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white text-xs"
                        onClick={() => window.open(project.liveLink, "_blank")}
                      >
                        View Live <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </Button>
                    </div>
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
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">The Numbers Behind the Work</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Consistent delivery across 5+ years of building production web and mobile software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "10+", label: "Production Apps Shipped", icon: "🚀" },
              { number: "5+", label: "Industries Transformed", icon: "🏢" },
              { number: "5+", label: "Years Experience", icon: "⏱️" },
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
          <h2 className="mb-4 text-4xl font-bold">Want Results Like These for Your Product?</h2>
          <p className="mb-8 max-w-2xl text-gray-300 text-lg">
            Let&apos;s discuss your roadmap and how I can help you launch faster and convert more users.
          </p>
          <Button className="bg-brand-blue text-white hover:bg-brand-blue-hover px-6 py-6 text-base" onClick={handleHireMeClick}>
            Let&apos;s Build Together <ArrowUpRight className="ml-2 h-5 w-5" />
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
            <span>User Terms &amp; Conditions | Privacy Policy</span>
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
