import { Github, Linkedin, Mail, Phone } from "lucide-react"

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Titre CONTACT agrandi et plus visible */}
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            {"Contact"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Travaillons ensemble"}
          </h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            {"Vous cherchez un stagiaire ou un alternant motive ? N'hesitez pas a me contacter."}
          </p>

          {/* Réseaux Sociaux */}
          <div className="mt-8 flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-cyan-400/40 hover:text-foreground"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Cartes Contact - Ajustées pour que rien ne dépasse */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/50 text-left overflow-hidden">
              <div className="bg-orange-500/10 p-3 rounded-full shrink-0">
                <Mail className="text-orange-500" size={22} />
              </div>
              <div className="min-w-0"> {/* Le min-w-0 empêche le texte de dépasser */}
                <p className="text-muted-foreground text-[11px] uppercase font-bold tracking-wider mb-1">Email</p>
                <a href="mailto:mikailozturk67000@gmail.com" className="text-orange-500 text-sm md:text-base font-medium hover:underline block truncate">
                  mikailozturk67000@gmail.com
                </a>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/50 text-left">
              <div className="bg-orange-500/10 p-3 rounded-full shrink-0">
                <Phone className="text-orange-500" size={22} />
              </div>
              <div>
                <p className="text-muted-foreground text-[11px] uppercase font-bold tracking-wider mb-1">Téléphone</p>
                <a href="tel:0768691349" className="text-orange-500 text-sm md:text-base font-medium hover:underline">
                  07 68 69 13 49
                </a>
              </div>
            </div>
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
