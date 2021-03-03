import React from 'react';

const Button = ( { color, text, background, onClick } ) =>
{
    return (
        <button style={{ backgroundColor: background, color: color }} className="btn" onClick={onClick}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    color: '#fff',
    background: '#007bff',
    text: 'Add'
}

export default Button;