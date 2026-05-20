import { useState } from "react";

export default function FiltroDeBusca() {

    const frutas = ["Maçã", "Banana", "Uva", "Morango", "Abacaxi"]
    const [busca, setBusca] = useState('')

    function filtrar() {
        return frutas.filter(fruta => 
            fruta.toLowerCase().includes(busca.toLowerCase())
        )
    }

    return (
        <div>
            <input 
                type="text" 
                value={busca}
                placeholder="Buscar fruta..."
                onChange={(e) => setBusca(e.target.value)}
            />
            <ul>
                {filtrar().map((fruta, index) => (
                    <li key={index}>{fruta}</li>
                ))}
            </ul>
        </div>
    )
}