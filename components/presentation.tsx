"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Wrench, ShieldCheck, Network, Server, Code2 } from "lucide-react"

const traits = [
{
label: "Curieux",
description: "J'aime apprendre et explorer de nouvelles technologies pour ameliorer mes competences.",
icon: <Search className="h-5 w-5" />,
},
{
label: "Pragmatique",
description: "Je prefere les solutions concretes et testees plutot que les theories complexes.",
icon: <Wrench className="h-5 w-5" />,
},
{
label: "Rigoureux",
description: "La securite et la qualite sont mes priorites dans chaque projet.",
icon: <ShieldCheck className="h-5 w-5" />,
},
]

const projects = [
{
title: "Mise en place d'un réseau local",
category: "Infrastructure",
description: "Configuration d'un petit réseau avec routeur, switch et 3 postes clients. Mise en place du DHCP et des partages de fichiers.",
icon: <Network className="h-6 w-6" />,
},
{
title: "Installation d'un serveur web",
category: "Infrastructure",
description: "Installation d'Apache sur Linux, configuration des droits d'accès et création d'un site web simple.",
icon: <Server className="h-6 w-6" />,
},
{
title: "Création d'un site web entreprise",
category: "Développement",
description: "Développement d'un site vitrine responsive pour une petite entreprise avec design responsive et formulaire de contact.",
icon: <Code2 className="h-6 w-6" />,
},
]

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
<section ref={ref} id="presentation" className="px-6 py-24 md:py-32">
<div className={mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}}>

) }