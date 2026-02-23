"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Wrench, ShieldCheck, Network, Server, Code2, ShieldAlert, Cloud, Newspaper, Cpu } from "lucide-react"

const traits = [
{ label: "Curieux", description: "J'aime apprendre et explorer de nouvelles technologies.", icon: <Search className="h-5 w-5" /> },
{ label: "Pragmatique", description: "Je prefere les solutions concretes et testees.", icon: <Wrench className="h-5 w-5" /> },
{ label: "Rigoureux", description: "La securite et la qualite sont mes priorites.", icon: <ShieldCheck className="h-5 w-5" /> },
]

const projects = [
{ title: "Mise en place d'un réseau local", category: "Infrastructure", description: "Configuration d'un petit réseau avec routeur, switch et 3 postes clients.", icon: <Network className="h-6 w-6" /> },
{ title: "Installation d'un serveur web", category: "Infrastructure", description: "Installation d'Apache sur Linux et configuration des droits d'accès.", icon: <Server className="h-6 w-6" /> },
{ title: "Création d'un site web entreprise", category: "Développement", description: "Développement d'un site vitrine responsive avec formulaire de contact.", icon: <Code2 className="h-6 w-6" /> },
]

const veille = [
{ title: "Vulnérabilité OpenSSL", date: "Février 2026", category: "Sécurité", source: "NIST", description: "Mise à jour urgente disponible pour OpenSSL 3.0.", icon: <ShieldAlert className="h-5 w-5" /> },
{ title: "Windows 11 - Sécurité", date: "Février 2026", category: "Sécurité", source: "Microsoft", description: "Nouvelles protections contre les malwares.", icon: <Cpu className="h-5 w-5" /> },
{ title: "Cloud Computing", date: "Janvier 2026", category: "Tendance", source: "IDC", description: "Adoption croissante du cloud par les PME.", icon: <Cloud className="h-5 w-5" /> },
{ title: "Python 3.13", date: "Janvier 2026", category: "Développement", source: "Python.org", description: "Optimisations significatives de performance.", icon: <Newspaper className="h-5 w-5" /> },
]

export function Presentation() {
const ref = useRef<HTMLElement>(null)
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
const observer = new IntersectionObserver(([entry]) => {
if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
}, { threshold: 0.1 })
if (ref.current) observer.observe(ref.current)
return () => observer.disconnect()
}, [])

return (
<section ref={ref} id="presentation" className="px-6 py-24 md:py-32">
<div className={mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}}>
<div className="mb-16">
<p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">{"Qui suis-je"}</p>
<h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{"Presentation"}</h2>
</div>
<div className="grid gap-12 md:grid-cols-5 mb-24">
<div className="md:col-span-3 text-lg text-muted-foreground leading-relaxed">
{"Je suis en 2eme annee de BTS SIO option SISR au Lycee Rene Cassin."}
</div>
<div className="md:col-span-2 flex flex-col gap-4">
{traits.map((t) => (
<div key={t.label} className="border border-border bg-card p-6 rounded-2xl">
<div className="flex items-center gap-3 mb-2">
<span className="text-accent">{t.icon}</span>
<h3 className="font-bold">{t.label}</h3>
</div>
<p className="text-sm text-muted-foreground">{t.description}</p>
</div>
))}
</div>
</div>
<div className="mb-12">
<h2 className="text-3xl font-bold mb-8">{"Mes Projets"}</h2>
<div className="grid gap-6 md:grid-cols-3 mb-24">
{projects.map((p, i) => (
<div key={i} className="border border-border bg-card p-8 rounded-2xl">
<div className="text-accent mb-4">{p.icon}</div>
<h3 className="font-bold mb-2">{p.title}</h3>
<p className="text-sm text-muted-foreground">{p.description}</p>
</div>
))}
</div>
</div>
<div className="mb-12">
<h2 className="text-3xl font-bold mb-8">{"Veille Technologique"}</h2>
<div className="grid gap-6 md:grid-cols-2">
{veille.map((v, i) => (
<div key={i} className="border border-border bg-card/50 p-6 rounded-xl">
<div className="flex justify-between mb-4">
<div className="flex items-center gap-2">
<span className="text-accent">{v.icon}</span>
<h3 className="font-bold">{v.title}</h3>
</div>
<span className="text-xs text-muted-foreground">{v.date}</span>
</div>
<p className="text-sm text-muted-foreground mb-2">{v.description}</p>
<p className="text-xs italic text-accent">{"Source: " + v.source}</p>
</div>
))}
</div>
</div>
</div>
</section>
)
}
