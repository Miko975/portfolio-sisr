"use client"

import { FileSpreadsheet, Eye, Download } from "lucide-react"

export function E5() {
  return (
    <section id="e5" className="px-6 py-20 scroll-mt-24 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-purple-400">Examen</p>
        <h2 className="text-3xl font-bold text-white tracking-tight italic">Épreuve E5</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Texte explicatif */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-white">Support et mise à disposition de services informatiques</h3>
          <p className="text-zinc-400 leading-relaxed text-sm">
            L’épreuve E5 du BTS Services Informatiques aux Organisations a pour objectif d’évaluer les compétences professionnelles acquises au cours de la formation. Elle se base sur des situations professionnelles réalisées pendant les ateliers, les projets ou les périodes de stage.
          </p>
          <p className="text-zinc-400 leading-relaxed text-sm">
            Lors de cette épreuve, le candidat présente un ensemble de situations professionnelles regroupées dans un tableau de synthèse. Ce tableau met en évidence les compétences mobilisées et les activités réalisées dans le domaine des services informatiques.
          </p>
          <p className="text-zinc-400 leading-relaxed text-sm">
            Le jury s’appuie sur ces éléments afin d’évaluer la capacité du candidat à analyser une situation, à mettre en œuvre des solutions techniques et à justifier ses choix dans un contexte professionnel.
          </p>
        </div>

        {/* Espace pour le Tableau de Synthèse */}
        <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 hover:border-purple-400/40 transition-all shadow-xl">
          <div className="flex flex-col h-full">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-800/50 border border-zinc-700/50 group-hover:scale-110 transition-all mb-6">
              <FileSpreadsheet className="text-purple-400" size={28} />
            </div>
            
            <h4 className="text-lg font-bold text-white mb-2">Tableau de Synthèse</h4>
            <p className="text-xs text-zinc-500 mb-8">Récapitulatif des compétences acquises et des situations professionnelles.</p>
            
            <div className="flex gap-3 mt-auto">
              <a 
                href="/docs/tableau_synthese.pdf" 
                target="_blank" 
                className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-[10px] font-bold uppercase py-3 rounded-xl transition-all"
              >
                <Eye size={14} /> Voir
              </a>
              <a 
                href="/docs/tableau_synthese.pdf" 
                download 
                className="p-3 bg-purple-400/10 hover:bg-purple-400/20 text-purple-400 rounded-xl transition-all border border-purple-400/20"
              >
                <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
