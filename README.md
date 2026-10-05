📦 Meu Estudo de Caso — CRUD de Produtos (Web + Mobile)

Este projeto foi desenvolvido como parte do Estudo de Caso proposto na disciplina, com foco em rotas, componentização, consumo de API e navegação em aplicações Web e Mobile.

Ele é dividido em duas aplicações:

🌐 Web (React + Vite)

📱 Mobile (React Native + Expo)

Ambas consomem a mesma API pública de produtos e permitem:

✔ Listar
✔ Criar
✔ Editar
✔ Excluir

🧭 Sumário

Descrição Geral

Tecnologias Utilizadas

Estrutura do Projeto

API Utilizada

Funcionalidades

Como Rodar a Aplicação Web

Como Rodar a Aplicação Mobile

Rotas Implementadas

Screenshots

Autoria

📘 Descrição Geral

O objetivo deste estudo de caso é demonstrar o uso de rotas em aplicações Web e Mobile, integrando com uma API real para realizar operações de CRUD (Create, Read, Update e Delete).

A aplicação é dividida da seguinte forma:

📂 web/ → aplicação React (Vite)
📂 mobile/ → aplicação Expo (React Native)

Ambos consomem os mesmos dados através da API disponibilizada pelo professor.

🛠 Tecnologias Utilizadas
🌐 Web

React

Vite

React Router DOM

Axios

React Bootstrap (opcional)

📱 Mobile

React Native

Expo

Expo Router

React Native Paper

Axios

⚙ Geral

Git & GitHub

Node.js

API REST de produtos

📂 Estrutura do Projeto
meu-estudo-caso/
│
├── web/               # Projeto web (React + Vite)
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
│   └── package.json
│
└── mobile/            # Projeto mobile (React Native + Expo)
    ├── app/
    │   ├── produtos/
    │   │   ├── index.tsx      # Lista de produtos
    │   │   ├── novo.tsx       # Novo produto
    │   │   └── [id].tsx       # Editar produto
    │   ├── _layout.tsx        # Navegação principal
    │   └── index.tsx          # Tela inicial
    ├── components/
    ├── scripts/
    └── package.json

🌐 API Utilizada

Todas as operações são feitas na API pública:

https://proweb.leoproti.com.br/produtos

Exemplo de objeto:
{
  "id": 0,
  "nome": "Produto exemplo",
  "preco": 99.90
}

Endpoints usados:
GET    /produtos
GET    /produtos/{id}
POST   /produtos
PUT    /produtos/{id}
DELETE /produtos/{id}

🧩 Funcionalidades
✔ Listar produtos

Exibe todos os produtos retornados pela API.

✔ Criar produto

Formulário para adicionar um novo item.

✔ Editar produto

Atualiza nome e preço.

✔ Excluir produto

Deleta o produto da API e atualiza a tela automaticamente.

✔ Navegação (rotas)

Web → React Router DOM

Mobile → Expo Router

▶️ Como Rodar a Aplicação Web

1️⃣ Entre na pasta web/

cd web


2️⃣ Instale as dependências

npm install


3️⃣ Rode o projeto

npm run dev


O projeto ficará disponível em:

👉 http://localhost:5173

📱 Como Rodar a Aplicação Mobile

1️⃣ Entre na pasta mobile/

cd mobile


2️⃣ Instale as dependências

npm install


3️⃣ Instale pacotes do Expo Router

npm install expo-router
npx expo install react-native-screens react-native-safe-area-context


4️⃣ Rode o projeto

npx expo start


Abra no celular usando:

📱 Expo Go (Android/iOS)
ou rode no navegador com W

🛣 Rotas Implementadas
🌐 Web (React Router DOM)
/                → lista de produtos
/product/:id     → detalhes/edição

📱 Mobile (Expo Router)
/                 → tela inicial
/produtos         → lista de produtos
/produtos/novo    → novo produto
/produtos/[id]    → editar produto

✒️ Autoria

Projeto desenvolvido por:

Natalia Leandro
Estudo de Caso — Rotas Web e Mobile
Programação Web / Desenvolvimento Mobile
