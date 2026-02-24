"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Shield, Network, Server, Code, BadgeCheck } from "lucide-react"

interface CompetenceCard {
  title: string
  description: string
  image: string
  tags: string[]
  icon: React.ReactNode
  span: string
}

const competences: CompetenceCard[] = [
  {
    title: "Développement",
    description: "Conception d'applications web et scripts avec des technologies front et back modernes.",
    image: "/images/project-3.jpg",
    tags: ["HTML/CSS", "JavaScript", "Python", "SQL"],
    icon: <Code className="h-5 w-5" />,
    span: "col-span-1",
  },
  {
    title: "Sécurité",
    description: "Analyse de risques, conformité réglementaire et audit de sécurité des systèmes d'information.",
    image: "/images/project-1.jpg",
    tags: ["Wireshark", "RGPD", "Analyse risques"],
    icon: <Shield className="h-5 w-5" />,
    span: "col-span-1",
  },
  {
    title: "Réseau",
    description: "Configuration et administration d'infrastructures réseau complètes.",
    image: "/images/project-2.jpg",
    tags: ["TCP/IP", "Virtualisation", "Pare-feu", "DNS/DHCP"],
    icon: <Network className="h-5 w-5" />,
    span: "col-span-1",
  },
  {
    title: "Systèmes",
    description: "Déploiement, gestion et maintenance de serveurs en environnement professionnel.",
    image: "/images/project-4.jpg",
    tags: ["Linux", "Windows Server", "Bash", "Maintenance"],
    icon: <Server className="h-5 w-5" />,
    span: "col-span-1",
  },
]

const certifications = [
  { title: "PIX", subtitle: "Competences numeriques" },
  { title: "RGPD", subtitle: "CNIL" },
  { title: "SecNumAcademie", subtitle: "ANSSI" },
  { title: "NetAcad", subtitle: "CISCO" }
]

function BentoCard({ card, index }: { card: CompetenceCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
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
    <div
      ref={ref}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_-12px] hover:shadow-cyan-400/10 ${card.span} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground md:text-xl">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                {card.icon}
              </span>
              {card.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-secondary/60 px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BentoGrid() {
  return (
    <section id="competences" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            {"Compétences"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-3xl">
            {"Expertise Technique"}
          </h2>
        </div>

        {/* Grille des compétences principales */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ gridAutoRows: '260px' }}>
          {competences.map((card, i) => (
            <BentoCard key={card.title} card={card} index={i} />
          ))}
        </div>

        {/* Sous-titre pour les Certifications */}
        <div className="mt-16 mb-8 flex flex-col items-center">
             <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold">Certifications</h3>
        </div>

        {/* Grille des Certifications intégrée en dessous */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl border border-border bg-card/30 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-cyan-400/40"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 shadow-[0_0_15px_-5px_rgba(6,182,212,0.4)] transition-transform group-hover:scale-110">
                <BadgeCheck size={20} />
              </div>
              
              <h4 className="text-sm font-bold text-white mb-0.5 uppercase tracking-tight">
                {cert.title}
              </h4>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                {cert.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// Mise à jour design
