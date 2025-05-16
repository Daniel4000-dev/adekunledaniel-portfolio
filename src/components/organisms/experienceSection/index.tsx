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
            company="Cognizant"
            location="Mumbai"
            period="Sep 2016- July 2020"
            position="Experience Designer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
            isOrange={true}
            index={0}
          />

          <ExperienceItem
            company="Sugee Pvt limited"
            location="Mumbai"
            period="Sep 2020- July 2023"
            position="UI/UX Designer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
            isOrange={false}
            index={1}
          />

          <ExperienceItem
            company="Cinetstox"
            location="Mumbai"
            period="Sep 2023"
            position="Lead UX Designer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
            isOrange={true}
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
