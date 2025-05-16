"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowIcon } from "@/components/atoms/icon/arrowIcon"

interface ServiceCardProps {
  title: string
  imageUrl: string
  href: string
  index?: number
}

export function ServiceCard({ title, imageUrl, 
    // href, 
    index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-black/10 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6">
          <motion.h3
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
          >
            <ArrowIcon />
          </motion.div>
        </div>
        <motion.div className="h-full w-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>
      </div>
    </motion.div>
  )
}
