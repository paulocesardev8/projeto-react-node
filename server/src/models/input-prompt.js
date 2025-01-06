/**
 * Classe para manipular prompts de entrada.
 */
class InputPrompt {
    /**
     * Constrói uma instância de InputPrompt.
     * @param {Object} param0 - O objeto contendo o prompt.
     * @param {string} param0.prompt - O prompt de entrada.
     */
    constructor({ prompt }) {
        if (!prompt || typeof prompt !== 'string') {
            throw new Error('Prompt is required and must be a string.');
        }
        this.prompt = prompt;
    }

    /**
     * Retorna o prompt atual.
     * @returns {string} O prompt atual.
     */
    getPrompt() {
        return this.prompt;
    }

    /**
     * Atualiza o prompt.
     * @param {string} newPrompt - O novo prompt.
     */
    setPrompt(newPrompt) {
        if (!newPrompt || typeof newPrompt !== 'string') {
            throw new Error('New prompt is required and must be a string.');
        }
        this.prompt = newPrompt;
    }
}

module.exports = InputPrompt;
