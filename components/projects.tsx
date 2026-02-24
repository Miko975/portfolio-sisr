import React from 'react'

const projects = [
  {
    title: "Mise en place d'un réseau local",
    description: "Configuration d'un petit réseau avec routeur, switch et 3 postes clients. Mise en place du DHCP et des partages de fichiers.",
  },
  {
    title: "Installation d'un serveur web",
    description: "Installation d'Apache sur Linux, configuration des droits d'accès et création d'un site web simple.",
  },
  {
    title: "Création d'un site web pour une entreprise",
    description: "Développement d'un site web vitrine pour une petite entreprise avec design responsive et formulaire de contact.",
  }
]

export const Projects = () => {
  return (
    <section id="projets" className="px-6 scroll-mt-24 max-w-6xl mx-auto">
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-2">Portfolio</h3>
        <h2 className="text-3xl font-bold mb-12 text-white">Mes Projets</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 h-[250px] flex flex-col justify-center hover:border-cyan-400/50 transition-all">
              <div className="relative z-20">
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
