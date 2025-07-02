"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollIndicatorProps {
  className?: string
  targetId?: string
}

export function ScrollIndicator({ className, targetId }: ScrollIndicatorProps) {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      className={cn(
        "flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer",
        className,
      )}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <span className="text-sm font-medium">Scroll</span>
      <ChevronDown className="w-5 h-5" />
    </motion.button>
  )
}
