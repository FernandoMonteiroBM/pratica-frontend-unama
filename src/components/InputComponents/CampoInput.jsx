import React from 'react';
import InputMask from "react-input-mask";

function CampoInput({textLabel,...others}){
    return(
        <div>
            <label htmlFor={others.id}>{textLabel}</label>
            <InputMask id={others.id}
            {...others}/>
        </div>
    )
}
export default CampoInput;