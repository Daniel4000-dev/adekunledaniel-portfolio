"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ResumeSectionProps {
  title: string
  icon: string
  children: ReactNode
}

export function ResumeSection({ title, icon, children }: ResumeSectionProps) {
  return (
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
        <span className="text-3xl">{icon}</span>
        <h2 className="text-3xl font-bold">{title}</h2>
      </motion.div>
      {children}
    </motion.div>
  )
}