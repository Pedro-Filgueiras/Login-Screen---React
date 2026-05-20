import { useState } from "react";

export default function LimiteEstoque() {

    const [quantidade, setQuantidade] = useState(1)

    function aumentar() {
        if (quantidade < 10) {
            setQuantidade(quantidade + 1)
        }
    }

    function diminuir() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1)
        }
    }

    return (
        <div>
            <button onClick={diminuir} disabled={quantidade === 1}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentar} disabled={quantidade === 10}>+</button>
        </div>
    )
}