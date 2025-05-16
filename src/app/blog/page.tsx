import { BlogSection } from "@/components/organisms/blogSection";
import { BlogTemplate } from "@/components/templates/BlogTemplate";
import { MainLayout } from "@/components/templates/MainTemplate";

export default function BlogPage() {
  return (
    <MainLayout>
      <BlogTemplate
        title="My Blog"
        description="Thoughts, insights, and case studies from my experience as a product designer."
      >
        <BlogSection />
      </BlogTemplate>
    </MainLayout>
  )
}
