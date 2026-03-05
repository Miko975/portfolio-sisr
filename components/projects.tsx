"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Terminal, Layout, ShieldCheck, Briefcase, Info, Award, AlertTriangle, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    title: "Déploiement de postes informatiques",
    shortDescription: "Montage et configuration complète d'une dizaine de postes et serveurs pour un cabinet dentaire.",
    context: "Stage chez l'ESN AMR Informatique (Deuxième année)",
    description: "Ce projet consistait à préparer l'infrastructure matérielle pour un nouveau client de l'ESN, un cabinet de dentiste. J'ai dû monter physiquement une dizaine de postes de travail performants, installer les systèmes d'exploitation (Windows Server / Windows 10) et assurer l'intégration complète au domaine de l'entreprise. J'ai également géré l'installation des logiciels métiers spécifiques au domaine dentaire et des utilitaires nécessaires au bon fonctionnement du parc.",
    challenges: "La principale difficulté a été de respecter des délais très courts pour ne pas perturber les consultations du cabinet dentaire. Il a également fallu gérer la compatibilité de certains logiciels métiers anciens avec les nouveaux systèmes d'exploitation installés.",
    solution: "Mise en place d'un planning de déploiement par phases, réalisé en dehors des heures de consultation pour éviter toute interruption d'activité. J'ai assuré un suivi rigoureux de chaque poste pour garantir une transition fluide et immédiate dès la reprise des consultations.",
    skills: [
      "Installation et configuration de systèmes d'exploitation (Windows)",
      "Gestion rigoureuse du matériel et inventaire technique",
      "Organisation et respect des délais de livraison client",
      "Support technique de proximité"
    ],
    icon: <Terminal size={24} />
  },
  {
    title: "Support et assistance utilisateur",
    shortDescription: "Gestion complète des tickets d'incidents via Axonaut et diagnostic pannes matérielles/logicielles.",
    context: "Stage chez l'ESN AMR Informatique (Première et Deuxième année)",
    description: "Au sein de l'équipe de support de l'ESN, j'étais en charge de la gestion du flux de tickets via l'outil Axonaut. Ma mission consistait à diagnostiquer et résoudre des pannes variées : problèmes de connectivité réseau, dysfonctionnements logiciels, configuration de périphériques et assistance directe aux utilisateurs. J'ai dû faire preuve de réactivité et de clarté pour accompagner les clients dans la résolution de leurs incidents quotidiens.",
    challenges: "Le défi majeur a été le diagnostic à distance de pannes complexes, nécessitant une écoute active et une vulgarisation technique efficace auprès d'utilisateurs parfois en situation d'urgence ou de stress.",
    solution: "Utilisation systématique d'outils de prise en main à distance (TeamViewer/AnyDesk) pour visualiser directement les erreurs. J'ai également créé et partagé des guides de procédures simplifiés avec les utilisateurs pour les aider à identifier les symptômes précis, ce qui a réduit le temps moyen de résolution des incidents.",
    skills: [
      "Diagnostic méthodique de pannes (Hardware & Software)",
      "Maîtrise de l'outil de gestion Axonaut",
      "Communication technique claire et vulgarisation",
      "Gestion du stress et des priorités en support critique"
    ],
    icon: <ShieldCheck size={24} />
  },
  {
    title: "Création d'un site web pour une entreprise",
    shortDescription: "Développement complet d'un site vitrine responsive pour une entreprise de restauration.",
    context: "Projet personnel réalisé avec un ami (2023)",
    description: "Dans le cadre d'un projet collaboratif, nous avons conçu et développé un site web vitrine moderne pour une entreprise de restauration. Le projet incluait la création d'une interface utilisateur (UX/UI) intuitive, le développement d'un design responsive et la mise en place d'une solution pour la gestion des réservations. Nous avons également géré l'hébergement et le déploiement final du site sur un serveur web.",
    challenges: "Le site ne s'affichait pas bien sur les téléphones. Le texte et les images dépassaient de l'écran, ce qui rendait la navigation très compliquée sur smartphone.",
    solution: "J'ai simplement modifié les tailles des éléments dans le code pour qu'ils s'adaptent automatiquement à l'écran. J'ai ensuite utilisé un simulateur de mobile pour vérifier que tout s'affichait correctement et que plus rien ne dépassait.",
    skills: [
      "Conception UX/UI moderne et responsive design",
      "Gestion de projet collaborative (Git/GitHub)",
      "Optimisation de la performance et du SEO de base",
      "Déploiement et mise en production"
    ],
    icon: <Layout size={24} />
  }
]

export const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projets" className="px-6 py-20 scroll-mt-24 max-w-6xl mx-auto">
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-2">Réalisations</h3>
        <h2 className="text-4xl font-bold mb-12 text-white tracking-tight">Mes Projets</h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={index} 
                className="group relative rounded-[2rem] border border-zinc-800 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-cyan-500/30 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  {/* Icône & Titre */}
                  <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl text-cyan-400 shadow-xl group-hover:scale-110 transition-transform duration-500 shrink-0">
                    {project.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-[10px] font-bold text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full uppercase tracking-widest border border-zinc-800">
                        {project.context.includes("Stage") ? "PRO" : "PERSO"}
                      </span>
                    </div>
                    
                    <p className="text-zinc-400 text-base leading-relaxed max-w-3xl">
                      {project.shortDescription}
                    </p>

                    {/* Contenu Déroulant */}
                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[1500px] opacity-100 mt-10' : 'max-h-0 opacity-0'}`}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-zinc-800/50 pt-10">
                        
                        <div className="space-y-8 text-left">
                          <div>
                            <div className="flex items-center gap-2 text-cyan-400 mb-3">
                              <Info size={18} />
                              <h5 className="text-xs font-bold uppercase tracking-widest">Description détaillée</h5>
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed">{project.description}</p>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 text-red-400 mb-3">
                              <AlertTriangle size={18} />
                              <h5 className="text-xs font-bold uppercase tracking-widest">Difficultés</h5>
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed">{project.challenges}</p>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 text-green-400 mb-3">
                              <CheckCircle2 size={18} />
                              <h5 className="text-xs font-bold uppercase tracking-widest">Solution</h5>
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed">{project.solution}</p>
                          </div>
                        </div>

                        <div className="space-y-8 text-left">
                          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                             <div className="flex items-center gap-2 text-cyan-400 mb-4">
                               <Award size={18} />
                               <h5 className="text-xs font-bold uppercase tracking-widest">Compétences validées</h5>
                             </div>
                             <div className="grid grid-cols-1 gap-3">
                               {project.skills.map((skill, sIndex) => (
                                 <div key={sIndex} className="flex items-center gap-3">
                                   <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                                   <p className="text-zinc-300 text-xs font-medium">{skill}</p>
                                 </div>
                               ))}
                             </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    <button 
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {isExpanded ? <>Masquer les détails <ChevronUp size={16} /></> : <>Explorer le projet <ChevronDown size={16} /></>}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  )
}
