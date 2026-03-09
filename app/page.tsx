import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Presentation } from "@/components/presentation"
import { BentoGrid } from "@/components/bento-grid"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { E5 } from "@/components/e5" // <-- NOUVEL IMPORT
import { Veille } from "@/components/veille" 
import { About } from "@/components/about"
import { Documents } from "@/components/documents"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <div className="flex flex-col gap-32 md:gap-40 pb-20">
        <Presentation />
        <BentoGrid />
        <Projects />
        <Experience />
        
        {/* Section E5 insérée ici */}
        <E5 /> 
        
        <Veille />
        <About />
        
        <Documents /> 
        
        <Footer />
      </div>
    </main>
  )
}
