import React from 'react';
import { Droplets, Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="h-6 w-6" />
              <span className="font-bold text-xl text-white">LOGO</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Digite o seu e-mail"
                className="bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                Inscrever
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Links Úteis</h3>
            <div className="space-y-2">
              <p>Perguntas frequentes</p>
              <p>Gestão de Privacidade</p>
              <p>Termos e Condições de Uso da Plataforma</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <Youtube className="h-6 w-6 hover:text-emerald-500 cursor-pointer" />
              <Instagram className="h-6 w-6 hover:text-emerald-500 cursor-pointer" />
              <Facebook className="h-6 w-6 hover:text-emerald-500 cursor-pointer" />
              <Linkedin className="h-6 w-6 hover:text-emerald-500 cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-400">
          © 2024 Pluviômetro Educativo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}