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
          <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-accent">
            {"Contact"}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {"Travaillons ensemble"}
          </h2>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            {"Vous cherchez un stagiaire ou un alternant motive ? N'hesitez pas a me contacter."}
          </p>

          {/* Réseaux Sociaux */}
          <div className="mt-6 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-accent/40 hover:bg-secondary hover:text-foreground"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Cartes Contact - Taille intermédiaire */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
            {/* Email */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/50 text-left">
              <div className="bg-orange-500/10 p-2.5 rounded-full">
                <Mail className="text-orange-500" size={20} />
              </div>
              <div>
                <p className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider leading-none mb-1">Email</p>
                <a href="mailto:mikailozturk67000@gmail.com" className="text-orange-500 text-[13px] font-medium hover:underline">
                  mikailozturk67000@gmail.com
                </a>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/50 text-left">
              <div className="bg-orange-500/10 p-2.5 rounded-full">
                <Phone className="text-orange-500" size={20} />
              </div>
              <div>
                <p className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider leading-none mb-1">Téléphone</p>
                <a href="tel:0768691349" className="text-orange-500 text-[13px] font-medium hover:underline">
                  07 68 69 13 49
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            {"Mikail Ozturk \u00B7 2026 \u00B7 Portfolio SISR"}
          </p>
        </div>
      </div>
    </footer>
  )
}
