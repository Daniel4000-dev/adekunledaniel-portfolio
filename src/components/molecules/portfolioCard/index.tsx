"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowIcon } from "@/components/atoms/icon/arrowIcon"

interface PortfolioCardProps {
  title: string
  imageUrl: string
  href: string
  index?: number
}

export function PortfolioCard({ title, imageUrl, 
    // href, 
    index = 0 }: PortfolioCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-[300px] w-full">
        <motion.div
          className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-4xl font-bold text-white"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
        </motion.div>
        <motion.div
          className="absolute bottom-6 right-6 z-20"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.4 + index * 0.1,
          }}
          viewport={{ once: true }}
        >
          <ArrowIcon />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full w-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>
      </div>
    </motion.div>
  )
}
