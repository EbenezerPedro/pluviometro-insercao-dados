import React from 'react';
import { ChevronRight } from 'lucide-react';

const questions = [
  {
    question: 'Como realizar a coleta dos dados?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    question: 'Quem pode realizar a coleta?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    question: 'Qual é a finalidade da coleta?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

export default function FAQ() {
  return (
    <div className="py-20 bg-gray-50" id='FAQ'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {questions.map((q) => (
                <button
                  key={q.question}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <span>{q.question}</span>
                  <ChevronRight className="h-5 w-5 text-emerald-600" />
                </button>
              ))}
            </div>
            <button className="mt-6 text-emerald-600 hover:text-emerald-700">
              Mostrar todas as perguntas
            </button>
          </div>
          <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Quer tal começar a preencher os dados da sua coleta agora? Não custa nada!
            </h3>
            <button className="mt-4 bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
              Começar agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}