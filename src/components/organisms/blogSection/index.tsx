"use client"
import { AnimatedText } from "@/components/atoms/animatedText"
import { BlogCard } from "@/components/molecules/blogCard"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      imageUrl: "/placeholder.svg?height=220&width=400",
      category: "UI/UX Design",
      author: "Jayesh Patil",
      date: "10 Nov, 2023",
      href: "/blog/design-unraveled",
    },
    {
      title: "Sugee: Loan Management System for Rural Sector.",
      imageUrl: "/placeholder.svg?height=220&width=400",
      category: "App Design",
      author: "Jayesh Patil",
      date: "09 Oct, 2023",
      href: "/blog/sugee-loan-management",
    },
    {
      title: "Cinetrade: Innovative way to invest in Digital Media",
      imageUrl: "/placeholder.svg?height=220&width=400",
      category: "App Design",
      author: "Jayesh Patil",
      date: "13 Aug, 2023",
      href: "/blog/cinetrade",
    },
  ]

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
              text="From my blog post"
              highlightedWord="blog post"
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.title}
              title={post.title}
              imageUrl={post.imageUrl}
              category={post.category}
              author={post.author}
              date={post.date}
              href={post.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
