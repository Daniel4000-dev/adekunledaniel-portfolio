"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download } from "lucide-react"
import { SkillBar } from "@/components/molecules/skillBar"
import { TestimonialCard } from "@/components/molecules/testimonialCard"

export function AboutTemplate() {
  const skills = [
    { name: "UI/UX Design", percentage: 95 },
    { name: "Web Design", percentage: 90 },
    { name: "Mobile App Design", percentage: 85 },
    { name: "Wireframing", percentage: 92 },
    { name: "Prototyping", percentage: 88 },
  ]

  const testimonials = [
    {
      quote:
        "Jenny's exceptional product design ensured our website's success. Her attention to detail and user-focused approach made all the difference.",
      author: "Michael Johnson",
      position: "CEO at TechVision",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Working with Jenny was a game-changer for our product. Her designs are not only beautiful but also highly functional and user-friendly.",
      author: "Sarah Williams",
      position: "Product Manager at Innovate",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Jenny has a unique ability to understand user needs and translate them into stunning designs. She's a true professional and a joy to work with.",
      author: "David Chen",
      position: "Founder of DesignHub",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 pt-32 pb-16">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <AnimatedText text="About Me" className="mb-6 text-5xl font-bold md:text-6xl" />
              <p className="mb-6 text-lg text-muted-foreground">
                I&apos;m Jenny, a passionate product designer with over 10 years of experience creating user-centered digital
                experiences. I specialize in UI/UX design, web design, and creating intuitive interfaces that delight
                users.
              </p>
              <p className="mb-8 text-lg text-muted-foreground">
                My approach combines aesthetic excellence with functional design, ensuring that every project not only
                looks beautiful but also delivers exceptional user experiences that drive business results.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="group bg-brand-orange hover:bg-brand-orange/90">
                    Download CV
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline">Contact Me</Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Jenny - Product Designer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="rounded-full bg-brand-orange p-3">
                      <ArrowUpRight className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">Jenny</p>
                      <p>Product Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <AnimatedText text="My Story" className="mb-6 text-4xl font-bold md:text-5xl" />
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              My journey in design started over a decade ago, and I&apos;ve been passionate about creating beautiful,
              functional interfaces ever since.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-2xl font-bold">How I Started</h3>
              <p className="mb-6 text-muted-foreground">
                My design journey began when I discovered my passion for creating user-centered digital experiences.
                After completing my degree in Design, I joined Cognizant where I honed my skills working on diverse
                projects across various industries.
              </p>
              <p className="text-muted-foreground">
                Over the years, I&apos;ve evolved from a UI designer to a comprehensive product designer, focusing on the
                entire user experience from research to implementation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-2xl font-bold">My Design Philosophy</h3>
              <p className="mb-6 text-muted-foreground">
                I believe that great design is invisible. It should feel intuitive and natural, guiding users through
                their journey without them even noticing the design decisions that make it possible.
              </p>
              <p className="text-muted-foreground">
                My approach combines aesthetic excellence with functional design, ensuring that every project not only
                looks beautiful but also delivers exceptional user experiences that drive business results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-black py-16 md:py-24 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <AnimatedText text="My Skills" className="mb-6 text-4xl font-bold md:text-5xl" />
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              I&apos;ve developed expertise in various design disciplines over my 10+ years in the industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {skills.slice(0, 3).map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} index={index} />
              ))}
            </div>
            <div className="space-y-6">
              {skills.slice(3).map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} index={index + 3} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <AnimatedText text="What Clients Say" className="mb-6 text-4xl font-bold md:text-5xl" />
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Don&apos;t just take my word for it - here&apos;s what some of my clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                avatar={testimonial.avatar}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
