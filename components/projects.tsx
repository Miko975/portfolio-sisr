import React from 'react'

const projects = [
  {
    title: "Mise en place d'un réseau local",
    description: "Configuration d'un petit réseau avec routeur, switch et 3 postes clients. Mise en place du DHCP et des partages de fichiers.",
    tags: ["Cisco Packet Tracer", "DHCP", "Réseau"],
  },
  {
    title: "Installation d'un serveur web",
    description: "Installation d'Apache sur Linux, configuration des droits d'accès et création d'un site web simple.",
    tags: ["Linux", "Apache", "HTML"],
  },
  {
    title: "Création d'un site web pour une entreprise",
    description: "Développement d'un site web vitrine pour une petite entreprise avec design responsive et formulaire de contact.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  }
]

export const Projects = () => {
  return (
    <section id="projets" className="px-6 scroll-mt-24 max-w-6xl mx-auto">
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-2">Portfolio</h3>
        <h2 className="text-3xl font-bold mb-12 text-white">Mes Projets</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 h-[300px] flex flex-col justify-end hover:border-cyan-400/50 transition-all">
              <div className="relative z-20">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-zinc-800 px-3 py-1 text-[10px] text-zinc-300 border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
