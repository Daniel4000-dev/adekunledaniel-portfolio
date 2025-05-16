"use client"

import { motion } from "framer-motion"

interface AchievementCardProps {
  title: string
  description: string
  icon: string
  index?: number
}

export function AchievementCard({ title, description, icon, index = 0 }: AchievementCardProps) {
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
        {icon}
      </motion.div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}
