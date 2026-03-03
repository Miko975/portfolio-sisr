"use client"

import { Briefcase, MapPin, Globe, Users, ShieldCheck, Wrench, Monitor, ShoppingCart, Star, Info } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 scroll-mt-24 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
          Expérience Professionnelle
        </p>
        <h2 className="text-3xl font-bold text-white tracking-tight">Stage en ESN</h2>
      </div>

      <div className="space-y-12">
        {/* CARTE PRINCIPALE DU POSTE */}
        <div className="rounded-3xl border border-border bg-card p-8 hover:border-cyan-400/30 transition-all duration-500 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h4 className="text-2xl font-bold text-foreground">Technicien Support Informatique</h4>
              <p className="text-cyan-400 font-semibold mt-1">AMR Informatique · Stage (10 semaines)</p>
            </div>
            <span className="text-xs font-bold text-muted-foreground bg-secondary px-4 py-2 rounded-full border border-border">
              SESSION 2024 - 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50">
              <ShieldCheck className="text-cyan-400 mb-3" size={20} />
              <h5 className="font-bold text-sm mb-2 text-white">Maintenance</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">Dépannage matériel sur PC et serveurs, diagnostic et remplacement de composants.</p>
            </div>
            <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50">
              <Monitor className="text-cyan-400 mb-3" size={20} />
              <h5 className="font-bold text-sm mb-2 text-white">Solutions Clients</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">Audit de parcs, installation et configuration de solutions logicielles sur site.</p>
            </div>
            <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50">
              <Globe className="text-cyan-400 mb-3" size={20} />
              <h5 className="font-bold text-sm mb-2 text-white">Réseau & Sécurité</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">Configuration de réseaux locaux (LAN) et sécurisation des données clients.</p>
            </div>
          </div>
        </div>

        {/* SECTION PRÉSENTATION ENTREPRISE DÉTAILLÉE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Bloc : Qui sont-ils ? */}
          <div className="rounded-3xl border border-border bg-card/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-400/10 rounded-lg">
                <Info className="text-cyan-400" size={20} />
              </div>
              <h4 className="text-xl font-bold text-white">Focus Entreprise</h4>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-2">Identité</p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  <strong className="text-white">AMR Informatique</strong> (Applications Micro Réseau) est un acteur local historique fondé en <span className="text-cyan-400">1994</span>. Avec plus de 30 ans d'expertise, l'entreprise s'est imposée dans le conseil et la maintenance informatique en Alsace.
                </p>
              </div>
              
              <div className="flex gap-8">
                <div>
                  <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-1">Localisation</p>
                  <p className="text-sm text-zinc-300">Ostwald (67)</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-1">Effectif & Cible</p>
                  <p className="text-sm text-zinc-300">PME, Indépendants & Particuliers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc : Services & Vente */}
          <div className="rounded-3xl border border-border bg-card/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-400/10 rounded-lg">
                <Wrench className="text-cyan-400" size={20} />
              </div>
              <h4 className="text-xl font-bold text-white">Services & Expertise</h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Vente de matériel
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Assemblage sur mesure
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Formation utilisateur
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Audit SI
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Création Web
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Support Helpdesk
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500 fill-yellow-500" size={14} />
                <span className="text-xs font-bold text-white">Excellente réputation locale</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users size={14} />
                <span className="text-[10px] uppercase font-bold tracking-tighter">Multi-secteur</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
