import { useState } from "react";

export default function RemoverLista() {

    const [tarefas, setTarefas] = useState([])
    const [tarefa, setTarefa] = useState('')

    function adicionarTarefa() {
        setTarefas([...tarefas, tarefa])
        setTarefa('')
    }

    function removerTarefa(index) {
        setTarefas(tarefas.filter((_, i) => i !== index))
    }

    return (
        <div>
            <input 
                type="text" 
                value={tarefa} 
                onChange={(e) => setTarefa(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removerTarefa(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}