import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Presentation } from "@/components/presentation"
import { BentoGrid } from "@/components/bento-grid"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      {/* On garde le Hero tel quel car il occupe déjà beaucoup d'espace */}
      <Hero />
      
      {/* On crée un conteneur pour tout le reste avec un espacement (gap) important */}
      <div className="flex flex-col gap-32 md:gap-40 pb-20">
        <Presentation />
        <BentoGrid />
        
        {/* Ajout de la nouvelle section Projets ici */}
        <Projects />
        
        <About />
        <Footer />
      </div>
    </main>
  )
}
