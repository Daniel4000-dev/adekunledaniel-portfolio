"use client"

import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ArrowIconProps {
  className?: string
}

export function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <motion.div
      className={cn("flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white", className)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        whileHover={{
          x: 2,
          y: -2,
          transition: { duration: 0.2 },
        }}
      >
        <ArrowUpRight className="h-5 w-5" />
      </motion.div>
    </motion.div>
  )
}
