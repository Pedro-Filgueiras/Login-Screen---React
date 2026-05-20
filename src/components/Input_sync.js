import { useState } from "react"

export default function(){

    const [sync, setSync] = useState('Aguardando digitação')

    function texto(e) {
        setSync(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={texto}/>
            <h2>Você está digitando: {sync}</h2>
        </div>
    )
}