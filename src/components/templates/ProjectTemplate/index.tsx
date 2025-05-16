"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"
import { ProjectCard } from "@/components/molecules/projectCard"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ProjectFilter } from "@/components/molecules/projectFilter"

export function ProjectTemplate() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "UI/UX Design", "Web Design", "Mobile App", "Dashboard", "E-commerce"]

  const projects = [
    {
      title: "Lirante - Food Delivery Solution",
      description:
        "A comprehensive food delivery platform designed to provide seamless ordering experience for users and efficient management for restaurants.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "UI/UX Design",
      client: "Lirante Inc.",
      year: "2023",
      link: "/project/lirante",
    },
    {
      title: "Sugee - Loan Management System",
      description:
        "A financial platform designed for rural sectors, making loan management accessible and user-friendly for underserved communities.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "Dashboard",
      client: "Sugee Pvt Limited",
      year: "2022",
      link: "/project/sugee",
    },
    {
      title: "Cinetrade - Digital Media Investment",
      description:
        "An innovative platform allowing users to invest in digital media projects and track their investments through an intuitive interface.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "Web Design",
      client: "Cinetstox",
      year: "2023",
      link: "/project/cinetrade",
    },
    {
      title: "MusicStream - Music Player App",
      description:
        "A modern music streaming application with a focus on personalized recommendations and social sharing features.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "Mobile App",
      client: "AudioTech",
      year: "2022",
      link: "/project/musicstream",
    },
    {
      title: "EcoShop - Sustainable E-commerce",
      description:
        "An e-commerce platform focused on sustainable and eco-friendly products with an intuitive shopping experience.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "E-commerce",
      client: "EcoRetail",
      year: "2021",
      link: "/project/ecoshop",
    },
    {
      title: "FinDash - Financial Analytics",
      description:
        "A comprehensive financial dashboard providing users with insights and analytics for better financial management.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "Dashboard",
      client: "FinTech Solutions",
      year: "2022",
      link: "/project/findash",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <AnimatedText text="My Projects" className="mb-6 text-5xl font-bold md:text-6xl" />
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              Explore my portfolio of design projects across various industries and platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-12">
        <div className="container">
          <ProjectFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                category={project.category}
                client={project.client}
                year={project.year}
                link={project.link}
                index={index}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-16 text-center">
              <p className="text-xl">No projects found in this category.</p>
              <Button
                className="mt-4 bg-brand-orange hover:bg-brand-orange/90"
                onClick={() => setActiveCategory("All")}
              >
                View All Projects
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
