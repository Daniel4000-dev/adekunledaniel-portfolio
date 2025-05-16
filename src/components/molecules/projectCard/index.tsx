"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  category: string
  client: string
  year: string
  link: string
  index?: number
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  category,
  client,
  year,
  link,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group overflow-hidden rounded-xl bg-white shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Link href={link}>
        <div className="relative h-[240px] w-full overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full w-full">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
          <motion.div
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-white opacity-0 transition-opacity group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.div>
        </div>
      </Link>
      <div className="p-6">
        <div className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm">{category}</div>
        <Link href={link}>
          <h3 className="mb-2 text-xl font-bold transition-colors hover:text-brand-orange">{title}</h3>
        </Link>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Client: {client}</span>
          <span>Year: {year}</span>
        </div>
      </div>
    </motion.div>
  )
}
