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

Para instalar e executar o backend do projeto disponível no repositório GitHub pluviometro-insercao-dados, siga os passos abaixo:

**Passo 1: Clonar o Repositório**

Primeiro, clone o repositório para sua máquina local usando o comando:

git clone https://github.com/EbenezerPedro/pluviometro-insercao-dados.git

**Passo 2: Navegar para o Diretório do Backend**

Navegue até o diretório do backend:

cd pluviometro-insercao-dados/Back_End

**Passo 3: Instalar Dependências**

* Instale as dependências do projeto usando o npm:
* npm install

**Passo 4: Configurar Variáveis de Ambiente**
Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias. Um exemplo de configuração pode ser:

* NOTES_APP_MONGODB_HOST=localhost
* NOTES_APP_MONGODB_DATABASE=pluviômetro

**Passo 5: Iniciar o Servidor**
Inicie o servidor usando o comando:

npm start

**Passo 6: Verificar Conexão com o Banco de Dados**

Certifique-se de que o MongoDB está rodando e que a conexão com o banco de dados foi estabelecida corretamente. Você deve ver a mensagem "Database is connected" no console.

