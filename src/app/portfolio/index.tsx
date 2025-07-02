"use client"

import { Navbar } from "@/components/organisms/navbar"
import { Footer } from "@/components/organisms/footer"
import { SectionHeading } from "@/components/atoms/sectionHeading"
import { PortfolioSection } from "@/components/organisms/portfolioSection"
import { ServiceBanner } from "@/components/molecules/serviceBarnner"

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <div className="container py-16 md:py-24">
          <SectionHeading title="My Portfolio" className="mb-8" />
          <p className="mb-12 max-w-3xl text-muted-foreground">
            Explore my latest projects and design work across various industries and platforms.
          </p>
          <div className="mb-12">
            <PortfolioSection />
          </div>
        </div>
      </main>
      <ServiceBanner />
      <Footer />
    </>
  )
}
