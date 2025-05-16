"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
  index?: number
}

export function PricingCard({ title, price, description, features, isPopular = false, index = 0 }: PricingCardProps) {
  return (
    <motion.div
      className={`relative rounded-xl ${isPopular ? "border-2 border-brand-orange" : "border border-gray-200"} bg-white p-6 shadow-md`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {isPopular && (
        <motion.div
          className="absolute -top-4 right-4 rounded-full bg-brand-orange px-4 py-1 text-sm font-medium text-white"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
        >
          Most Popular
        </motion.div>
      )}
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-muted-foreground"> / project</span>}
      </div>
      <p className="mb-6 text-muted-foreground">{description}</p>
      <ul className="mb-6 space-y-3">
        {features.map((feature, i) => (
          <motion.li
            key={feature}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.05 }}
            viewport={{ once: true }}
          >
            <Check className="h-5 w-5 text-brand-orange" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          className={`w-full ${isPopular ? "bg-brand-orange hover:bg-brand-orange/90" : "bg-gray-800 hover:bg-gray-700"}`}
        >
          Get Started
        </Button>
      </motion.div>
    </motion.div>
  )
}
