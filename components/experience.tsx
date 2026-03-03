import React from 'react'
import { Briefcase, MapPin, Globe, Users } from 'lucide-react'

export const Experience = () => {
  return (
    <section id="experience" className="px-6 py-20 scroll-mt-24 max-w-6xl mx-auto">
      <div className="mb-12">
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-2">Expériences Professionnelles</h3>
        <h2 className="text-3xl font-bold text-white">Mon Stage en ESN</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne de gauche : Détails du stage */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-cyan-500/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-2xl font-bold text-white">Technicien Support Informatique</h4>
                <p className="text-cyan-400 font-medium">AMR Informatique · Stage (10 semaines)</p>
              </div>
              <span className="text-sm text-zinc-500 bg-zinc-800/50 px-4 py-2 rounded-full w-fit">
                2024 - 2026
              </span>
            </div>

            <ul className="space-y-4 text-zinc-400">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Dépannage et maintenance de matériels informatiques (PC et serveurs).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Audit et installation de solutions informatiques directement chez les clients.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Configuration de réseaux locaux et mise en place de mesures de sécurité.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Support client et assistance technique (Helpdesk).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Colonne de droite : Carte de l'entreprise */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-zinc-800 bg-cyan-950/5 p-8">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Users size={20} className="text-cyan-400" />
              À propos de l'entreprise
            </h4>
            
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-zinc-500 uppercase text-[10px] font-bold tracking-widest mb-1">Nom Complet</p>
                <p className="text-zinc-300">AMR Informatique (Applications Micro Réseau Informatique)</p>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-cyan-400 shrink-0" size={18} />
                <div>
                  <p className="text-zinc-500 uppercase text-[10px] font-bold tracking-widest mb-1">Localisation</p>
                  <p className="text-zinc-300">38 Rue du Général Leclerc, 67540 Ostwald</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="text-cyan-400 shrink-0" size={18} />
                <div>
                  <p className="text-zinc-500 uppercase text-[10px] font-bold tracking-widest mb-1">Activité</p>
                  <p className="text-zinc-300">Conseil, maintenance et vente de matériel informatique depuis plus de 30 ans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
