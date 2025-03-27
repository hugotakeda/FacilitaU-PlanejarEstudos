# FacilitaU - Sistema de Notificação de Atividades para Alunos

O **FacilitaU** é um sistema simples para notificar alunos sobre atividades e prazos importantes. Ele permite que professores ou administradores adicionem atividades com título, descrição e data de entrega, e os alunos podem visualizá-las em uma interface web.

---

## 🚀 Funcionalidades

- **Adicionar atividades**: Insira atividades com título, descrição e data de entrega.
- **Visualizar atividades**: Os alunos podem ver todas as atividades cadastradas em uma lista organizada.
- **Interface simples e intuitiva**: Design limpo e fácil de usar.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript.
- **Backend**: Node.js, Express.
- **Banco de Dados**: SQLite.
- **Dependências**:
  - `express`: Framework para criar o servidor.
  - `sqlite3`: Banco de dados SQLite para armazenar as atividades.
  - `body-parser`: Middleware para processar dados do formulário.

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

---

## 🛠️ Como Configurar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/facilitau-planejarestudos.git
   cd facilita-u
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o banco de dados**:
   O banco de dados SQLite será criado automaticamente na primeira execução do projeto.

4. **Execute o servidor**:
   ```bash
   node src/server.js
   ```

5. **Acesse o sistema**:
   Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

---

## 🖥️ Estrutura do Projeto

```
/facilita-u
├── /public
│   ├── /css
│   │   └── styles.css
│   ├── /js
│   │   └── main.js
│   └── index.html
├── /src
│   ├── /routes
│   │   └── activities.js
│   ├── /models
│   │   └── Activity.js
│   ├── /database
│   │   └── db.js
│   └── server.js
├── package.json
├── README.md
└── database.db
```

---

## 📝 Como Usar

1. **Adicionar uma atividade**:
   - Preencha o formulário na página inicial com o título, descrição e data de entrega.
   - Clique em "Adicionar Atividade".

2. **Visualizar atividades**:
   - As atividades cadastradas serão exibidas em uma lista abaixo do formulário.

---

## 📂 Banco de Dados

O banco de dados SQLite (`database.db`) contém uma tabela chamada `activities` com os seguintes campos:

- `id`: Identificador único da atividade.
- `title`: Título da atividade.
- `description`: Descrição da atividade.
- `due_date`: Data de entrega da atividade.
- `created_at`: Data de criação da atividade.

---

## 🐛 Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adicionando nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
