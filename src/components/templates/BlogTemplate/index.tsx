import type { ReactNode } from "react"
import { SectionHeading } from "@/components/atoms/sectionHeading"

interface BlogTemplateProps {
  title: string
  description?: string
  children: ReactNode
}

export function BlogTemplate({ title, description, children }: BlogTemplateProps) {
  return (
    <div className="container py-16 md:py-24">
      <SectionHeading title={title} className="mb-8" />
      {description && <p className="mb-12 max-w-3xl text-muted-foreground">{description}</p>}
      <div className="mb-12">{children}</div>
    </div>
  )
}
