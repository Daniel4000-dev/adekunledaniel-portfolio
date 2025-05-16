"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface NavLink {
  href: string
  label: string
}

interface NavLinksProps {
  className?: string
  linkClassName?: string
  vertical?: boolean
}

export function NavLinks({ className, linkClassName, vertical = false }: NavLinksProps) {
  const pathname = usePathname()

  const links: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/resume", label: "Resume" },
    { href: "/project", label: "Project" },
    { href: "/contact", label: "Contact" },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.nav className={className} variants={container} initial="hidden" animate="visible">
      <ul className={cn("flex gap-6", vertical ? "flex-col" : "flex-row")}>
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <motion.li key={link.href} variants={item}>
              <Link
                href={link.href}
                className={cn(
                  "relative transition-colors hover:text-brand-orange",
                  isActive ? "text-brand-orange font-medium" : "text-foreground",
                  linkClassName,
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-brand-orange"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
