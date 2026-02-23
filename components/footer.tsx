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
<div className="mt-12 flex items-center gap-4">
{socials.map((social) => (
<a
key={social.label}
href={social.href}
target="_blank"
rel="noopener noreferrer"
aria-label={social.label}
className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-accent/40 hover:bg-secondary hover:text-foreground"
>
<social.icon className="h-4.5 w-4.5" />
</a>
))}
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-center border-t border-border pt-8">
<p className="text-sm text-muted-foreground">
{"Mikail Ozturk \u00B7 2026 \u00B7 Portfolio SISR"}
</p>
</div>
</div>
</footer>
)
}
