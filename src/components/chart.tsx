import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registrar os componentes necessários no Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export interface Dados {
  bairro: string;
  date: string;
  estado: string;
  hora: string;
  municipio: string;
  quantidade: number;
}

export interface DadosTypes {
  dados: Dados[];
}

const BarChart: React.FC<DadosTypes> = ({ dados }) => {
  // Função para extrair o mês a partir de uma string de data
  function getMonthFromDate(dateString: string): string {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    try {
      const date = new Date(dateString);
      const monthIndex = date.getUTCMonth(); // Retorna o índice do mês (0-11)
      return months[monthIndex];
    } catch (error) {
      throw new Error("Data inválida");
    }
  }

  // Verifica se há dados
  if (!dados || dados.length === 0) {
    return <p>Sem dados para exibir o gráfico.</p>;
  }

  // Obtém os meses e quantidades dos dados fornecidos
  const labels = dados.map((item) => getMonthFromDate(item.date));
  const dataValues = dados.map((item) => item.quantidade);
  const info = dados.map((item) => {
    return {
        city: item.estado,
        mun: item.municipio,
        bairro: item.bairro
    }
  });

  // Configuração do gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Quantidade por Mês",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        data: dataValues,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Gráfico de Barras",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Meses",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Quantidade",
        },
      },
    },
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Bar data={data} options={options} />
      

      {info.map((info, index) => (
        <div key={index}>
          <strong>Cidade:</strong><span>{info.city}</span>
          <strong>Município:</strong><span>{info.mun}</span>
          <strong>Bairro:</strong><span>{info.bairro}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
