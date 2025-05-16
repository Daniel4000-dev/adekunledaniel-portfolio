"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ContactInfoProps {
  icon: ReactNode
  title: string
  details: string[]
}

export function ContactInfo({ icon, title, details }: ContactInfoProps) {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
    >
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-muted-foreground">
            {detail}
          </p>
        ))}
      </div>
    </motion.div>
  )
}
