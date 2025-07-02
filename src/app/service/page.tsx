"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, Code, Globe, Smartphone, Database, Zap, Monitor, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

// Logo component inline
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white">
        <span className="font-bold">D</span>
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

// Service content inline
function ServiceContent() {
  const services = [
    {
      title: "React Development",
      description: "Building modern, interactive user interfaces with React.js and its ecosystem.",
      icon: <Code className="h-10 w-10" />,
      features: [
        "Component-based Architecture",
        "State Management (Redux/Zustand)",
        "React Hooks & Context API",
        "Performance Optimization",
        "Testing with Jest & RTL",
      ],
    },
    {
      title: "Next.js Applications",
      description: "Full-stack web applications with server-side rendering, API routes, and optimal performance.",
      icon: <Globe className="h-10 w-10" />,
      features: [
        "Server-Side Rendering",
        "API Routes",
        "Static Site Generation",
        "Image Optimization",
        "SEO Optimization",
      ],
    },
    {
      title: "Responsive Web Design",
      description: "Creating beautiful, mobile-first designs that work perfectly across all devices.",
      icon: <Smartphone className="h-10 w-10" />,
      features: [
        "Mobile-First Approach",
        "Cross-Browser Compatibility",
        "CSS Grid & Flexbox",
        "Tailwind CSS",
        "Progressive Web Apps",
      ],
    },
    {
      title: "Frontend Architecture",
      description: "Designing scalable frontend architectures for large-scale applications.",
      icon: <Database className="h-10 w-10" />,
      features: ["Micro-frontends", "Code Splitting", "Bundle Optimization", "Design Systems", "Documentation"],
    },
    {
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, accessibility, and user experience.",
      icon: <Zap className="h-10 w-10" />,
      features: ["Core Web Vitals", "Lazy Loading", "Code Splitting", "Caching Strategies", "Lighthouse Optimization"],
    },
    {
      title: "Frontend Consulting",
      description: "Providing expert guidance on frontend technologies, architecture, and best practices.",
      icon: <Monitor className="h-10 w-10" />,
      features: ["Code Reviews", "Architecture Planning", "Team Training", "Technology Selection", "Best Practices"],
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Requirements Analysis",
      description:
        "I start by understanding your project requirements, target audience, and business goals to create the perfect solution.",
    },
    {
      number: "02",
      title: "Technical Planning",
      description:
        "Based on requirements, I plan the technical architecture, choose the right technologies, and create a development roadmap.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "I build your application using modern frontend technologies, following best practices for clean, maintainable code.",
    },
    {
      number: "04",
      title: "Testing & QA",
      description:
        "Comprehensive testing including unit tests, integration tests, and cross-browser compatibility testing.",
    },
    {
      number: "05",
      title: "Deployment",
      description: "I deploy your application to production with proper CI/CD pipelines and monitoring setup.",
    },
    {
      number: "06",
      title: "Maintenance",
      description:
        "Ongoing support, updates, and performance monitoring to ensure your application stays current and optimized.",
    },
  ]

  const pricingPlans = [
    {
      title: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups looking to establish their web presence.",
      features: [
        "React.js Application (up to 5 pages)",
        "Responsive Design",
        "Basic SEO Setup",
        "2 Rounds of Revisions",
        "Source Code Included",
        "2 Weeks Delivery",
      ],
      isPopular: false,
    },
    {
      title: "Professional",
      price: "$5,999",
      description: "Ideal for growing businesses that need comprehensive web solutions.",
      features: [
        "Next.js Full-Stack Application",
        "Advanced State Management",
        "API Integration",
        "Performance Optimization",
        "3 Rounds of Revisions",
        "Testing Suite",
        "3 Weeks Delivery",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "$9,999+",
      description: "For large-scale applications requiring complex architecture and custom solutions.",
      features: [
        "Custom Frontend Architecture",
        "Micro-frontend Setup",
        "Advanced Performance Optimization",
        "Comprehensive Testing",
        "CI/CD Pipeline Setup",
        "Team Training",
        "Ongoing Support",
        "4-6 Weeks Delivery",
      ],
      isPopular: false,
    },
  ]

  const handleGetStarted = () => {
    window.location.href = "/contact"
  }

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
              My Services
            </motion.h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              I offer comprehensive frontend development services to help businesses create exceptional web experiences
              that engage users and drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="mb-4 inline-flex rounded-full bg-brand-blue/10 p-3 text-brand-blue"
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
                  {service.icon}
                </motion.div>
                <h3 className="mb-2 text-xl font-bold text-brand-dark">{service.title}</h3>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Check className="h-5 w-5 text-brand-blue" />
                      <span className="text-brand-dark">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-brand-dark py-16 md:py-24 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">My Development Process</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              I follow a structured, client-focused development process to ensure every project delivers exceptional
              results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="rounded-xl bg-gray-800 p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="mb-4 inline-block rounded-full bg-brand-blue px-4 py-2 text-xl font-bold"
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
                  {step.number}
                </motion.div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brand-dark">Pricing Plans</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Transparent pricing options tailored to fit your project needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                className={`relative rounded-xl ${plan.isPopular ? "border-2 border-brand-blue" : "border border-gray-200"} bg-white p-6 shadow-md`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {plan.isPopular && (
                  <motion.div
                    className="absolute -top-4 right-4 rounded-full bg-brand-blue px-4 py-1 text-sm font-medium text-white"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    Most Popular
                  </motion.div>
                )}
                <h3 className="mb-2 text-xl font-bold text-brand-dark">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-brand-dark">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground"> / project</span>}
                </div>
                <p className="mb-6 text-muted-foreground">{plan.description}</p>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Check className="h-5 w-5 text-brand-blue" />
                      <span className="text-brand-dark">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className={`w-full ${plan.isPopular ? "bg-brand-blue hover:bg-brand-blue-hover text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </Button>
                </motion.div>
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
          <h2 className="mb-8 text-4xl font-bold">Let&apos;s Connect</h2>
          <Button className="bg-brand-blue text-white hover:bg-brand-blue-hover" onClick={handleHireMeClick}>
            Hire me <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <hr className="mb-12 border-gray-800" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Frontend Developer specializing in React, Next.js, and modern web technologies.
            </p>
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
                <a href="tel:+1234567890" className="hover:text-brand-blue">
                  +1 (234) 567-8900
                </a>
              </li>
              <li>
                <a href="mailto:daniel@example.com" className="hover:text-brand-blue">
                  daniel@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://daniel-portfolio.com"
                  className="hover:text-brand-blue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  daniel-portfolio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-12 border-gray-800" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400">Copyright© 2024 Daniel. All Rights Reserved.</p>
          <div className="text-sm text-gray-400">
            <span>User Terms & Conditions | Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <ServiceContent />
      </main>
      <Footer />
    </>
  )
}
