import React from 'react';
import PropTypes from 'prop-types';
import './SideMenu.css';

export const SideMenu = () => {
    return (
        <aside className='sidemenu'>
            <div className='sidemenu-button'>
                <span>+</span>
                Novo Chat
            </div>
        </aside>
    );
};

// Adicionar PropTypes (opcional, caso sejam necessárias propriedades)
SideMenu.propTypes = {
    // Exemplo de propType, caso necessário no futuro
    // someProp: PropTypes.string
};

export default SideMenu;
