import React from 'react';
import InputMask from "react-input-mask";

function CampoInput({textLabel,error,...others}){
    return(
        <div>
            {error && <p className="erro">{error}</p>}
            <label htmlFor={others.id}>{textLabel}</label>
            <InputMask id={others.id}
            {...others} className="input-padrao"/>
        </div>
    )
}
export default CampoInput;