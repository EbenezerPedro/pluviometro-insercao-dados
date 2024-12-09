import React, { useState } from 'react';
import axios from 'axios'; // Importando o axios
import { useNavigate } from 'react-router-dom';
import api from '../axios.config';

type FormData = {
  estado: string;
  municipio: string;
  bairro: string;
  quantidade: string;
  hora: string;
  date: string;
};

export default function CadastrarDados() {
  const [formData, setFormData] = useState<FormData>({
    estado: '',
    municipio: '',
    bairro: '',
    quantidade: '',
    date: '',
    hora: '',
  });
  const [bairrosDisponiveis, setBairrosDisponiveis] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  
  const navigate = useNavigate();

  // Dados de estados, municípios e bairros
  const estados = ['Santa Catarina'];
  const municipios = {
    'Araranguá': ['Centro', 'Cidade Alta', 'Colonia', 'Divinea', 'Caverazinho', 'Urussanguinha'],
    'Balneário Arroio do Silva': ['Centro', 'Zona Sul', 'Zona Norte'],
  };

  // Função para lidar com a mudança do município
  const handleMunicipioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, municipio: value, bairro: '' }));
    setBairrosDisponiveis(municipios[value] || []);
  };

  // Função para lidar com as mudanças no formulário
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { estado, municipio, bairro, quantidade, date, hora } = formData;

    const formPayload = {
      userId: "6749e7c5b852438c097b8810",
      estado,
      municipio,
      bairro,
      quantidade: parseFloat(quantidade), // Convertendo para número
      date,
      hora,
    };

    try {
      console.log(formPayload);
      const response = await api.post('pluviometer/new', formPayload);

      if (response.status === 201) {
        alert("Dados cadastrados com sucesso!");
        setFormData({
          estado: '',
          municipio: '',
          bairro: '',
          quantidade: '',
          date: '',
          hora: '',
        });
        setBairrosDisponiveis([]);
      }
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || 'Erro ao se comunicar com o servidor.'
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-12 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-emerald-700 mb-4">Adicionar Dados do Pluviômetro</h2>

      {message && <div className="text-sm text-red-600 mb-4">{message}</div>}

      <form onSubmit={handleSubmit}>
        {/* Estado */}
        <div className="mb-6">
          <label htmlFor="estado" className="block text-gray-700 font-medium mb-2">Estado</label>
          <select
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            required
          >
            <option value="">Selecione um Estado</option>
            {estados.map(estado => (
              <option key={estado} value={estado}>{estado}</option>
            ))}
          </select>
        </div>

        {/* Município */}
        <div className="mb-6">
          <label htmlFor="municipio" className="block text-gray-700 font-medium mb-2">Município</label>
          <select
            id="municipio"
            name="municipio"
            value={formData.municipio}
            onChange={handleMunicipioChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            required
          >
            <option value="">Selecione um Município</option>
            {Object.keys(municipios).map(municipio => (
              <option key={municipio} value={municipio}>{municipio}</option>
            ))}
          </select>
        </div>

        {/* Bairro */}
        <div className="mb-6">
          <label htmlFor="bairro" className="block text-gray-700 font-medium mb-2">Bairro</label>
          <select
            id="bairro"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            required
            disabled={!bairrosDisponiveis.length}
          >
            <option value="">Selecione um Bairro</option>
            {bairrosDisponiveis.map(bairro => (
              <option key={bairro} value={bairro}>{bairro}</option>
            ))}
          </select>
        </div>

        {/* Quantidade */}
        <div className="mb-6">
          <label htmlFor="quantidade" className="block text-gray-700 font-medium mb-2">Quantidade (ml)</label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
            required
            step="0.1"
          />
        </div>

        {/* Data */}
        <div className="mb-6">
          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Data</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
            required
          />
        </div>

        {/* Hora */}
        <div className="mb-6">
          <label htmlFor="hora" className="block text-gray-700 font-medium mb-2">Hora</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition hover:bg-emerald-800"
        >
          Cadastrar Dados
        </button>
      </form>
    </div>
  );
}
