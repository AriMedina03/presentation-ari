import React from 'react';
import './Botton.css';

const STYLES = ['btn--primary', 'btn--outline']; //los estilos que pueden tener los botones
const SIZES = ['btn--medium', 'btn--large']; //los tamaños que pueden tener los botones 

export const Botton = ({children, type, onClick, bottonStyle, bottonSize, link}) => {
    //el ? es si es verdadero, es el primer valor, si es falso, es el segundo valor
    //por eso creamos los styles del primero y por el del defecto
    const checkBottonStyle = STYLES.includes(bottonStyle) ? bottonStyle : STYLES[0];
    const checkBottonSize = SIZES.includes(bottonSize) ? bottonSize : SIZES[0];

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className='btn-mobile'>
            {/* El botón tiene los estilos que se le pasan por props */}
            <button className={`btn ${checkBottonStyle} ${checkBottonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </a>
    );
}