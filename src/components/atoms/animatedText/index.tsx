"use client"

import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  highlightedWord?: string
  once?: boolean
  delay?: number
}

export function AnimatedText({ text, className, highlightedWord, once = true, delay = 0 }: AnimatedTextProps) {
  // Split text into words
  const words = text.split(" ")

  // Animation variants for words
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={cn("flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`mr-1 inline-block ${word === highlightedWord ? "text-brand-orange" : ""}`}
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
