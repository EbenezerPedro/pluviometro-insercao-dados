# Sistema de inserção colaborativo de dados de pluviômetro

Este projeto propõe um sistema colaborativo para a inserção e o mapeamento de dados pluviométricos coletados manualmente, com foco em escolas e comunidades. A iniciativa busca centralizar informações sobre precipitação em uma plataforma acessível e integrada, promovendo o aprimoramento do monitoramento de recursos hídricos.

O trabalho foi desenvolvido no âmbito da disciplina Projeto Integrador I, contando com a colaboração de:

* Ebenezer Pedro Imbundé
* Alexis Fernando Solis Mmani
* Abraão Carlos Sacaia Manuel

## Descrição do Projeto

O sistema de inserção colaborativa de dados de pluviômetros é uma plataforma que permite que diferentes usuários contribuam com dados de medições de chuva de maneira descentralizada. O objetivo é criar uma base de dados confiável, colaborativa e acessível, que possa ser utilizada para monitoramento ambiental, estudos climáticos e previsão de desastres naturais.

Esse sistema é ideal para comunidades, pesquisadores e órgãos ambientais, proporcionando uma solução escalável e eficiente para o compartilhamento de informações pluviométricas.

## Visão geral do sistema

O projeto baseia-se em uma abordagem colaborativa, permitindo:

Coleta descentralizada de dados: Usuários podem enviar dados de pluviômetros locais.
Validação: Mecanismos automáticos e manuais para validação e filtragem de dados inconsistentes.
Visualização: Dados disponíveis em gráficos para facilitar a análise.
Acessibilidade: A interface é simples e acessível via navegadores.

## Arquitetura 

**Camada de Frontend**

Descrição: A interface do usuário é construída usando HTML, CSS e JavaScript.

Principais componentes:

Formulário para inserção de dados: Campos para data, hora, volume coletado, cidade, bairro e observações.
Tabela dinâmica ou gráficos para exibir dados inseridos.
Scripts de validação no cliente para garantir que os dados básicos sejam válidos antes de enviar ao servidor.

**Camada de Backend**
Descrição: Responsável por gerenciar a lógica de negócio e a interação com o banco de dados.

Ferramentas sugeridas:

* Node.js (JavaScript no servidor).
* Express.js para criar APIs.

## Banco de Dados
MongoDB Compass:

Ferramenta de interface gráfica para gerenciar e visualizar dados armazenados no MongoDB.

Para mais informação confira a documentação no [Wiki do Projeto](https://github.com/EbenezerPedro/pluviometro-insercao-dados/wiki/1.Proposta)

## Instruções de execução

**1. Backend**

Clonar o Repositório:

* git clone https://github.com/EbenezerPedro/pluviometro-insercao-dados.git

Acessar o Diretório do Backend:

* cd pluviometro-insercao-dados/Back_End

Instalar Dependências:

* npm install

Configurar Variáveis de Ambiente:

Crie um arquivo .env com:

* NOTES_APP_MONGODB_HOST=localhost  
* NOTES_APP_MONGODB_DATABASE=pluviômetro

Iniciar o Servidor:

* npm start

**2. Frontend**

Acessar o Diretório do Frontend:

* cd pluviometro-insercao-dados/Front_End

Instalar Dependências:

* npm install

Iniciar o Servidor de Desenvolvimento:

* npm start

Depois de configurar e executar o frontend, você pode acessar a aplicação no seu navegador através do endereço http://localhost:3000 (ou outro endereço/porta especificado pelo Vite).

Se você encontrar algum problema, verifique as mensagens de erro no console e certifique-se de que todas as dependências e serviços necessários estão configurados corretamente.

Para mais informação confira a documentação no [Wiki do Projeto](https://github.com/EbenezerPedro/pluviometro-insercao-dados/wiki/Instru%C3%A7%C3%B5es-de-Execu%C3%A7%C3%A3o)

## Benefícios dessa Arquitetura

Simples e direta: Ferramentas básicas e configuráveis.

Colaborativa: Permite que múltiplos usuários insiram e visualizem dados.

Escalável: MongoDB suporta fácil expansão e consultas complexas.

Acessível: HTML, CSS e JavaScript são tecnologias amplamente conhecidas e compatíveis com navegadores.









