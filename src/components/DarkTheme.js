import { useState } from "react";

export default function DarkTheme(){

    const [dark, setDark] = useState(false)

    function mudarTema() {
        setDark(!dark)
    }


    return(
        <div className={dark ? 'tema-escuro' : '' }>
            <h1 className={dark ? 'white-font' : ''}>Título do Card</h1>
            <p className={dark ? 'white-font' : ''}>Um pequeno texto para utilizar no card</p>
            <button  onClick={()=>mudarTema()}>Alternar Tema</button>
        </div>
    )
}