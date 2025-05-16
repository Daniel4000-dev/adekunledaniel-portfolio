"use client"

import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  percentage: number
  index?: number
}

export function SkillBar({ name, percentage, index = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <div className="mb-2 flex justify-between">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <motion.div
          className="h-full rounded-full bg-brand-orange"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </motion.div>
  )
}
