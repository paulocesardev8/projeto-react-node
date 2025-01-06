const express = require("express");
const promptController = require("../controllers/prompt-controller");

const routes = express.Router();

/**
 * Rota para lidar com o envio de texto para o OpenAI API.
 * @route POST /api/prompt
 */
routes.post('/api/prompt', promptController.sendText);

/**
 * Middleware para tratar rotas não encontradas.
 */
routes.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

/**
 * Middleware para tratar erros do servidor.
 */
routes.use((error, req, res, next) => {
    console.error("Internal Server Error:", error);
    res.status(500).json({
        success: false,
        message: "Server error"
    });
});

module.exports = routes;
