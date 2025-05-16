"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactInfo } from "@/components/molecules/contactInfo"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { SocialIcons } from "@/components/atoms/icon/socialIcons"

export function ContactTemplate() {
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
            <AnimatedText text="Get In Touch" className="mb-6 text-5xl font-bold md:text-6xl" />
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
              Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life with exceptional design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl bg-white p-8 shadow-lg"
            >
              <h2 className="mb-6 text-2xl font-bold">Send Me a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Your Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea id="message" placeholder="Tell me about your project..." rows={5} />
                </div>
                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">Send Message</Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              <div className="mb-8 space-y-6">
                <ContactInfo
                  icon={<MapPin className="h-6 w-6 text-brand-orange" />}
                  title="Office Location"
                  details={["123 Design Street", "Mumbai, Maharashtra, India"]}
                />
                <ContactInfo
                  icon={<Phone className="h-6 w-6 text-brand-orange" />}
                  title="Phone Number"
                  details={["+91 7738443636"]}
                />
                <ContactInfo
                  icon={<Mail className="h-6 w-6 text-brand-orange" />}
                  title="Email Address"
                  details={["Jaycrea36@gmail.com", "Portfolio-jcrea.com"]}
                />
                <ContactInfo
                  icon={<Clock className="h-6 w-6 text-brand-orange" />}
                  title="Working Hours"
                  details={["Monday - Friday: 9am - 6pm", "Saturday: 10am - 4pm"]}
                />
              </div>

              <div>
                <h3 className="mb-4 text-xl font-medium">Follow Me</h3>
                <SocialIcons className="text-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl"
          >
            <div className="h-[400px] w-full bg-gray-200">
              {/* This would be replaced with an actual map component */}
              <div className="flex h-full items-center justify-center">
                <p className="text-lg text-gray-500">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
