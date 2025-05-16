"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowIcon } from "@/components/atoms/icon/arrowIcon"

interface BlogCardProps {
  title: string
  imageUrl: string
  category: string
  author: string
  date: string
  href: string
  index?: number
}

export function BlogCard({ title, imageUrl, category, author, date, href, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      className="group overflow-hidden rounded-xl bg-white shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full w-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>
        <motion.div
          className="absolute bottom-4 right-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.3 + index * 0.1,
          }}
          viewport={{ once: true }}
        >
          <ArrowIcon />
        </motion.div>
      </div>
      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm"
          whileHover={{ backgroundColor: "#fff3e0" }}
        >
          {category}
        </motion.div>
        <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <Link href={href}>
          <motion.h3 className="text-xl font-bold" whileHover={{ color: "#FF7A30" }}>
            {title}
          </motion.h3>
        </Link>
      </motion.div>
    </motion.div>
  )
}
