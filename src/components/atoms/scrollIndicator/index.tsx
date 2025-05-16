"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
    >
      <span className="mb-2 text-sm">Scroll Down</span>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </motion.div>
  )
}
