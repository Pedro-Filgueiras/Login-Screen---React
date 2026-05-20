import { useState } from "react";

export default function Lista() {

    const [tarefas, setTarefas] = useState([])
    const [tarefa, setTarefa] = useState('')

    function adicionarTarefa() {
        setTarefas([...tarefas, tarefa])
        setTarefa('')
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
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}