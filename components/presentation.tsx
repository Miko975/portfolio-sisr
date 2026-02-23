import React from 'react';
import { Search, Settings, ShieldCheck } from 'lucide-react';

export const Presentation = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-white">
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Partie gauche : Texte de présentation */}
        <div className="flex-1">
          {/* On ne touche pas à la taille de celui-ci comme demandé */}
          <h3 className="text-cyan-400 uppercase tracking-widest text-sm font-bold mb-2">Qui suis-je</h3>
          
          {/* Titre réduit de text-4xl à text-3xl */}
          <h2 className="text-3xl font-bold mb-6">Présentation</h2>
          
          {/* Texte réduit de text-lg à text-base (plus standard et fin) */}
          <div className="space-y-5 text-gray-400 text-base leading-relaxed">
            <p>
              Je suis actuellement en 2ème année de <span className="text-white font-semibold">BTS Services Informatiques aux Organisations</span> avec l'option <span className="text-cyan-400 font-semibold">SISR</span> au Lycée René Cassin à Strasbourg.
            </p>
            <p>
              Passionné par les technologies informatiques, je développe une expertise pratique en administration réseau, cybersécurité et gestion des infrastructures à travers des projets concrets.
            </p>
            <p>
              Mon objectif est de contribuer à la <span className="text-white font-semibold">sécurisation et l'optimisation des systèmes d'information</span> au sein d'une entreprise dynamique.
            </p>
          </div>
        </div>

        {/* Partie droite : Les cartes de qualités */}
        <div className="flex-1 space-y-3">
          
          {/* Cartes réduites en padding (p-4) et en taille de texte */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-1">
              <Search className="text-cyan-400" size={20} />
              <h4 className="text-lg font-bold">Curieux</h4>
            </div>
            <p className="text-gray-400 text-sm">J'aime apprendre et explorer de nouvelles technologies pour améliorer mes compétences.</p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-1">
              <Settings className="text-cyan-400" size={20} />
              <h4 className="text-lg font-bold">Pragmatique</h4>
            </div>
            <p className="text-gray-400 text-sm">Je préfère les solutions concrètes et testées plutôt que les théories complexes.</p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-1">
              <ShieldCheck className="text-cyan-400" size={20} />
              <h4 className="text-lg font-bold">Rigoureux</h4>
            </div>
            <p className="text-gray-400 text-sm">La sécurité et la qualité sont mes priorités dans chaque projet.</p>
          </div>

        </div>
      </div>
    </section>
  );
};
