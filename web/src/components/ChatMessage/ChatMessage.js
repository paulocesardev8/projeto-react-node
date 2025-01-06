import React from "react";
import PropTypes from 'prop-types';
import './ChatMessage.css';
import Avatar from "../../assets/avatar";

// Definição do componente ChatMessage
export const ChatMessage = ({ message }) => {
    return (
        <div className={`chat-message ${message.user === 'gpt' ? 'chatgpt' : ''}`}>
            <div className="chat-message-center">
                <div className={`avatar ${message.user === 'gpt' ? 'chatgpt' : ''}`}>
                    {message.user === 'gpt' && <Avatar />}
                </div>
                <div className="message">
                    {message.message}
                </div>
            </div>
        </div>
    );
};

// Definição das PropTypes para validação das propriedades
ChatMessage.propTypes = {
    message: PropTypes.shape({
        user: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired
};

export default ChatMessage;
