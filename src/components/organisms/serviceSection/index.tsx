"use client"
import { ServiceCard } from "@/components/molecules/serviceCard"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"

export function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
      imageUrl: "/placeholder.svg?height=400&width=300",
      href: "/services/ui-ux-design",
    },
    {
      title: "Web Design",
      imageUrl: "/placeholder.svg?height=400&width=300",
      href: "/services/web-design",
    },
    {
      title: "Landing Page",
      imageUrl: "/placeholder.svg?height=400&width=300",
      href: "/services/landing-page",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AnimatedText
            text="My Services"
            highlightedWord="Services"
            className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imageUrl={service.imageUrl}
              href={service.href}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate,
            bibendum sodales
          </p>
        </motion.div>
      </div>
    </section>
  )
}
