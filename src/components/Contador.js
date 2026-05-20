import React, { useState } from "react";

export default function Contador(){

    const [contagem, setContagem] = useState(0)

   

    return(
        <div>
            <h1>{contagem}</h1>
            <button onClick={()=>setContagem(contagem+1)}>Adicionar</button>        
            <button onClick={()=>setContagem(contagem-1)}>Subtrair</button>
        </div>
    )
}