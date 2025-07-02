"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { personalInfo } from "@/data/personalInfo"

interface SocialIconsProps {
  className?: string
  variant?: "default" | "filled"
  size?: "sm" | "md" | "lg"
}

export function SocialIcons({ className, variant = "default", size = "md" }: SocialIconsProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const baseClasses = cn(
    "flex items-center justify-center rounded-full transition-all duration-300",
    sizeClasses[size],
    variant === "filled"
      ? "bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white hover:scale-110"
      : "border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:scale-110",
  )

  return (
    <div className={cn("flex gap-4", className)}>
      <a
        href={personalInfo.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        aria-label="GitHub"
      >
        <Github className={iconSizes[size]} />
      </a>

      <a
        href={personalInfo.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        aria-label="LinkedIn"
      >
        <Linkedin className={iconSizes[size]} />
      </a>

      <a href={personalInfo.social.email} className={baseClasses} aria-label="Email">
        <Mail className={iconSizes[size]} />
      </a>

      {personalInfo.social.twitter && (
        <a
          href={personalInfo.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          aria-label="Twitter"
        >
          <Twitter className={iconSizes[size]} />
        </a>
      )}
    </div>
  )
}
