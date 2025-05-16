"use client"

import { motion } from "framer-motion"

export function ServiceBanner() {
  return (
    <div className="relative overflow-hidden bg-brand-orange py-4 text-white">
      <motion.div
        className="animate-marquee whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "linear",
        }}
      >
        <span className="mx-4 text-xl font-bold">UX Design</span>
        <span className="mx-4 text-xl">★</span>
        <span className="mx-4 text-xl font-bold">App Design</span>
        <span className="mx-4 text-xl">★</span>
        <span className="mx-4 text-xl font-bold">Dashboard</span>
        <span className="mx-4 text-xl">★</span>
        <span className="mx-4 text-xl font-bold">Wireframe</span>
        <span className="mx-4 text-xl">★</span>
        <span className="mx-4 text-xl font-bold">User Research</span>
        <span className="mx-4 text-xl">★</span>
      </motion.div>
    </div>
  )
}
