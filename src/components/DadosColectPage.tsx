import { useState } from "react";
import api from "../axios.config";
import BarChart, { DadosTypes } from "./chart";


export default function DadosColectPage() {
  const [selectedMunicipio, setSelectedMunicipio] = useState<string>("");
  const [selectedBairro, setSelectedBairro] = useState<string>("");
  const [bairros, setBairros] = useState<string[]>([]);
  const [periodo, setPeriodo] = useState<string>("dia");
  const [dataInicio, setDataInicio] = useState<string>("");
  const [dataFim, setDataFim] = useState<string>("");
  const [resultados, setResultados] = useState<DadosTypes[]>([]);

  const bairrosData: { [key: string]: string[] } = {
    Ararangua: ['Centro', 'Cidade Alta', 'Colonia', 'Divinea', 'Caverazinho', 'Urussanguinha'],
    Arroio: ['Centro', 'Zona Sul', 'Zona Norte'],
  };

  const handleMunicipioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const municipio = e.target.value;
    setSelectedMunicipio(municipio);
    setSelectedBairro("");
    setBairros(bairrosData[municipio] || []);
  };

  const handleBairroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBairro(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const pesquisaData = {
      estado: "Santa Catarina",
      municipio: selectedMunicipio,
      bairro: selectedBairro,
      periodo,
      dataInicio,
      dataFim,
    };

    try {
      const response = await api.post("/dados-coletados", pesquisaData);
      setResultados(response.data.data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-6">
      {/* Formulário */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Pesquisa de Dados Coletados</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <select
              id="estado"
              name="estado"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              required
            >
              <option value="Santa Catarina">Santa Catarina</option>
            </select>
          </div>
          <div>
            <label htmlFor="municipio" className="block text-sm font-medium text-gray-700">
              Município
            </label>
            <select
              id="municipio"
              name="municipio"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              required
              value={selectedMunicipio}
              onChange={handleMunicipioChange}
            >
              <option value="">Selecione um Município</option>
              <option value="Ararangua">Ararangua</option>
              <option value="Arroio">Balneário Arroio do Silva</option>
            </select>
          </div>
          <div>
            <label htmlFor="bairro" className="block text-sm font-medium text-gray-700">
              Bairro
            </label>
            <select
              id="bairro"
              name="bairro"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              required
              value={selectedBairro}
              onChange={handleBairroChange}
              disabled={bairros.length === 0}
            >
              <option value="">Selecione um Bairro</option>
              {bairros.length > 0 ? (
                bairros.map((bairro, index) => (
                  <option key={index} value={bairro}>
                    {bairro}
                  </option>
                ))
              ) : (
                <option disabled>Sem bairros disponíveis</option>
              )}
            </select>
          </div>
          <div>
            <label htmlFor="periodo" className="block text-sm font-medium text-gray-700">
              Período
            </label>
            <select
              id="periodo"
              name="periodo"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              required
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
            >
              <option value="dia">Dia</option>
              <option value="semana">Semana</option>
              <option value="mes">Mês</option>
              <option value="ano">Ano</option>
            </select>
          </div>
          <div>
            <label htmlFor="dataInicio" className="block text-sm font-medium text-gray-700">
              Data Início
            </label>
            <input
              type="date"
              id="dataInicio"
              name="dataInicio"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              required
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="dataFim" className="block text-sm font-medium text-gray-700">
              Data Fim
            </label>
            <input
              type="date"
              id="dataFim"
              name="dataFim"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-700 text-white font-medium py-2 rounded-md shadow-sm hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Pesquisar
          </button>
        </form>
      </div>

      {/* Resultados */}
      <div className="bg-white ml-8 shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Resultados da Coleta</h2>
        <BarChart dados={resultados} />
      </div>
    </div>
  );
}
