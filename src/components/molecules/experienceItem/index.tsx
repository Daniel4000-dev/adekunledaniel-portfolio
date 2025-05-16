"use client"

import { motion } from "framer-motion"

interface ExperienceItemProps {
  company: string
  location: string
  period: string
  position: string
  description: string
  isOrange?: boolean
  index?: number
}

export function ExperienceItem({
  company,
  location,
  period,
  position,
  description,
  isOrange = false,
  index = 0,
}: ExperienceItemProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,auto,1fr]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold">
          {company}, {location}
        </h3>
        <p className="text-muted-foreground">{period}</p>
      </motion.div>

      <div className="relative flex justify-center">
        <motion.div
          className="absolute h-full w-0.5 bg-gray-300 dark:bg-gray-700"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          className={`relative z-10 h-6 w-6 rounded-full border-2 border-dashed ${isOrange ? "bg-brand-orange" : "bg-slate-800"}`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.3 + index * 0.2,
          }}
          viewport={{ once: true }}
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl font-bold">{position}</h4>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    </div>
  )
}
