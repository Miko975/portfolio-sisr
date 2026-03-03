import React from 'react'
import { ExternalLink, Terminal, Target, ArrowDownCircle } from 'lucide-react'

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
    <section id="veille" className="px-6 py-20 scroll-mt-24 max-w-4xl mx-auto">
      <div className="mb-16">
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-2">Veille Technologique</h3>
        <h2 className="text-4xl font-bold text-white mb-12">Analyse & Prospective</h2>
        
        {/* Section Définition et Thème - Style Vertical "Flow" */}
        <div className="relative flex flex-col gap-0 mb-20">
          
          {/* Ligne verticale de connexion */}
          <div className="absolute left-10 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden md:block" />

          {/* Étape 1 : Définition */}
          <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/10 p-8 mb-6 transition-all">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="z-10 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl h-fit w-fit shadow-xl shadow-black/50">
                <Terminal className="text-cyan-400" size={32} />
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">Qu'est-ce qu'une veille ?</h4>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  La veille technologique est une activité consistant à <strong className="text-zinc-200">anticiper les évolutions</strong> en s'informant régulièrement sur les nouveautés du secteur. Pour un technicien SISR, c'est l'assurance de maintenir ses compétences face à l'obsolescence rapide des outils.
                </p>
              </div>
            </div>
          </div>

          {/* Transition Icon */}
          <div className="flex justify-center -my-3 z-10">
             <div className="bg-zinc-950 p-2">
                <ArrowDownCircle className="text-zinc-700 animate-pulse" size={20} />
             </div>
          </div>

          {/* Étape 2 : Mon thème */}
          <div className="group relative rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 transition-all hover:bg-cyan-500/[0.07]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="z-10 bg-cyan-950 border border-cyan-500/30 p-4 rounded-2xl h-fit w-fit shadow-xl shadow-cyan-900/20">
                <Target className="text-cyan-400" size={32} />
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight italic">Mon Choix : L'IA Visuelle</h4>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  J'ai choisi d'explorer <strong className="text-cyan-400">l'IA générative d'images</strong>. Ce domaine redéfinit les limites de l'infrastructure Cloud et du calcul GPU, tout en soulevant des questions majeures de cybersécurité et de gestion de la donnée en entreprise.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-zinc-800 flex-grow"></div>
          <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Flux d'actualités</span>
          <div className="h-px bg-zinc-800 flex-grow"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <a 
            key={index} 
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.1)] overflow-hidden block"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-[50px] transition-all group-hover:bg-cyan-500/20" />
            
            <div className="relative z-20 text-left">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-950/10">
                  {article.category}
                </span>
                <span className="text-xs text-zinc-500">{article.date}</span>
              </div>

              <h4 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {article.title}
              </h4>
              
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                {article.description}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-zinc-800/50">
                <span className="text-[10px] text-zinc-500 font-medium italic">Source: {article.source}</span>
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-600 group-hover:text-cyan-400 transition-colors">
                  VOIR LA SOURCE
                  <ExternalLink size={12} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
