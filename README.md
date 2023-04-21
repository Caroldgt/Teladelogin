# Tela de Login em React

Este é um exemplo de código de uma tela de login simples, utilizando React, Yarn e Vite. O objetivo deste projeto é demonstrar como criar uma tela de login com formulário, validação de campos e redirecionamento para uma página de sucesso.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu computador:

- Node.js (v12 ou superior)
- Yarn (v1 ou superior)
- Vite (v2 ou superior)
- React (v17 ou superior)

## Instruções de instalação

Clone o repositório em sua máquina:
https://github.com/Caroldgt/Teladelogin.git

Instale as dependências:
- yarn install
- npm install

Abra o navegador e acesse http://localhost:3000

## Estrutura do projeto

O projeto possui a seguinte estrutura de arquivos:

nome-do-repositorio/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── LoginForm.js
│ │ └── ...
│ ├── pages/
│ │ ├── LoginPage.js
│ │ └── ...
│ ├── App.js
│ └── index.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock


A pasta public/ contém os arquivos públicos do projeto, como o arquivo HTML principal. A pasta src/ contém o código fonte da aplicação, dividido em componentes e páginas. O arquivo App.js é responsável por renderizar a aplicação no navegador, enquanto o arquivo index.js é responsável por inicializar o servidor do Vite.

## Funcionalidades

A tela de login possui os seguintes recursos:

- Formulário de login com campos de email e senha
- Validação de campos obrigatórios e formato de email válido
- Botão de login desabilitado até que todos os campos estejam preenchidos corretamente
- Redirecionamento para uma página de sucesso após o login bem-sucedido

## Tecnologias utilizadas

- React
- Yarn
- Vite
- CSS
- JavaScript

## Licença

Este projeto está sob a licença MIT.
