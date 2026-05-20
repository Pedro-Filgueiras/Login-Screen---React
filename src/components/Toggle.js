import React, { useState } from "react";

export default function() {

    const [visibilidade, setVisibilidade] = useState(false)

    function mostrarTexto() {
        setVisibilidade(!visibilidade)
    }

    return(
        <div>
            <h1 className={visibilidade ? '' : 'invisivel'}>Texto de Exemplo</h1>
            <button onClick={mostrarTexto}>{visibilidade ? 'Ocultar mensagem' : 'Mostrar Mensagem'}</button>
        </div>
    )
}