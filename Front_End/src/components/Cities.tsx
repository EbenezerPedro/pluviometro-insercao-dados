import React from 'react';

const cities = [
  {
    name: 'Araranguá',
    status: 'Dados coletados',
  },
  {
    name: 'Criciúma',
    status: 'Dados coletados',
  },
  {
    name: 'Florianópolis',
    status: 'Dados coletados',
  },
];

export default function Cities() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Conheça as cidades de coletas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div key={city.name} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">{city.name}</h3>
              <p className="text-gray-600 mb-4">{city.status}</p>
              <button className="text-emerald-600 hover:text-emerald-700">
                Confira mais
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50">
            Mostra mais coletas
          </button>
        </div>
      </div>
    </div>
  );
}