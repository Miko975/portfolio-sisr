"use client"

import { Briefcase, MapPin, Globe, Users, ShieldCheck } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 scroll-mt-24 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
          Expérience Professionnelle
        </p>
        <h2 className="text-3xl font-bold text-white tracking-tight">Stage en ESN</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border border-border bg-card p-8 hover:border-cyan-400/30 transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-foreground">Technicien Support Informatique</h4>
                <p className="text-cyan-400 font-semibold mt-1">AMR Informatique · Stage (10 semaines)</p>
              </div>
              <span className="text-xs font-bold text-muted-foreground bg-secondary px-4 py-2 rounded-full border border-border">
                SESSION 2024 - 2026
              </span>
            </div>

            <div className="grid gap-6 text-sm">
              <div className="flex gap-4">
                <div className="mt-1 bg-cyan-400/10 p-1.5 rounded-lg h-fit text-cyan-400">
                  <ShieldCheck size={16} />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Maintenance & Infrastructure :</strong> Dépannage matériel sur PC et serveurs, diagnostic de pannes et remplacement de composants défectueux.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-cyan-400/10 p-1.5 rounded-lg h-fit text-cyan-400">
                  <ShieldCheck size={16} />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Solutions Clients :</strong> Audit de parcs informatiques, installation et configuration de solutions logicielles et matérielles directement sur site ou en atelier.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-cyan-400/10 p-1.5 rounded-lg h-fit text-cyan-400">
                  <ShieldCheck size={16} />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Réseau & Sécurité :</strong> Configuration de réseaux locaux (LAN), gestion des accès et mise en place de mesures de protection des données.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h4 className="text-foreground font-bold mb-6 flex items-center gap-3">
              <Users size={18} className="text-cyan-400" />
              L'Entreprise d'accueil
            </h4>
            
            <div className="space-y-5 text-sm">
              <div>
                <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-1.5">Nom</p>
                <p className="text-foreground font-medium italic">AMR Informatique (Applications Micro Réseau)</p>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-1.5">Adresse</p>
                  <p className="text-foreground text-xs leading-relaxed">38 Rue du Général Leclerc<br/>67540 Ostwald</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-1.5">Profil</p>
                  <p className="text-foreground text-xs leading-relaxed">Expert local depuis 1994 (30 ans d'activité) dans le conseil et la maintenance de systèmes complexes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
