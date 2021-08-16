import "./RadioButton.css"
import React from 'react';

function RadioButton({text, ...others}) {
    return (
        <p className="radio">
            {text}
            <input
                type="radio"
                {...others}
            />
            
        </p>
    );
}

export default RadioButton;