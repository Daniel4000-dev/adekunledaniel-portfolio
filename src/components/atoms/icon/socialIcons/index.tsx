import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"

interface SocialIconsProps {
  className?: string
}

export function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link href="#" aria-label="Facebook">
        <Facebook className="h-5 w-5 text-white" />
      </Link>
      <Link href="#" aria-label="Youtube">
        <Youtube className="h-5 w-5 text-white" />
      </Link>
      <Link href="#" aria-label="Instagram">
        <Instagram className="h-5 w-5 text-white" />
      </Link>
      <Link href="#" aria-label="Twitter">
        <Twitter className="h-5 w-5 text-white" />
      </Link>
      <Link href="#" aria-label="LinkedIn">
        <Linkedin className="h-5 w-5 text-white" />
      </Link>
    </div>
  )
}
