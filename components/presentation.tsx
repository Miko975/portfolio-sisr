import React from 'react';
import { Search, Settings, ShieldCheck } from 'lucide-react'; // On importe des petites icônes

export const Presentation = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-white">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Partie gauche : Texte de présentation */}
        <div className="flex-1">
          <h3 className="text-cyan-400 uppercase tracking-widest text-sm font-bold mb-2">Qui suis-je</h3>
          <h2 className="text-4xl font-bold mb-8">Presentation</h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
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
        <div className="flex-1 space-y-4">
          
          {/* Carte Curieux */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-2">
              <Search className="text-cyan-400" size={24} />
              <h4 className="text-xl font-bold">Curieux</h4>
            </div>
            <p className="text-gray-400">J'aime apprendre et explorer de nouvelles technologies pour ameliorer mes competences.</p>
          </div>

          {/* Carte Pragmatique */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-2">
              <Settings className="text-cyan-400" size={24} />
              <h4 className="text-xl font-bold">Pragmatique</h4>
            </div>
            <p className="text-gray-400">Je préfère les solutions concrètes et testées plutôt que les théories complexes.</p>
          </div>

          {/* Carte Rigoureux */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-2">
              <ShieldCheck className="text-cyan-400" size={24} />
              <h4 className="text-xl font-bold">Rigoureux</h4>
            </div>
            <p className="text-gray-400">La sécurité et la qualité sont mes priorités dans chaque projet.</p>
          </div>

        </div>
      </div>
    </section>
  );
};
