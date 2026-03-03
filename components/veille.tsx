import React from 'react'
import { ExternalLink } from 'lucide-react'

const articles = [
  {
    title: "OpenAI Sora : Création de vidéo à partir de texte",
    description: "Documentation officielle présentant les capacités du modèle Sora à générer des vidéos réalistes de 60 secondes en respectant la cohérence physique.",
    date: "Mars 2026",
    category: "Innovation",
    source: "OpenAI Blog",
    url: "https://openai.com/research/video-generation-models-as-world-simulators"
  },
  {
    title: "Midjourney v6 : Améliorations du Modèle",
    description: "Notes de version sur le photoréalisme accru, la compréhension des prompts complexes et la capacité inédite à générer du texte lisible dans les images.",
    date: "Janvier 2026",
    category: "IA Générative",
    source: "Midjourney Documentation",
    url: "https://docs.midjourney.com/docs/model-versions"
  },
  {
    title: "DALL-E 3 : Intégration et Sécurité",
    description: "Présentation du système DALL-E 3, son intégration native dans ChatGPT et les mesures de sécurité contre les contenus inappropriés.",
    date: "Décembre 2025",
    category: "Outils Pro",
    source: "OpenAI Product",
    url: "https://openai.com/dall-e-3"
  },
  {
    title: "IA Act : Le cadre légal européen",
    description: "Synthèse officielle de la première loi au monde sur l'intelligence artificielle, classant les risques et encadrant les systèmes génératifs.",
    date: "Novembre 2025",
    category: "Régulation",
    source: "Parlement Européen",
    url: "https://www.europarl.europa.eu/news/fr/headlines/society/20230601STO93804/loi-sur-l-ia-de-l-ue-premiere-reglementation-de-l-intelligence-artificielle"
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
                    CONSULTER
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
