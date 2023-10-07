# api fotovoltaica

**Uma API para simulação de orçamento de energia fotovoltaica**

## 💻 Tecnologias

Ess projeto usa a seguintes tecnologias:

- [ExpressJs](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [PostgreSQL Database](https://www.postgresql.org/)

## ⚙️ Rodar API

Para Rodar essa aplicação é necessário:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
### 1 - Clone este repositório e acesse o editor de código

```bash
# Clonar repositório
$ git clone https://github.com/felipealp/eletronic-point_api

#Acesse o caminho do projeto
$ cd ponto eletrônico_api

# Acesse o editor de código (exemplo para vscode)
$ código.
```

### 2 - Crie um arquivo .env no projeto e configure o banco de dados postgre

```
# .env exemplo:
DB_CONNECTION=postgres
DB_HOST=localhost
DB_USER=usuário
DB_PASSWORD=senha
DB_DATABASE=banco_de_dados
```

### 3 - Instale as dependências e execute o projeto

```bash
# Instale as dependências
$ npm install

# Executa o aplicativo em modo de desenvolvimento
$ npm start

# Pronto!
# API rodando em http://localhost:3001
```
