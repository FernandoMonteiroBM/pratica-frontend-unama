import React from 'react';
import "./RadioButton.css"
function RadioButton() {
    return (
        <div className="radio">
            <p>Selecione seu sexo:</p>
            <p >Masculino<input type="radio" name="sex"  /></p>
            <p >Feminino<input type="radio" name="sex" /></p>
        </div>
    );
}

export default RadioButton;