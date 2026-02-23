import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Presentation } from "@/components/presentation"
import { BentoGrid } from "@/components/bento-grid"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Presentation />
      <BentoGrid />
      <About />
      <Footer />
    </main>
  )
}
