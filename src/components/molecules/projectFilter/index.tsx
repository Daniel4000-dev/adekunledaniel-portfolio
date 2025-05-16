"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeCategory === category ? "default" : "outline"}
            className={`rounded-full ${
              activeCategory === category ? "bg-brand-orange hover:bg-brand-orange/90" : "bg-gray-100"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}
