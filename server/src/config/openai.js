const { Configuration, OpenAIApi } = require("openai");

module.exports = class OpenAI {
    /**
     * Configura e retorna a instância da API OpenAI.
     * @returns {OpenAIApi} Instância configurada da OpenAIApi.
     */
    static configuration() {
        try {
            const configuration = new Configuration({
                apiKey: process.env.OPENAI_API_KEY,
            });
            return new OpenAIApi(configuration);
        } catch (error) {
            console.error("Error configuring OpenAI API:", error.message);
        }
    }

    /**
     * Completa um prompt de texto usando o modelo OpenAI.
     * @param {string} prompt - O prompt de texto a ser completado.
     * @returns {Promise<string>} A resposta de texto completada.
     */
    static async textCompletion(prompt) {
        const openai = this.configuration();
        if (!openai) {
            console.error("OpenAI API is not configured correctly.");
            return;
        }

        try {
            const response = await openai.createCompletion({
                model: process.env.OPENAI_MODEL || "text-davinci-003", // Modelo configurável a partir do .env
                prompt: prompt,
                temperature: 0,
                max_tokens: 3500,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
            });
            return response.data.choices[0].text;
        } catch (error) {
            console.error("Error completing text:", error.message);
        }
    }
};
