import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { StatsSection } from "@/components/stats-section"
import { MaterialSection } from "@/components/material-section"
import { CoursesCarousel } from "@/components/courses-carousel"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <StatsSection />
      <MaterialSection />
      <CoursesCarousel />
      <ContactForm />
      <Footer />
    </main>
  )
}
