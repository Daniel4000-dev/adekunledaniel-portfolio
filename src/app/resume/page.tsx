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

// Resume content inline
function ResumeContent() {
  const professionalSkills = [
    { name: "React.js", percentage: 95 },
    { name: "Next.js", percentage: 90 },
    { name: "JavaScript", percentage: 95 },
    { name: "TypeScript", percentage: 85 },
  ]

  const technicalSkills = [
    { name: "HTML/CSS", percentage: 98 },
    { name: "Tailwind CSS", percentage: 92 },
    { name: "Firebase", percentage: 85 },
    { name: "MongoDB", percentage: 80 },
  ]

  const achievements = [
    {
      title: "10+ Web Applications",
      description:
        "Successfully built and deployed over 10 production-ready web applications using modern technologies.",
      icon: "🚀",
    },
    {
      title: "Multiple Industries",
      description: "Worked across diverse sectors including fintech, healthcare, education, and gaming platforms.",
      icon: "🏢",
    },
    {
      title: "3+ Years Experience",
      description: "Hands-on professional experience in frontend development and modern web technologies.",
      icon: "⏱️",
    },
    {
      title: "Team Collaboration",
      description: "Successfully collaborated with cross-functional teams and delivered projects on time.",
      icon: "⭐",
    },
  ]

  const handleDownloadCV = () => {
    const cvContent = `
Adekunle Daniel Oluwaseyi 
Frontend Developer  
Email: dadekunle31@gmail.com
Phone: 08163752061   
Address: Abuja, Federal Capital Territory      
Github: https://github.com/Daniel4000-dev 
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
● Integrated endpoints using proper documentation with Swager. 
      
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
June 2025  
    `

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
              My Resume
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
              A comprehensive overview of my professional experience, education, and skills in frontend development.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <Button className="bg-brand-blue text-white hover:bg-brand-blue-hover" onClick={handleDownloadCV}>
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
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
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-3xl">💼</span>
              <h2 className="text-3xl font-bold text-brand-dark">Work Experience</h2>
            </motion.div>

            <div className="space-y-16">
              {/* Current Position - KOYI */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,auto,1fr]">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-brand-dark">KOYI</h3>
                  <p className="text-muted-foreground">October 2024 - Present</p>
                </motion.div>

                <div className="relative flex justify-center">
                  <motion.div
                    className="absolute h-full w-0.5 bg-gray-300"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <motion.div
                    className="relative z-10 h-6 w-6 rounded-full border-2 border-dashed bg-brand-blue"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.3,
                    }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl font-bold text-brand-dark">Frontend Developer</h4>
                  <p className="text-muted-foreground">
                    Building a comprehensive online learning platform with course management, messaging system, and
                    professional profiles. Focused on responsive design and user experience optimization across multiple
                    devices.
                  </p>
                </motion.div>
              </div>

              {/* LukeHealth */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,auto,1fr]">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-brand-dark">LukeHealth</h3>
                  <p className="text-muted-foreground">November 2024 - Present</p>
                </motion.div>

                <div className="relative flex justify-center">
                  <motion.div
                    className="absolute h-full w-0.5 bg-gray-300"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <motion.div
                    className="relative z-10 h-6 w-6 rounded-full border-2 border-dashed bg-green-500"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.5,
                    }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl font-bold text-brand-dark">Mobile Developer</h4>
                  <p className="text-muted-foreground">
                    Developing a medical app for patient profiles, appointment booking, and health tracking.
                    Implementing secure data storage and intuitive interfaces for both patients and healthcare
                    providers.
                  </p>
                </motion.div>
              </div>

              {/* Megawins */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,auto,1fr]">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-brand-dark">Megawins</h3>
                  <p className="text-muted-foreground">September 2024 - March 2025</p>
                </motion.div>

                <div className="relative flex justify-center">
                  <motion.div
                    className="absolute h-full w-0.5 bg-gray-300"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <motion.div
                    className="relative z-10 h-6 w-6 rounded-full border-2 border-dashed bg-purple-500"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.7,
                    }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl font-bold text-brand-dark">Frontend Developer</h4>
                  <p className="text-muted-foreground">
                    Led UI/UX design for a secure gaming and transaction platform. Developed scalable components using
                    Tailwind CSS and integrated secure payment processing with multi-factor authentication.
                  </p>
                </motion.div>
              </div>

              {/* OnionPay */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,auto,1fr]">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-brand-dark">OnionPay</h3>
                  <p className="text-muted-foreground">September 2023 - December 2023</p>
                </motion.div>

                <div className="relative flex justify-center">
                  <motion.div
                    className="absolute h-full w-0.5 bg-gray-300"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <motion.div
                    className="relative z-10 h-6 w-6 rounded-full border-2 border-dashed bg-orange-500"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.9,
                    }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl font-bold text-brand-dark">Frontend Developer</h4>
                  <p className="text-muted-foreground">
                    Developed a digital payment platform with payment links, receipt generation, and transaction
                    management. Optimized dashboard layouts and improved user accessibility across mobile and desktop
                    platforms.
                  </p>
                </motion.div>
              </div>
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
              <h2 className="text-3xl font-bold text-brand-dark">Education & Certifications</h2>
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
                  Comprehensive engineering education with focus on electronics, programming, and system design
                  principles.
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
                <h3 className="mb-1 text-xl font-bold text-brand-dark">Certified in Cybersecurity</h3>
                <div className="mb-4 text-muted-foreground">ISC2</div>
                <p className="text-muted-foreground">
                  Professional certification in cybersecurity principles, risk management, and security best practices.
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
                  Foundational knowledge in cloud computing concepts, services, and deployment models.
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
                  Advanced training in generative AI technologies and their applications in modern development.
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
                <h3 className="mb-6 text-2xl font-bold text-brand-dark">Frontend Technologies</h3>
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
                <h3 className="mb-6 text-2xl font-bold text-brand-dark">Tools & Databases</h3>
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
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Achievements & Milestones</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Key accomplishments and milestones from my professional journey in frontend development.
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
