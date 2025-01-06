const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// Usando as rotas definidas
app.use(routes);

// Tratamento de erros globais
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({
        success: false,
        message: "Server error"
    });
});

// Configuração da porta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
