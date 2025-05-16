"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  avatar: string
  index?: number
}

export function TestimonialCard({ quote, author, position, avatar, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      className="rounded-xl bg-white p-6 shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-4 text-2xl text-brand-orange">&quot;</div>
      <p className="mb-6 text-muted-foreground">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </div>
    </motion.div>
  )
}
