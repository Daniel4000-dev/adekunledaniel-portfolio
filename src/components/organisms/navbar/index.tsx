"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/atoms/logo"
// import { NavLinks } from "@/components/molecules/navLinks"
// import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Navbar() {
  // const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 px-4",
        isScrolled ? "bg-sky-200 backdrop-blur-md py-2" : "bg-sky-200/90 py-4",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        {/* <NavLinks className="hidden md:block" /> */}

        {/* Mobile Menu Button */}
        {/* <motion.button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </motion.button> */}
      </div>

      {/* Mobile Navigation */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 top-full w-full bg-black p-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavLinks vertical className="bg-sky-200"/>
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.header>
  )
}
