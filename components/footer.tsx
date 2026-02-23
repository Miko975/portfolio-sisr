import { Github, Linkedin, Mail, Phone } from "lucide-react"

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: Github }, // Mets ton lien entre les ""
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin }, // Mets ton lien entre les ""
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

          {/* Section Réseaux Sociaux */}
          <div className="mt-8 flex items-center gap-4">
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

          {/* NOUVELLE SECTION : Email et Téléphone */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/50 text-left">
              <div className="bg-orange-500/10 p-3 rounded-full">
                <Mail className="text-orange-500" size={24} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Email</p>
                <a href="mailto:mikailozturk67000@gmail.com" className="text-orange-500 font-medium hover:underline break-all">
                  mikailozturk67000@gmail.com
                </a>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/50 text-left">
              <div className="bg-orange-500/10 p-3 rounded-full">
                <Phone className="text-orange-500" size={24} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Téléphone</p>
                <a href="tel:0768691349" className="text-orange-500 font-medium hover:underline">
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
