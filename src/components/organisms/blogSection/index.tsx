"use client"

import { SectionHeading } from "@/components/atoms/sectionHeading"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for building large-scale React applications that are maintainable and performant.",
    image: "/images/blog-1.png",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "React",
  },
  {
    id: "2",
    title: "Next.js 14: What's New and Exciting",
    excerpt: "Explore the latest features in Next.js 14 and how they can improve your development workflow.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Next.js",
  },
  {
    id: "3",
    title: "TypeScript Best Practices for Fronten Developers",
    excerpt: "Essential TypeScript patterns and practices that every frontend developer should know.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "TypeScript",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Latest Insights"
          title="From the Blog"
          description="Sharing my thoughts on web development, best practices, and the latest trends in frontend technologies."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
