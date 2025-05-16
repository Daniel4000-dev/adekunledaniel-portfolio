"use client"

import { motion } from "framer-motion"

interface EducationItemProps {
  degree: string
  institution: string
  period: string
  description: string
  index?: number
}

export function EducationItem({ degree, institution, period, description, index = 0 }: EducationItemProps) {
  return (
    <motion.div
      className="rounded-xl bg-white p-6 shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-2 text-sm font-medium text-brand-orange">{period}</div>
      <h3 className="mb-1 text-xl font-bold">{degree}</h3>
      <div className="mb-4 text-muted-foreground">{institution}</div>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
