"use client"

import { motion } from "framer-motion"
import { Code, Globe, Smartphone, Database } from "lucide-react"
import { services } from "@/data/skills"
import { SectionHeading } from "@/components/atoms/sectionHeading"

const iconMap = {
  Code,
  Globe,
  Smartphone,
  Database,
}

export function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="What I Do"
          title="Services I Offer"
          description="I provide comprehensive frontend development services to help bring your ideas to life with modern, scalable solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.price && <p className="text-blue-600 font-semibold">{service.price}</p>}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
