"use client"
import { PortfolioCard } from "@/components/molecules/portfolioCard"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"
import { useState } from "react"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const portfolioItems = [
    {
      title: "Lirante",
      imageUrl: "/placeholder.svg?height=300&width=600",
      href: "/portfolio/lirante",
    },
    {
      title: "Lirante",
      imageUrl: "/placeholder.svg?height=300&width=600",
      href: "/portfolio/lirante",
    },
  ]

  const categories = ["All", "Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatedText
              text="Lets have a look at my Portfolio"
              highlightedWord="Portfolio"
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="hidden md:inline-flex">
              See All
            </Button>
          </motion.div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} title={item.title} imageUrl={item.imageUrl} href={item.href} index={index} />
          ))}
        </div>

        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((dot, index) => (
              <motion.span
                key={dot}
                className={`block h-2 w-2 rounded-full ${index === 0 ? "bg-brand-orange" : "bg-gray-300"}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                className={`rounded-full ${
                  activeCategory === category ? "bg-brand-orange text-white hover:bg-brand-orange/90" : "bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="mb-4 text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Lirante - Food Delivery Solution
          </motion.h3>
          <motion.p
            className="mx-auto max-w-3xl text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
