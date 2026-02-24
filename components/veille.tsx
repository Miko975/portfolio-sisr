import React from 'react'
import { ExternalLink } from 'lucide-react'

const articles = [
  {
    title: "Vulnérabilité Critique dans OpenSSL",
    description: "Mise à jour urgente disponible pour OpenSSL 3.0. Tous les administrateurs doivent appliquer le patch immédiatement.",
    date: "Février 2026",
    category: "Sécurité",
    source: "NIST"
  },
  {
    title: "Windows 11 - Nouvelles Fonctionnalités de Sécurité",
    description: "Microsoft introduit de nouvelles protections contre les malwares et améliore la gestion des mises à jour de sécurité.",
    date: "Février 2026",
    category: "Sécurité",
    source: "Microsoft"
  },
  {
    title: "Tendance : Adoption du Cloud Computing",
    description: "Les PME adoptent de plus en plus les solutions cloud pour réduire les coûts d'infrastructure IT.",
    date: "Janvier 2026",
    category: "Tendance",
    source: "IDC"
  },
  {
    title: "Python 3.13 - Améliorations de Performance",
    description: "Nouvelle version de Python avec optimisations significatives et nouvelles fonctionnalités pour les développeurs.",
    date: "Janvier 2026",
    category: "Développement",
    source: "Python.org"
  }
]

export const Veille = () => {
  return (
    <section id="veille" className="px-6 scroll-mt-24 max-w-6xl mx-auto">
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-2">Veille Technologique</h3>
        <h2 className="text-3xl font-bold mb-12 text-white">Actualités IT</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)] overflow-hidden"
            >
              {/* Effet de lumière Cyan au survol */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-[50px] transition-all group-hover:bg-cyan-500/20" />
              
              <div className="relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-950/10">
                    {article.category}
                  </span>
                  <span className="text-xs text-zinc-500">{article.date}</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h4>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {article.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-zinc-800/50">
                  <span className="text-xs text-zinc-500 font-medium">Source: {article.source}</span>
                  <ExternalLink size={14} className="text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
