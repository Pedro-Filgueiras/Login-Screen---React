import { useState, useEffect } from "react";

export default function JogoDoClique() {

    const [pontuacao, setPontuacao] = useState(0)
    const [tempo, setTempo] = useState(10)
    const [ativo, setAtivo] = useState(false)

    function começarJogo() {
        setPontuacao(0)
        setTempo(10)
        setAtivo(true)
    }

    function clicar() {
        setPontuacao(pontuacao + 1)
    }

    useEffect(() => {
        if (!ativo) return

        if (tempo === 0) {
            setAtivo(false)
            return
        }

        const intervalo = setInterval(() => {
            setTempo(t => t - 1)
        }, 1000)

        return () => clearInterval(intervalo)
    }, [tempo, ativo])

    return (
        <div>
            <h2>Tempo: {tempo}s</h2>
            <h2>Pontuação: {pontuacao}</h2>

            <button onClick={começarJogo}>Começar Jogo</button>

            <br/><br/>

            <button onClick={clicar} disabled={!ativo}>
                Clique Aqui!
            </button>

            {!ativo && tempo === 0 && (
                <p>Fim de jogo! Você fez {pontuacao} pontos!</p>
            )}
        </div>
    )
}