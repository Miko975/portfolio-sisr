import React from 'react'
import { ExternalLink, Info } from 'lucide-react'

const articles = [
  {
    title: "OpenAI Sora : La révolution du texte-en-vidéo",
    description: "Analyse des capacités de Sora à générer des scènes complexes et ultra-réalistes, marquant une étape majeure dans la génération visuelle par IA.",
    date: "Février 2026",
    category: "Innovation",
    source: "OpenAI News",
    url: "https://openai.com/sora"
  },
  {
    title: "Midjourney : Documentation et Modèles",
    description: "Accès à la documentation officielle de Midjourney détaillant les versions du modèle (V1 à V6) et les guides d'utilisation technique.",
    date: "Janvier 2026",
    category: "IA Générative",
    source: "Midjourney Help",
    url: "https://docs.midjourney.com/"
  },
  {
    title: "DALL-E 3 : L'IA créative s'invite dans Microsoft Copilot",
    description: "Comment Microsoft a démocratisé la génération d'images haute définition en l'intégrant directement dans ses outils de travail quotidiens.",
    date: "Décembre 2025",
    category: "Outils Pro",
    source: "OpenAI Product",
    url: "https://openai.com/dall-e-3"
  },
  {
    title: "Éthique et Copyright : L'encadrement des images IA",
    description: "Le point sur les régulations européennes (AI Act) et les solutions de marquage numérique pour identifier les contenus générés.",
    date: "Novembre 2025",
    category: "Régulation",
    source: "Europarl",
    url: "https://www.europarl.europa.eu/news/fr/headlines/society/20230601STO93804/loi-sur-l-ia-de-l-ue-premiere-reglementation-de-l-intelligence-artificielle"
  }
]

export const Veille = () => {
  return (
    <section id="veille" className="px-6 py-20 scroll-mt-24 max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-2">Veille Technologique</h3>
          <h2 className="text-3xl font-bold text-white mb-8">L'IA Générative d'Images</h2>
          
          {/* Nouveau bloc d'explication pour le jury */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/10 p-2 rounded-lg shrink-0">
                <Info className="text-cyan-400" size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Ma démarche de veille</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  La veille technologique consiste à surveiller les évolutions techniques et les innovations de manière systématique pour rester à jour. 
                  Pour mon parcours, j'ai choisi le thème de <strong>l'IA générative d'images et de contenus visuels</strong>. 
                  C'est un domaine qui transforme radicalement la création numérique et pose de nouveaux défis en termes d'infrastructure et d'éthique.
                </p>
              </div>
            </div>
          </div>
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
                    VOIR LA SOURCE
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
