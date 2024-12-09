import React from 'react';

import image from "../image.png"
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="absolute inset-0 bg-black/30" />
      <img
        src={image}
        alt="Pluviômetro"
        className="w-full h-full object-cover mix-blend-overlay"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Conectando os estudantes ao mundo do clima
            </h1>
            <p className="text-lg text-gray-200 mb-8">
            Ensinar os estudantes sobre o ciclo da água e a importância da medição da precipitação pluviométrica, estimulando a coleta de dados em campo e seu cadastro no sistema. Ao mesmo tempo, promover a análise desses dados de forma prática, conectando teoria e prática no estudo da meteorologia e recursos hídricos.
            </p>
            <Link to="VerMais">
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              Ver mais
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}