import React from 'react';
import imageSection from "../Section2.png"
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="py-20 bg-gray-50" id='sobre'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-600 font-medium">Sobre o Projeto</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Pluviômetro Educativo</h2>
            <p className="text-gray-600 leading-relaxed">
              O Pluviômetro é utilizado para determinar a quantidade de fluido em um espaço precipitado específico durante um determinado período de tempo. O uso do pluviômetro é essencial por várias razões, principalmente relacionadas ao estudo e gestão de fenômenos meteorológicos e hidrológicos.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              O pluviômetro é um instrumento que mede a quantidade de precipitação em um determinado local. Ele pode ser usado para monitorar a chuva em tempo real, o que é útil para fins meteorológicos e hidrológicos. Além disso, os dados do pluviômetro podem ser usados para estudos climáticos e para avaliar o impacto da chuva sobre o meio ambiente.
            </p>
            <Link to="VerMais">
            <button className="mt-8 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              Ver mais
            </button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-emerald-200 rounded-lg" />
            <img
              src="https://t4.ftcdn.net/jpg/04/53/36/49/360_F_453364954_P1sC56inorgiZ9cYjX7OiUtf63xgIY8f.jpg"
              alt="Estudante"
              className="relative z-10 rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}