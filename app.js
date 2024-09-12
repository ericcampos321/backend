require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 5000; // Define uma porta padrão

const app = express();

// Configurações para JSON e form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuração do CORS
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

//DB connection
require("./src/config/db.js");

// Rotas
const router = require("./src/routes/Router.js");
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
