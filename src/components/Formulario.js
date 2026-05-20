import { useState } from "react";

export default function Formulario() {

    const [usuario,setUsuario] = useState({'nome':'','idade':''})

    function salvarDados(e){
        if (e.target.name === 'fnome'){
            setUsuario({'nome':e.target.value , 'idade':usuario.idade})
        } else if (e.target.name === 'fidade'){
            setUsuario({'nome':usuario.nome , 'idade':e.target.value})
        }
    }

    return(
        <div>
            <form>
                <label>Nome<input type="text" value={usuario.nome} name="fnome" onChange={salvarDados}/></label>
                <label>Idade<input type="text" value={usuario.idade} name="fidade" onChange={salvarDados}/></label>
                <p>{`Nome: ${usuario.nome} | Idade: ${usuario.idade} anos`}</p>
            </form>
        </div>
    )
}