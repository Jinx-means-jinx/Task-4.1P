import React from 'react';
import './Button.css'

function Button({Clicked, text}){
    return(
        <div className='Button'>
            <button onClick={Clicked} name = "button">{text}</button>
        </div>
    )
}
    
export default Button;

