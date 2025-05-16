"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"
import { ServiceDetailCard } from "@/components/molecules/serviceDetailCard"
import { ProcessStep } from "@/components/molecules/processStep"
import { PricingCard } from "@/components/molecules/pricingCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palette, Code, Layout, Smartphone, Figma, LineChart } from "lucide-react"

export function ServiceTemplate() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that delight users and achieve business goals.",
      icon: <Palette className="h-10 w-10" />,
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
      ],
    },
    {
      title: "Web Design",
      description:
        "Designing beautiful, responsive websites that provide exceptional user experiences across all devices.",
      icon: <Code className="h-10 w-10" />,
      features: ["Responsive Design", "Website Redesign", "Landing Pages", "E-commerce Design", "CMS Integration"],
    },
    {
      title: "Landing Page",
      description: "Creating high-converting landing pages that capture attention and drive user action.",
      icon: <Layout className="h-10 w-10" />,
      features: [
        "Conversion-Focused Design",
        "A/B Testing",
        "Visual Storytelling",
        "Call-to-Action Optimization",
        "Performance Optimization",
      ],
    },
    {
      title: "Mobile App Design",
      description: "Designing intuitive mobile applications that provide seamless experiences across platforms.",
      icon: <Smartphone className="h-10 w-10" />,
      features: [
        "iOS & Android Design",
        "App Wireframing",
        "Interactive Prototypes",
        "Design System Creation",
        "User Testing",
      ],
    },
    {
      title: "Design Systems",
      description: "Building comprehensive design systems that ensure consistency and scalability across products.",
      icon: <Figma className="h-10 w-10" />,
      features: ["Component Libraries", "Style Guides", "Documentation", "Design Tokens", "Implementation Support"],
    },
    {
      title: "UX Consulting",
      description: "Providing expert UX guidance to improve existing products and design processes.",
      icon: <LineChart className="h-10 w-10" />,
      features: ["UX Audits", "Process Optimization", "Team Training", "Design Sprints", "Ongoing Support"],
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "I start by understanding your business, users, and goals through in-depth research and stakeholder interviews.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Based on research insights, I develop a strategic approach to address user needs and business objectives.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "I create wireframes, prototypes, and high-fidelity designs that bring your vision to life with a focus on usability.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "Designs are validated through user testing to ensure they meet user needs and business requirements.",
    },
    {
      number: "05",
      title: "Implementation",
      description:
        "I work closely with developers to ensure the design is implemented correctly and functions as intended.",
    },
    {
      number: "06",
      title: "Iteration",
      description:
        "Based on user feedback and data, I continuously refine and improve the design to optimize performance.",
    },
  ]

  const pricingPlans = [
    {
      title: "Basic",
      price: "$1,499",
      description: "Perfect for small businesses looking to establish their digital presence.",
      features: [
        "UI/UX Design for 5 pages",
        "Responsive Design",
        "2 Rounds of Revisions",
        "Source Files Included",
        "14-Day Delivery",
      ],
      isPopular: false,
    },
    {
      title: "Professional",
      price: "$2,999",
      description: "Ideal for growing businesses that need comprehensive design solutions.",
      features: [
        "UI/UX Design for 10 pages",
        "Responsive Design",
        "3 Rounds of Revisions",
        "Interactive Prototype",
        "Source Files Included",
        "Design System",
        "10-Day Delivery",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "$4,999+",
      description: "For established businesses requiring complex, custom design solutions.",
      features: [
        "UI/UX Design for 15+ pages",
        "Responsive Design",
        "Unlimited Revisions",
        "Interactive Prototype",
        "Source Files Included",
        "Comprehensive Design System",
        "User Testing",
        "Priority Support",
        "7-Day Delivery",
      ],
      isPopular: false,
    },
  ]

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
            <AnimatedText text="My Services" className="mb-6 text-5xl font-bold md:text-6xl" />
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              I offer a comprehensive range of design services to help businesses create exceptional digital experiences
              that engage users and drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceDetailCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-black py-16 md:py-24 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <AnimatedText text="My Design Process" className="mb-6 text-4xl font-bold md:text-5xl" />
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              I follow a structured, user-centered design process to ensure every project delivers exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <AnimatedText text="Pricing Plans" className="mb-6 text-4xl font-bold md:text-5xl" />
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Transparent pricing options tailored to fit your project needs and budget.
            </p>
          </motion.div>

          <Tabs defaultValue="monthly" className="mb-8 flex justify-center">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly (20% off)</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
