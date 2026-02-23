import { Github, Linkedin } from "lucide-react"

const socials = [
{ label: "GitHub", href: "", icon: Github },
{ label: "LinkedIn", href: "", icon: Linkedin },
]

export function Footer() {
return (
<footer id="contact" className="border-t border-border px-6 py-16 md:py-24">
<div className="mx-auto max-w-6xl">
<div className="flex flex-col items-center text-center">
<p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
{"Contact"}
</p>
<h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
{"Travaillons ensemble"}
</h2>
<p className="mt-4 max-w-md text-base text-muted-foreground">
{"Vous cherchez un stagiaire ou un alternant motive en administration systemes et reseaux ? N'hesitez pas a me contacter."}
</p>

) }