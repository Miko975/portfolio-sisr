import React from 'react'
import { ExternalLink } from 'lucide-react'

const articles = [
  {
    title: "OpenAI Sora : La révolution du texte-en-vidéo",
    description: "Analyse des capacités de Sora à générer des scènes complexes et ultra-réalistes, marquant une étape majeure dans la génération visuelle par IA.",
    date: "Février 2026",
    category: "Innovation",
    source: "OpenAI",
    url: "https://openai.com/sora"
  },
  {
    title: "Midjourney v6 : Le photoréalisme poussé à l'extrême",
    description: "Test des nouvelles fonctionnalités de Midjourney permettant une meilleure compréhension des prompts et un rendu des textures quasi indiscernable du réel.",
    date: "Janvier 2026",
    category: "IA Générative",
    source: "Midjourney",
    url: "https://www.midjourney.com"
  },
  {
    title: "DALL-E 3 et l'intégration dans l'écosystème Microsoft",
    description: "Comment la génération d'images s'est démocratisée via Copilot et Bing, facilitant la création visuelle pour les professionnels.",
    date: "Décembre 2025",
    category: "Outils Pro",
    source: "Microsoft Tech",
    url: "https://www.microsoft.com/en-us/bing"
  },
  {
    title: "Éthique et Copyright : L'encadrement des images IA",
    description: "Le point sur les régulations européennes (AI Act) et les solutions de marquage numérique (watermarking) pour identifier les contenus générés.",
    date: "Novembre 2025",
    category: "Régulation",
    source: "Le Monde Informatique",
    url: "https://www.lemondeinformatique.fr"
  }
]

export const Veille = () => {
  return (
    <section id="veille" className="px-6 py-20 scroll-mt-24 max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-2">Veille Technologique</h3>
          <h2 className="text-3xl font-bold text-white">L'IA Générative d'Images</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <a 
              key={index} 
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)] overflow-hidden block"
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
                  <span className="text-xs text-zinc-500 font-medium italic">Source: {article.source}</span>
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 group-hover:text-cyan-400 transition-colors">
                    VOIR L'ACTU
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
    </section>
  )
}
