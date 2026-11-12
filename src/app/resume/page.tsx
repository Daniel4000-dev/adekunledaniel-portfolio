"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, Download, Github, Linkedin } from "lucide-react"
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

// Resume content inline
function ResumeContent() {
  const professionalSkills = [
    { name: "React.js", percentage: 96 },
    { name: "Next.js", percentage: 94 },
    { name: "JavaScript (ES6+)", percentage: 96 },
    { name: "TypeScript", percentage: 90 },
  ]

  const technicalSkills = [
    { name: "HTML5 / CSS3", percentage: 98 },
    { name: "Tailwind CSS", percentage: 95 },
    { name: "React Native", percentage: 88 },
    { name: "Firebase & REST APIs", percentage: 90 },
  ]

  const workTimeline = [
    {
      company: "KOYI",
      period: "October 2024 - Present",
      role: "Senior Frontend Engineer",
      dotColor: "bg-brand-blue",
      description:
        "Spearheading frontend architecture for an all-in-one learning and talent marketplace. Engineered high-converting course discovery, talent hiring profiles, and real-time instructor messaging in React, Next.js, and TypeScript—cutting page load times and boosting learner retention.",
    },
    {
      company: "LukeHealth",
      period: "November 2024 - Present",
      role: "Mobile & Frontend Engineer",
      dotColor: "bg-green-500",
      description:
        "Building a patient-first mobile health platform in React Native. Delivered frictionless appointment booking, automated dosage reminders, encrypted health records, and real-time clinician monitoring dashboards.",
    },
    {
      company: "Megawins",
      period: "April 2024 - March 2025",
      role: "Lead Frontend Developer",
      dotColor: "bg-purple-500",
      description:
        "Led UI/UX engineering for a high-concurrency gaming and instant-payout platform. Built modular Tailwind CSS components, real-time game history tracking, and multi-factor authenticated payment flows that reduced checkout drop-offs.",
    },
    {
      company: "EEC",
      period: "September 2023 - March 2024",
      role: "Frontend Developer",
      dotColor: "bg-blue-500",
      description:
        "Delivered a high-converting real-estate showcase and property management web platform. Integrated Swagger REST APIs and optimized asset delivery to help prospective buyers search, filter, and book property viewings effortlessly.",
    },
    {
      company: "OnionPay",
      period: "March 2023 - September 2023",
      role: "Frontend Developer",
      dotColor: "bg-orange-500",
      description:
        "Engineered merchant payment tools including one-click payment link generators, automated receipt views, and real-time cash-flow analytics dashboards—enabling businesses to collect payments faster across mobile and desktop.",
    },
    {
      company: "MarcheSolution",
      period: "August 2022 - February 2023",
      role: "Frontend Developer",
      dotColor: "bg-indigo-500",
      description:
        "Built core frontend modules for an enterprise school management platform—automating student performance analytics, batch digital ID card generation, and distraction-free online examination portals.",
    },
    {
      company: "OneWallet MFB",
      period: "January 2022 - August 2022",
      role: "Frontend Developer",
      dotColor: "bg-teal-500",
      description:
        "Helped launch and scale a community-focused microfinance and digital payments platform for African markets. Created intuitive KYC onboarding, loyalty rewards, and multi-factor security interfaces optimized for low-bandwidth mobile networks.",
    },
    {
      company: "GreenLeaf & MOA Delivery",
      period: "January 2021 - December 2021",
      role: "Frontend Web Developer",
      dotColor: "bg-emerald-500",
      description:
        "Designed and shipped commercial web applications including a real-time food ordering and delivery tracking platform (MOA Delivery) and a lead-capturing client portal (GreenLeaf), establishing a strong foundation in conversion-focused React engineering.",
    },
  ]

  const achievements = [
    {
      title: "10+ Production Apps",
      description:
        "Architected, built, and launched over 10 live web and mobile products generating real user growth and revenue.",
      icon: "🚀",
    },
    {
      title: "5+ High-Growth Industries",
      description:
        "Proven domain expertise across Fintech, Telehealth, EdTech, AdTech, Real Estate, and Gaming platforms.",
      icon: "🏢",
    },
    {
      title: "5+ Years Experience",
      description:
        "Five-plus years (2021–Present) of continuous, hands-on engineering in React, Next.js, TypeScript, and React Native.",
      icon: "⏱️",
    },
    {
      title: "100% On-Time Delivery",
      description:
        "Trusted by CTOs, founders, and cross-functional product teams to take ownership and ship cleanly on schedule.",
      icon: "⭐",
    },
  ]

  const handleDownloadCV = () => {
    const path = "/Adekunle_Daniel_Oluwaseyi_CV.pdf"
    const a = document.createElement("a")
    a.href = path
    a.download = "Adekunle_Daniel_Oluwaseyi_CV.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

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
              5+ Years of Proven Impact
            </motion.h1>
            <motion.h2
              className="mb-4 text-2xl font-semibold text-brand-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Adekunle Daniel Oluwaseyi • Senior Frontend Engineer
            </motion.h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              A track record of helping startups and established teams design, build, and scale high-converting web and
              mobile products from 2021 to the present.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-4 flex-wrap"
            >
              <Button className="bg-brand-blue text-white hover:bg-brand-blue-hover" onClick={handleDownloadCV}>
                Download Full CV <Download className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white bg-transparent"
                >
                  Hire Me for Your Team <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              className="mb-12 flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-3xl">💼</span>
              <div>
                <h2 className="text-3xl font-bold text-brand-dark">Work Experience (2021 – Present)</h2>
                <p className="text-muted-foreground">5+ years of shipping production web &amp; mobile applications</p>
              </div>
            </motion.div>

            <div className="space-y-16">
              {workTimeline.map((item, idx) => (
                <div key={item.company} className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,auto,1fr]">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-brand-dark">{item.company}</h3>
                    <p className="text-brand-blue font-medium">{item.period}</p>
                  </motion.div>

                  <div className="relative flex justify-center">
                    <motion.div
                      className="absolute h-full w-0.5 bg-gray-300"
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <motion.div
                      className={`relative z-10 h-6 w-6 rounded-full border-2 border-dashed ${item.dotColor}`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.2 + idx * 0.1,
                      }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-2xl font-bold text-brand-dark mb-2">{item.role}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-3xl">🎓</span>
              <h2 className="text-3xl font-bold text-brand-dark">Education &amp; Certifications</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <motion.div
                className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-2 text-sm font-medium text-brand-blue">January 2020 - October 2024</div>
                <h3 className="mb-1 text-xl font-bold text-brand-dark">BEng Electrical Electronics Engineering</h3>
                <div className="mb-4 text-muted-foreground">Air Force Institute of Technology, Kaduna State</div>
                <p className="text-muted-foreground">
                  Rigorous engineering training in systems architecture, logic design, and software programming—forming
                  the analytical backbone of my 5+ year software engineering career.
                </p>
              </motion.div>

              <motion.div
                className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-2 text-sm font-medium text-brand-blue">November 2022</div>
                <h3 className="mb-1 text-xl font-bold text-brand-dark">Certified in Cybersecurity (CC)</h3>
                <div className="mb-4 text-muted-foreground">ISC2</div>
                <p className="text-muted-foreground">
                  Professional certification in security-first application design, authentication protocols, and risk
                  mitigation—applied directly to fintech and healthcare frontends.
                </p>
              </motion.div>

              <motion.div
                className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-2 text-sm font-medium text-brand-blue">November 2024</div>
                <h3 className="mb-1 text-xl font-bold text-brand-dark">Introduction to Cloud Computing</h3>
                <div className="mb-4 text-muted-foreground">Simplilearn</div>
                <p className="text-muted-foreground">
                  Cloud architecture, modern CI/CD deployment pipelines, and scalable hosting strategies for high-traffic
                  web applications.
                </p>
              </motion.div>

              <motion.div
                className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-2 text-sm font-medium text-brand-blue">June 2025</div>
                <h3 className="mb-1 text-xl font-bold text-brand-dark">Career Essentials in Generative AI</h3>
                <div className="mb-4 text-muted-foreground">Microsoft and LinkedIn</div>
                <p className="text-muted-foreground">
                  Integrating AI-powered user experiences, intelligent assistants, and modern LLM workflows into
                  next-generation web products.
                </p>
              </motion.div>
            </div>
          </motion.div>
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
            className="mb-16"
          >
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-3xl">🛠️</span>
              <h2 className="text-3xl font-bold text-brand-dark">Technical Skills</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-brand-dark">Frontend Frameworks &amp; Languages</h3>
                <div className="space-y-6">
                  {professionalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium text-brand-dark">{skill.name}</span>
                        <span className="text-brand-dark">{skill.percentage}%</span>
                      </div>
                      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                        <motion.div
                          className="h-full rounded-full bg-brand-blue"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-bold text-brand-dark">UI Systems, Mobile &amp; Cloud</h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium text-brand-dark">{skill.name}</span>
                        <span className="text-brand-dark">{skill.percentage}%</span>
                      </div>
                      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                        <motion.div
                          className="h-full rounded-full bg-brand-blue"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-brand-dark py-16 md:py-24 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Achievements &amp; Track Record</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Measurable milestones across 5+ years of building products that users love and businesses rely on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="rounded-xl bg-gray-800 p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
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
                  {achievement.icon}
                </motion.div>
                <h3 className="mb-2 text-xl font-bold">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
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
            <span>User Terms &amp; Conditions | Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <ResumeContent />
      </main>
      <Footer />
    </>
  )
}
