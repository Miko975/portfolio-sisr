"use client"

import { useEffect, useState } from "react"

const links = [
  { label: "Presentation", href: "#presentation" },
  { label: "Competences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Expérience", href: "#experience" },
  { label: "E5", href: "#e5" }, // <-- AJOUTÉ ICI ENTRE EXPÉRIENCE ET VEILLE
  { label: "Veille", href: "#veille" },
  { label: "Parcours", href: "#parcours" },
  { label: "Documents", href: "#documents" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground whitespace-nowrap">
          {"Mikail Ozturk"}
          <span className="text-cyan-400">{"."}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
