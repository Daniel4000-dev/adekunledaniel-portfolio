"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import type { ReactNode } from "react"

interface ServiceDetailCardProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  index?: number
}

export function ServiceDetailCard({ title, description, icon, features, index = 0 }: ServiceDetailCardProps) {
  return (
    <motion.div
      className="rounded-xl bg-white p-6 shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="mb-4 inline-flex rounded-full bg-brand-orange/10 p-3 text-brand-orange"
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
        {icon}
      </motion.div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-6 text-muted-foreground">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <motion.li
            key={feature}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.05 }}
            viewport={{ once: true }}
          >
            <Check className="h-5 w-5 text-brand-orange" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
