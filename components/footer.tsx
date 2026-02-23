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
          
          {/* TITRE CONTACT : Plus grand et bien bleu */}
          <p className="mb-4 text-base font-black uppercase tracking-[0.3em] text-cyan-400">
            {"Contact"}
          </p>
          
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Travaillons ensemble"}
          </h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            {"Vous cherchez un stagiaire ou un alternant motivé ? N'hesitez pas à me contacter."}
          </p>

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

          {/* Cartes Contact - Élargies pour l'email */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            
            {/* Email - Sans lien, juste du texte */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card/50 text-left">
              <div className="bg-orange-500/10 p-3 rounded-full shrink-0">
                <Mail className="text-orange-500" size={24} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-1">Email</p>
                <span className="text-orange-500 text-base md:text-lg font-semibold whitespace-nowrap">
                  mikailozturk67000@gmail.com
                </span>
              </div>
            </div>

            {/* Téléphone - Sans lien, juste du texte */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card/50 text-left">
              <div className="bg-orange-500/10 p-3 rounded-full shrink-0">
                <Phone className="text-orange-500" size={24} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-1">Téléphone</p>
                <span className="text-orange-500 text-base md:text-lg font-semibold">
                  07 68 69 13 49
                </span>
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
