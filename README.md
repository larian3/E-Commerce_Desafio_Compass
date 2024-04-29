# E-Commerce Compass

Este é um projeto desenvolvido para o programa de bolsas da Compass.UOL, uma plataforma de e-commerce construída com Next.js, Prisma, PostgreSQL e Tailwind CSS.

## Visão Geral

O E-Commerce é uma aplicação web que permite aos usuários visualizar e comprar uma variedade de produtos. Ele foi desenvolvido como parte do programa de bolsas da Compass, com o objetivo de demonstrar habilidades em desenvolvimento web utilizando tecnologias modernas.

## Tecnologias Utilizadas

- **Next.js**: Um framework React para renderização do lado do servidor e construção de aplicativos da web rápidos e escaláveis.
- **Prisma**: Uma ferramenta de banco de dados ORM (Object-Relational Mapping) para Node.js e TypeScript.
- **PostgreSQL**: Um sistema de gerenciamento de banco de dados relacional de código aberto.
- **Tailwind CSS**: Um framework CSS utilitário de baixo nível para criar designs personalizados de forma rápida e fácil.

## Funcionalidades Principais

- **Visualização de Produtos**: Os usuários podem visualizar uma lista de produtos disponíveis no e-commerce, incluindo detalhes como nome, descrição, preço e imagem.
- **Detalhes do Produto**: Cada produto possui uma página de detalhes dedicada, onde os usuários podem ver informações mais detalhadas, como opções de cores, tamanhos e adicionar ao carrinho.
- **Administração de Produtos**: Recursos administrativos para gerenciar o catálogo de produtos, incluindo adição, edição e exclusão de itens.

## Backend API

Foi criada uma API no backend para realizar as operações CRUD (Create, Read, Update, Delete) dos produtos. A API é responsável por fornecer e manipular os dados dos produtos, permitindo que a aplicação frontend os exiba e os gerencie de acordo com as necessidades do usuário.

## Como Executar Localmente

1. **Clone o Repositório**: Faça uma cópia do repositório para sua máquina local utilizando o seguinte comando:

    ```
    git clone https://github.com/larian3/E-Commerce-Desafio-Compass.git
    ```

2. **Instale as Dependências**: Navegue até o diretório do projeto e instale as dependências usando npm ou yarn:

    ```
    cd e-commerce-compass
    npm install
    ```

3. **Configure o Banco de Dados**: Certifique-se de ter uma instância do PostgreSQL em execução localmente ou configurada em um ambiente de desenvolvimento. Altere as credenciais do banco de dados no arquivo `.env` conforme necessário.

4. **Execute as Migrações do Prisma**: Execute as migrações do Prisma para criar as tabelas do banco de dados:

    ```
    npx prisma migrate dev
    ```

5. **Inicie o Servidor de Desenvolvimento**: Inicie o servidor de desenvolvimento Next.js para iniciar a aplicação:

    ```
    npm run dev
    ```

6. **Acesse a Aplicação**: Acesse a aplicação em seu navegador web em `http://localhost:3000`.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com sugestões de melhorias, correções de bugs ou novos recursos.

