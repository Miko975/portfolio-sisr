import React from 'react'

const projects = [
  {
    title: "Déploiement de postes informatiques",
    description: "Montage, préparation et installation de postes de travail pour des entreprises. Configuration logicielle et intégration au domaine de l'entreprise.",
  },
  {
    title: "Support et assistance utilisateur",
    description: "Gestion des tickets d'incidents, diagnostic des pannes matérielles/logicielles et accompagnement des utilisateurs au quotidien.",
  },
  {
    title: "Création d'un site web pour une entreprise",
    description: "Développement d'un site web vitrine pour une petite entreprise de restauration fictive ",
  }
]

export const Projects = () => {
  return (
    <section id="projets" className="px-6 py-20 scroll-mt-24 max-w-6xl mx-auto">
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-2">Réalisations</h3>
        <h2 className="text-3xl font-bold mb-12 text-white">Mes Projets</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 h-[280px] flex flex-col justify-center transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)] overflow-hidden"
            >
              {/* Petit reflet de couleur en haut à droite au survol */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-[50px] transition-all group-hover:bg-cyan-500/20" />
              
              <div className="relative z-20">
                <div className="mb-4 inline-block rounded-lg bg-cyan-500/10 p-2 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4 group-hover:text-zinc-300 transition-colors">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
