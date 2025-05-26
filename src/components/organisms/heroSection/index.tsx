"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"
import { ScrollIndicator } from "@/components/atoms/scrollIndicator"

export function HeroSection() {
  return (
    <section className="relative pt-24">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <motion.div
              className="mb-8 inline-block rounded-full border border-gray-200 px-6 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello!
            </motion.div>

            <AnimatedText
              text="I'm Daniel, Software Engineer"
              highlightedWord="Daniel"
              className="mb-6 text-5xl font-bold md:text-6xl"
            />

            <motion.div
              className="mb-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">&quot;</span>
                <div>
                  <p className="mb-2">Daniel&apos;s Exceptional product design ensure our website&apos;s success.</p>
                  <p className="font-medium">Highly Recommended</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="group bg-brand-orange hover:bg-brand-orange/90">
                  Portfolio
                  <motion.div
                    animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  >
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline">Hire me</Button>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative order-1 md:order-2">
            <motion.div
              className="relative h-[500px] w-full overflow-hidden rounded-full bg-brand-orange"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/portpic.jpeg"
                // https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZWyPrFgNAqfELZYL1LGlyRvjigJz3A.png"
                alt="Jenny - Product Designer"
                fill
                className="object-cover object-center"
              />
            </motion.div>

            <motion.div
              className="absolute -right-4 top-10 rounded-lg bg-white p-4 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Star className="h-5 w-5 fill-brand-orange text-brand-orange" />
                  </motion.div>
                ))}
              </div>
              <div className="mt-2 text-center">
                <motion.p
                  className="text-3xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  3 Years
                </motion.p>
                <motion.p
                  className="text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  Experience
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  )
}
