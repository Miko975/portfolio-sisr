"use client"

import { useEffect, useRef, useState } from "react"

export function Presentation() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    // L'ID est indispensable ici pour que le lien du menu fonctionne
    <section 
      ref={ref} 
      id="presentation" 
      className="px-6 py-20 scroll-mt-20"
    >
      <div
        className={`mx-auto max-w-4xl transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            {"Présentation"}
          </p>
          
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-3xl">
            {"À propos de moi"}
          </h2>
          
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              {"Actuellement étudiant en BTS SIO (Services Informatiques aux Organisations) avec une spécialisation en SISR (Solutions d'Infrastructure, Systèmes et Réseaux), je me passionne pour le fonctionnement des infrastructures numériques."}
            </p>
            <p>
              {"Mon parcours est guidé par une curiosité constante pour la cybersécurité et l'administration système. J'aime comprendre comment sécuriser les échanges de données et optimiser les performances des réseaux en entreprise."}
            </p>
            <p>
              {"Rigoureux et déterminé, je cherche aujourd'hui à mettre mes compétences théoriques et pratiques au service de projets concrets à travers un stage ou une alternance."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
