"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Wrench, ShieldCheck, Network, Server, Code2, ShieldAlert, Cloud, Newspaper, Cpu } from "lucide-react"

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
<p className="mt-4 text-lg text-muted-foreground">{"Je suis en 2eme annee de BTS SIO option SISR au Lycee Rene Cassin."}</p>
</div>

)
}
