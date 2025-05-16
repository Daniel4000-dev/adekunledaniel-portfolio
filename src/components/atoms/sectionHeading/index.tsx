import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  highlightedWord?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ title, subtitle, highlightedWord, className, align = "left" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  const highlightedTitle = highlightedWord
    ? title.replace(highlightedWord, `<span class="text-brand-orange">${highlightedWord}</span>`)
    : title

  return (
    <div className={cn("space-y-2", alignmentClasses[align], className)}>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      <h2
        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        dangerouslySetInnerHTML={{ __html: highlightedTitle }}
      />
    </div>
  )
}
