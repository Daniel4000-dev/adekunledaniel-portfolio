"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"

export function HireMeSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <motion.div
            className="relative h-[500px] w-full overflow-hidden rounded-3xl bg-brand-orange"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6e8yXBX0Aoul91cEWarxebmoZcYucl.png"
              alt="Why Hire Me"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <AnimatedText
                text="Why Hire me?"
                highlightedWord="Hire me"
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              />
            </motion.div>

            <motion.p
              className="mb-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate,
              bibendum sodales
            </motion.p>

            <div className="mb-8 grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.p
                  className="text-4xl font-bold"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                >
                  450+
                </motion.p>
                <p className="text-muted-foreground">Project Completed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.p
                  className="text-4xl font-bold"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.5,
                  }}
                  viewport={{ once: true }}
                >
                  450+
                </motion.p>
                <p className="text-muted-foreground">Project Completed</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                Hire me
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
