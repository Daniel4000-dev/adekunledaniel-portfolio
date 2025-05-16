"use client"

import { motion } from "framer-motion"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  index?: number
}

export function ProcessStep({ number, title, description, index = 0 }: ProcessStepProps) {
  return (
    <motion.div
      className="rounded-xl bg-gray-800 p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="mb-4 inline-block rounded-full bg-brand-orange px-4 py-2 text-xl font-bold"
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
        {number}
      </motion.div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}
