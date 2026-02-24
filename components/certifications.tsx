import React from 'react'
import { BadgeCheck } from 'lucide-react'

const certifications = [
  { title: "PIX", subtitle: "Competences numeriques" },
  { title: "RGPD", subtitle: "CNIL" },
  { title: "SecNumAcademie", subtitle: "ANSSI" },
  { title: "NetAcad", subtitle: "CISCO" }
]

export const Certifications = () => {
  return (
    <section id="certifications" className="px-6 scroll-mt-24 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-[10px] font-bold">
          Certifications
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-cyan-500/30"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-950/30 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_-5px_rgba(6,182,212,0.4)]">
              <BadgeCheck size={24} />
            </div>
            
            <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">
              {cert.title}
            </h4>
            <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
              {cert.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
