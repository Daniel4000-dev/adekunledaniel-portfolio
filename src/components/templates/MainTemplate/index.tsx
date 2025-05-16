import { ServiceBanner } from "@/components/molecules/serviceBarnner"
import { Footer } from "@/components/organisms/footer"
import { Navbar } from "@/components/organisms/navbar"
import type { ReactNode } from "react"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">{children}</main>
      <ServiceBanner />
      <Footer />
    </>
  )
}
