import axios from 'axios';

const URL_API = 'http://localhost:5555/api/prompt';

/**
 * Faz uma requisição para a API com a mensagem fornecida.
 * @param {Object} message - A mensagem a ser enviada para a API.
 * @returns {Object} Os dados retornados pela API.
 */
export const makeRequest = async (message) => {
    try {
        const { data } = await axios.post(URL_API, message);
        return data;
    } catch (error) {
        console.error('Error making request:', error.message);
        throw error;
    }
};
