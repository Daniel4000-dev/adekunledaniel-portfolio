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

// About content inline
function AboutContent() {
  const skills = [
    { name: "React.js", percentage: 95 },
    { name: "Next.js", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "JavaScript", percentage: 95 },
    { name: "Tailwind CSS", percentage: 92 },
    { name: "HTML/CSS", percentage: 98 },
    { name: "Firebase", percentage: 85 },
    { name: "MongoDB", percentage: 80 },
  ]

  const testimonials = [
    {
      quote:
        "Daniel's frontend development skills are exceptional. His work on our online learning platform exceeded expectations with seamless user experience and modern design.",
      author: "KOYI Team Lead",
      position: "Project Manager at KOYI",
    },
    {
      quote:
        "Working with Daniel on the payment platform was fantastic. His attention to detail and ability to implement complex UI components made our project a huge success.",
      author: "OnionPay CTO",
      position: "Chief Technology Officer",
    },
    {
      quote:
        "Daniel has an incredible ability to translate complex requirements into intuitive, responsive interfaces. His work on our gaming platform was outstanding.",
      author: "Megawins Product Manager",
      position: "Product Lead at Megawins",
    },
  ]

  const handleDownloadCV = () => {
    const cvContent = `                             Adekunle Daniel Oluwaseyi 
Frontend Developer  
Email: 
dadekunle31@gmail.com
         Phone: 08163752061   
Address: Abuja, Federal Capital Territory      Github: 
https://github.com/Daniel4000-dev 
Linkedin: https://www.linkedin.com/in/daniel-adekunle-oluwaseyi/ 
 
    PROFESSIONAL SUMMARY 
Self-motivated and enthusiastic frontend developer with hands-on experience designing 
appealing user experiences. Proficient in the latest technologies and frameworks, committed to 
creating visually attractive and responsive websites. I am eager to offer my skills and 
experience to a vibrant firm devoted to continual skill development via mentoring and difficult 
initiatives. 
 
WORK EXPERIENCE 
Frontend Developer  
KOYI 
October 2024 – present 
● Collaborated with a team of developers to build a comprehensive online 
learning platform, enabling users to access courses, hire professionals, and 
engage with instructors through a messaging system. 
● Designed and developed user-friendly UI components for course listings, 
professional profiles, and messaging interfaces, ensuring seamless navigation 
and interaction for learners and instructors. 
● Integrated key functionalities including course loading, real-time messaging, and 
user profile management, enhancing the platform's interactivity and 
accessibility. 
● Optimized UI for responsiveness, ensuring the platform was fully accessible 
across multiple devices, improving the learning experience for users on both 
mobile and desktop. 
● Worked on the overall design consistency, implementing clean and modern 
design elements that aligned with the platform's goals of providing a 
professional, engaging online learning environment.
 
Frontend Developer  
OnionPay 
September 2023 – December 2023 
● Collaborated in the development of a user-friendly digital payment platform, 
focusing on enhancing the UI for seamless user interactions 

● Designed and implemented UI components for key features such as payment 
links, receipt generation, and transaction management, ensuring a smooth 
experience. 
● Optimized the dashboard layout, providing an intuitive interface for users to 
track payments and manage revenue efficiently. 
● Worked on improving user accessibility, integrating responsive design elements 
for mobile and desktop platforms. 
● Contributed to the visual design, maintaining a consistent and engaging aesthetic 
across the app, improving the overall user experience. 
 
Frontend Developer 
Megawins 
September 2024 – March 2025 
● Led UI/UX design for a secure, community-focused gaming and transaction 
platform, ensuring a seamless user experience across multiple devices. 
● Developed key web components for gaming functionalities, including game 
history tracking, secure payment systems, and dynamic user profiles. 
● Collaborated with backend teams to integrate secure payment processing and 
multi-factor authentication, ensuring data integrity and user security. 
● Optimized platform scalability using Tailwind CSS and modular UI elements, 
ensuring peak performance during high-traffic events. 
● Streamlined user interactions by designing intuitive navigation and dynamic 
feedback systems, boosting engagement and retention. 
Mobile Developer 
LukeHealth 
November 2024 – present 
● Collaborated with a development team to create LukeHealth, a medical app 
designed for users to create personalized profiles, book appointments, and store 
essential health information. 
● Designed and implemented user interfaces for profile creation, appointment 
scheduling, and health tracking, enabling users to manage their medical needs 
seamlessly. 
● Integrated features allowing doctors to monitor patient health, including 
prescription tracking, dosage management, and real-time updates on patient 
progress. 
● Developed secure data storage systems to ensure sensitive health information is 
safely stored and easily accessible for doctors during check-ups and 
consultations. 
● Optimized the app's usability, focusing on creating an intuitive flow for both 
patients and healthcare providers to enhance the overall user experience, 
improving patient care and ease of access to medical services. 
Frontend Developer 
GreenLeaf 
June 2023 – September 2023 

● Built a responsive website for an organization to enhance their online presence 
and improve user engagement. 
● Designed custom UI components, ensuring a seamless user experience across 
devices. 
● Optimized website performance and integrated third-party APIs for additional 
functionality. 
● Conducted rigorous testing to ensure compatibility, security, and scalability. 
Frontend Developer 
MOA Delivery 
February 2023 – May 2023 
● Developed a modern, user-friendly website for a food delivery franchise, 
featuring an intuitive ordering process and real-time tracking. 
● Implemented UI components aligned with the brand's identity, enhancing user 
retention. 
● Integrated API endpoints for dynamic menu updates, order placement, and user 
notifications. 
● Focused on responsive design and performance optimization to ensure a 
seamless experience for users on both mobile and desktop platforms.   
Frontend Developer
      
EEC       
February 2024 – June 2024   
● Collaborated with a team to develop an e-powered estate website. 
● I integrated endpoints and put logic from the Swagger documentation into practice. 
● I created visually beautiful and cohesive user interface (UI) components that improve 
the development process and user experience. 
● I optimized web pages for maximum speed and scalability. 
              
Frontend Developer 
 
         
MarcheSolution       
September 2023 – December 2023     
 
● Collaborated with a frontend team to develop a large-scale school management 
platform with custom system integrations, some of which are student progress, 
analysis, ID card & certificate generation, and online exam creation. 
● Designed and implemented multiple components to enhance the efficiency and 
standardization of the user interface system. 
● Ensured code quality and standard to ensure a clean and scalable codebase. 
● 
Integrated endpoints using proper documentation with Swager. 
      
Frontend Developer 
 
         
OneWallet MFB         
January 2023 – October 2023 
● Collaborated with a team to develop a secure, community-based digital 
payment platform aimed at revolutionizing local markets in Africa. 

● Designed and implemented user-centric UI components for the OneWallet 
website to enhance user experience and accessibility. 
● Integrated endpoints and developed robust functionalities for key features such 
as tailored rewards, secure payment systems, and identity verification. 
● Optimized web pages for scalability and multi-factor authentication. 
 
SKILLS 
Web Development: React, NextJs, HTML/CSS 
Languages: Javascript, Typescript, Python, 
Database: Firestore, Firebase RTDB, Mongodb 
Favourite UI Framework: Shadcn UI, Tailwind CSS 
 
     EDUCATION 
BEng Electrical Electronics Engineering 
Air Force Institute of Technology 
January  2020 - October  2024     |     mando, Kaduna State  
 
     CERTIFICATIONS 
Certified in Cybersecurity 
ISC2 
November 2022 
 
Introduction to Cloud Computing 
simplilearn 
November 2024 
 
Career Essentials in Generative AI by Microsoft and LinkedIn 
linkedIn 
June 2025  `

    const blob = new Blob([cvContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Adekunle_Daniel_Oluwaseyi_CV.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const handleContactMe = () => {
    window.location.href = "/contact"
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-light pt-32 pb-16">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <motion.h1
                className="mb-6 text-5xl font-bold md:text-6xl text-brand-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                About Me
              </motion.h1>
              <motion.h2
                className="mb-4 text-2xl font-semibold text-brand-blue"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Adekunle Daniel Oluwaseyi
              </motion.h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Self-motivated and enthusiastic frontend developer with 3+ years of hands-on experience designing
                appealing user experiences. Proficient in the latest technologies and frameworks, committed to creating
                visually attractive and responsive websites.
              </p>
              <p className="mb-8 text-lg text-muted-foreground">
                I am eager to offer my skills and experience to a vibrant firm devoted to continual skill development
                via mentoring and challenging initiatives. Based in Abuja, FCT, I specialize in React, Next.js, and
                modern web technologies.
              </p>

              {/* Contact Info */}
              <div className="mb-8 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-blue" />
                  <a href="mailto:dadekunle31@gmail.com" className="text-brand-blue hover:underline">
                    dadekunle31@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-blue" />
                  <a href="tel:08163752061" className="text-brand-blue hover:underline">
                    08163752061
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                  <span>Abuja, Federal Capital Territory</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="group bg-brand-blue text-white hover:bg-brand-blue-hover"
                    onClick={handleDownloadCV}
                  >
                    Download CV
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    onClick={handleContactMe}
                    className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white bg-transparent"
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
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
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Daniel+Adekunle"
                  alt="Adekunle Daniel Oluwaseyi - Frontend Developer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="rounded-full bg-brand-blue p-3">
                      <ArrowUpRight className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">Daniel Adekunle</p>
                      <p>Frontend Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brand-dark">My Journey</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              From Electrical Engineering to Frontend Development - a journey of passion and continuous learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-2xl font-bold text-brand-dark">How I Started</h3>
              <p className="mb-6 text-muted-foreground">
                My journey began with a BEng in Electrical Electronics Engineering from Air Force Institute of
                Technology (2020-2024). During my studies, I discovered my passion for web development and started
                learning frontend technologies.
              </p>
              <p className="text-muted-foreground">
                I quickly transitioned from engineering to frontend development, working on diverse projects from
                payment platforms to learning management systems, gaining hands-on experience with modern web
                technologies over the past 3+ years.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-2xl font-bold text-brand-dark">My Development Philosophy</h3>
              <p className="mb-6 text-muted-foreground">
                I believe in creating user-centric designs that not only look great but also provide seamless
                functionality. My approach combines clean, maintainable code with modern design principles to deliver
                exceptional user experiences.
              </p>
              <p className="text-muted-foreground">
                I stay up-to-date with the latest technologies and best practices, constantly learning and improving my
                skills through challenging projects and continuous professional development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-brand-dark py-16 md:py-24 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Technical Skills</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Proficient in modern frontend technologies and frameworks with 3+ years of hands-on project experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {skills.slice(0, 4).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-gray-700">
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
            <div className="space-y-6">
              {skills.slice(4).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 4) }}
                  viewport={{ once: true }}
                >
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-gray-700">
                    <motion.div
                      className="h-full rounded-full bg-brand-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * (index + 4) }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brand-dark">What Clients Say</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Feedback from teams and clients I&apos;ve worked with on various projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 text-2xl text-brand-blue">&quot;</div>
                <p className="mb-6 text-muted-foreground">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}
