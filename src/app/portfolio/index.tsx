import { PortfolioSection } from "@/components/organisms/portfolioSection";
import { MainLayout } from "@/components/templates/MainTemplate";
import { PortfolioTemplate } from "@/components/templates/PortfolioTemplate";

export default function PortfolioPage() {
  return (
    <MainLayout>
      <PortfolioTemplate
        title="My Portfolio"
        description="Explore my latest projects and design work across various industries and platforms."
      >
        <PortfolioSection />
      </PortfolioTemplate>
    </MainLayout>
  )
}
