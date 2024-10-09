# Business Location Tracker - E2E Tests


Este repositório contém os testes E2E (End-to-End) para o aplicativo Business Location Tracker. Os testes são escritos em Cypress e têm como objetivo garantir a funcionalidade e a qualidade da aplicação.

## Demo dos Testes 📸

<h1 align="center">
  <img alt="Demo de Testes E2E" src="/public/img/demo_test.gif">
</h1>

## Tabela de Conteúdos

- [Tecnologias](#tecnologias)
  - [Requisitos](#requisitos)
  - [Como Rodar os Testes](#como-rodar-os-testes)
- [Licença](#licença)

## Tecnologias 🛠️

Este projeto foi construído com as seguintes tecnologias:

- [Cypress »](https://www.cypress.io/)



### Requisitos

- [Node.js »](https://nodejs.org/en/download) na sua versão LTS
- Extensão do ESLint instalada no VS Code
- Para garantir que os testes rodem corretamente, verifique se o servidor da aplicação está em execução.

### Como Rodar os Testes

1. Clone o projeto: `git clone https://github.com/alexsandroferreira/BL-tracker-web-testes-e2e.git`.
2. Instale as dependências: `npm install`.
4. Para rodar os testes E2E, execute: `npm run cypress:open`.
5. Para executar em modo headless: `npm run cypress:run`.
6. Para executar em modo headless com mochawesome: `test:report` 