"use client"

import { FileText, Download, Eye, Clock } from "lucide-react"

const docs = [
  {
    title: "CV Professionnel",
    description: "Mon parcours complet, mes compétences techniques et mes certifications.",
    fileUrl: "/docs/cv_mikail.pdf",
    // Icône FileText en bleu
    icon: <FileText className="text-blue-400" size={28} strokeWidth={2} />,
    status: "Disponible"
  },
  {
    title: "Attestation de Stage (2ème année)",
    description: "Validation du stage chez AMR Informatique (Janvier - Février 2026).",
    fileUrl: "/docs/attestation_stage_2.pdf",
    // Exactement la même icône FileText, mais en cyan
    icon: <FileText className="text-cyan-400" size={28} strokeWidth={2} />,
    status: "Disponible"
  },
  {
    title: "Attestation de Stage (1ère année)",
    description: "Document en cours de récupération auprès de l'établissement.",
    fileUrl: "#",
    // Icône FileText en gris pour le hors-ligne
    icon: <FileText className="text-zinc-500" size={28} strokeWidth={2} />,
    status: "Bientôt disponible",
    disabled: true
  }
]

export function Documents() {
  return (
    <section id="documents" className="px-6 py-20 scroll-mt-24 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
          Ressources
        </p>
        <h2 className="text-3xl font-bold text-white tracking-tight italic">Documents Officiels</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {docs.map((doc, index) => (
          <div 
            key={index}
            className={`group relative rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col h-full transition-all duration-500 ${doc.disabled ? 'opacity-60' : 'hover:border-cyan-400/40 hover:bg-zinc-900/60 shadow-xl hover:shadow-cyan-400/5'}`}
          >
            <div className="flex items-start justify-between mb-8">
              {/* Carré de l'icône strictement identique */}
              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-800/50 border border-zinc-700/50 ${!doc.disabled && 'group-hover:scale-110 group-hover:border-cyan-400/30'} transition-all`}>
                {doc.icon}
              </div>
              <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md border ${doc.disabled ? 'border-zinc-800 text-zinc-500' : 'border-cyan-400/20 text-cyan-400 bg-cyan-400/5'}`}>
                {doc.status}
              </span>
            </div>

            <div className="flex-grow">
              <h4 className="text-xl font-bold text-white mb-3 min-h-[56px] flex items-center leading-tight">
                {doc.title}
              </h4>
              <p className="text-sm text-zinc-400 mb-8 leading-relaxed min-h-[60px]">
                {doc.description}
              </p>
            </div>

            <div className="mt-auto">
              {!doc.disabled ? (
                <div className="flex gap-3">
                  <a 
                    href={doc.fileUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-[11px] font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all border border-zinc-700"
                  >
                    <Eye size={16} /> Voir
                  </a>
                  <a 
                    href={doc.fileUrl} 
                    download
                    className="flex items-center justify-center bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 p-3.5 rounded-xl transition-all border border-cyan-400/20"
                  >
                    <Download size={18} />
                  </a>
                </div>
              ) : (
                <div className="py-3.5 text-center bg-zinc-800/30 rounded-xl border border-zinc-800/50 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                  Indisponible
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
