"use client"

import { Logo } from "@/components/atoms/logo"
import { NavLinks } from "@/components/molecules/navLinks"
import { SocialIcons } from "@/components/atoms/icon/socialIcons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container py-16">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="mb-8 text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Lets Connect there
          </motion.h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-brand-orange hover:bg-brand-orange/90">
              Hire me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.hr
          className="mb-12 border-gray-800"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Logo />
            <p className="mt-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
            <SocialIcons className="mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-bold text-brand-orange">Navigation</h3>
            <NavLinks vertical linkClassName="text-gray-400 hover:text-brand-orange" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-bold text-brand-orange">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <motion.li whileHover={{ x: 5, color: "#FF7A30" }} transition={{ duration: 0.2 }}>
                +91 7738443636
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#FF7A30" }} transition={{ duration: 0.2 }}>
                Jaycrea36@gmail.com
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#FF7A30" }} transition={{ duration: 0.2 }}>
                Portfolio-jcrea.com
              </motion.li>
            </ul>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-bold">Get the latest information</h3>
              <motion.div className="flex" whileHover={{ scale: 1.02 }}>
                <Input type="email" placeholder="Email Address" className="rounded-r-none bg-transparent text-white" />
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button className="rounded-l-none bg-brand-orange hover:bg-brand-orange/90">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.hr
          className="my-12 border-gray-800"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">Copyright© 2023 Jayesh. All Rights Reserved.</p>
          <div className="text-sm text-gray-400">
            <motion.span whileHover={{ color: "#FF7A30" }}>User Terms & Conditions | Privacy Policy</motion.span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
