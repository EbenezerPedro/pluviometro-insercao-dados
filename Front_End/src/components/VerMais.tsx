import React from "react";

export default function VerMais(){
  return (
    <div className="max-w-4xl mx-auto mt-14 p-6 bg-white shadow-lg rounded-lg space-y-6">
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Objetivo do Projeto</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Ensinar os estudantes sobre o ciclo da água e a importância da
          medição da precipitação pluviométrica, estimulando a coleta de dados
          em campo e seu cadastro no sistema. Ao mesmo tempo, promover a
          análise desses dados de forma prática, conectando teoria e prática no
          estudo da meteorologia e recursos hídricos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Passos do Projeto</h2>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Instalação do Pluviômetro</h3>
          <p className="text-lg text-gray-700">
            O projeto começa com a instalação de pluviômetros em pontos
            estratégicos da escola ou comunidade, que devem ser acessíveis aos
            alunos. Cada grupo de estudantes seria responsável por um
            pluviômetro, para promover o trabalho em equipe.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Coleta de Dados</h3>
          <p className="text-lg text-gray-700">
            Os estudantes devem realizar a leitura diária da precipitação no
            seu pluviômetro, anotando os valores de chuva em milímetros. Para
            tornar o processo mais interessante, os alunos podem ser
            incentivados a medir a quantidade de chuva em diferentes horários do
            dia, registrando a variação ao longo das 24 horas.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Cadastro no Sistema</h3>
          <p className="text-lg text-gray-700">
            Criar um sistema online ou app (pode ser simples, com uma interface
            amigável) onde os estudantes devem cadastrar a quantidade de chuva
            coletada. O sistema pode ter campos para a data, hora da medição,
            local (se houver mais de um ponto de coleta) e outros dados que os
            alunos considerem importantes, como a temperatura ou o vento (para
            contextualizar ainda mais a coleta).
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Análise dos Dados</h3>
          <p className="text-lg text-gray-700">
            Após o cadastro, os alunos podem visualizar gráficos e tabelas com
            a evolução da precipitação. Esses gráficos podem ser gerados
            automaticamente pelo sistema. Os professores podem utilizar os dados
            coletados para promover discussões em sala de aula sobre como
            diferentes fatores (como o relevo, a época do ano, etc.) influenciam
            os padrões de chuva. Os estudantes podem comparar a previsão do
            tempo com os dados reais coletados, analisando a precisão das
            previsões meteorológicas.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Atividades Complementares</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="font-semibold">Estudo do Ciclo Hidrológico:</strong> Os alunos
              podem usar os dados de precipitação para estudar o ciclo da água
              e entender como a chuva contribui para o abastecimento de lençóis
              freáticos, rios e a vegetação.
            </li>
            <li>
              <strong className="font-semibold">Mapeamento de Áreas de Chuva:</strong> Caso o
              projeto se expanda para mais escolas ou bairros, os alunos podem
              usar os dados coletados para criar um mapa de precipitação em sua
              região, possibilitando uma análise geoespacial.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Reflexão e Conscientização</h3>
          <p className="text-lg text-gray-700">
            Ao final, os alunos podem apresentar seus resultados para a
            comunidade escolar, mostrando como o conhecimento da precipitação e
            a coleta de dados contribuem para a preservação dos recursos
            hídricos e o entendimento do clima local.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Benefícios do Projeto</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="font-semibold">Educação Prática:</strong> Estudantes aprendem a
            importância da coleta de dados científicos e como isso se
            relaciona com o meio ambiente e a sociedade.
          </li>
          <li>
            <strong className="font-semibold">Engajamento Tecnológico:</strong> O uso de uma
            plataforma para o cadastro de dados proporciona uma experiência
            tecnológica, que pode ser facilmente integrada com outros projetos
            de ciência.
          </li>
          <li>
            <strong className="font-semibold">Colaboração:</strong> Ao trabalhar em grupos, os
            alunos aprendem a colaborar e a desenvolver habilidades de
            comunicação e trabalho em equipe.
          </li>
          <li>
            <strong className="font-semibold">Desenvolvimento da Cidadania Ambiental:</strong> O
            projeto promove a consciência sobre a importância da água e a
            relação entre as condições climáticas e o ambiente.
          </li>
        </ul>
      </section>
    </div>
  );
};


