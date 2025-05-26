"use client"
import { ExperienceItem } from "@/components/molecules/experienceItem"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"

export function ExperienceSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <AnimatedText
            text="My Work Experience"
            highlightedWord="Work Experience"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          />
        </motion.div>

        <div className="space-y-16">
          <ExperienceItem
            company="Tech Innovators Ltd"
            location="Remote"
            period="Jun 2021 - Present"
            position="Full-Stack Developer"
            description="Developed scalable web applications using React & Node.js. Led migration to microservices architecture reducing API response time by 40%. Implemented CI/CD pipelines using Docker and Jenkins."
            isOrange={true}
            index={0}
          />

          <ExperienceItem
           company="FinTech Solutions Inc"
           location="New York, NY"
           period="Jan 2019 - May 2021"
           position="Backend Engineer"
           description="Built RESTful APIs handling 50k+ daily transactions using Python/Django. Optimized database queries reducing latency by 35%. Integrated AWS services (S3, Lambda) for file processing workflows."
           index={1}
          />

          <ExperienceItem
            company="Code Masters Academy"
            location="London, UK"
            period="Aug 2017 - Dec 2018"
            position="Junior Developer"
            description="Contributed to educational platform development with Vue.js and Firebase. Implemented real-time chat features using WebSockets. Conducted code reviews and mentored internship students."
            isOrange={true}
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
