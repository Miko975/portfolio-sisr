"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Shield, Network, Server, Code } from "lucide-react"

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
    title: "Developpement",
    description: "Conception d'applications web et scripts avec des technologies front et back modernes.",
    image: "/images/project-3.jpg",
    tags: ["HTML/CSS", "JavaScript", "Python", "SQL"],
    icon: <Code className="h-5 w-5" />,
    span: "col-span-1",
  },
  {
    title: "Securite",
    description: "Analyse de risques, conformite reglementaire et audit de securite des systemes d'information.",
    image: "/images/project-1.jpg",
    tags: ["Wireshark", "RGPD", "Analyse risques"],
    icon: <Shield className="h-5 w-5" />,
    span: "col-span-1",
  },
  {
    title: "Reseau",
    description: "Configuration et administration d'infrastructures reseau completes.",
    image: "/images/project-2.jpg",
    tags: ["TCP/IP", "Virtualisation", "Pare-feu", "DNS/DHCP"],
    icon: <Network className="h-5 w-5" />,
    span: "col-span-1",
  },
  {
    title: "Systemes",
    description: "Deploiement, gestion et maintenance de serveurs en environnement professionnel.",
    image: "/images/project-4.jpg",
    tags: ["Linux", "Windows Server", "Bash", "Maintenance"],
    icon: <Server className="h-5 w-5" />,
    span: "col-span-1",
  },
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
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_-12px] hover:shadow-accent/10 ${card.span} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
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

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground md:text-xl">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                {card.icon}
              </span>
              {card.title}
            </h3>
            <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {card.description}
            </p>
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
    <section id="competences" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Competences"}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ gridAutoRows: '280px' }}>
          {competences.map((card, i) => (
            <BentoCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
