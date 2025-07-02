"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/atoms/sectionHeading"
import { experiences } from "@/data/experience"

export function ExperienceSection() {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="My Journey"
          title="Work Experience"
          description="A timeline of my professional experience and the impact I've made in various organizations."
        />

        <div className="max-w-4xl mx-auto">
          {experiences.slice(0, 6).map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200 -z-10"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="ml-16 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                    <p className="text-blue-600 font-semibold">{experience.company}</p>
                  </div>

                  <div className="flex flex-col md:items-end text-sm text-gray-500 mt-2 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {experience.startDate} - {experience.current ? "Present" : experience.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{experience.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {experience.responsibilities.slice(0, 3).map((responsibility, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
