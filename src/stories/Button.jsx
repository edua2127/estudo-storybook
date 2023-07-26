import * as React from "react"

function Button ({label = "sem texto definido", altura = '50px', largura = '100px', tipo, padding = "10px"}) {
    const cores = {
        adicionar: '#90EE90',
        editar: '#ADD8E6',
        excluir: '#FF7F7F'
    };

    const cor = cores[tipo] || '#D3D3D3';

    return (
        <button style={{ height: altura, width: largura, backgroundColor: cor, padding: padding }}>{label}</button>
    )
}

export default Button;

