import * as React from "react"

function Input ({tipoPassado="text",  name="", id="", placeholder=""}) {

    const tipoInputOpcoes = {
        texto: "text",
        data: "date",
        senha: "password",
        email: "email"
    };

    const tipoInput = tipoInputOpcoes[tipoPassado] || 'text';

    return (
        <input type={tipoInput} name={name} id={id} placeholder={placeholder} style={{borderRadius: "5px", padding: "3px"}}/>
    )
}

export default Input;

