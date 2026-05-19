import React,{useState} from 'react'

export default function App() {

  const [nome,setNome] = useState ('')

  return (
    <>
      <label>Digite seu Nome:</label>
      <input 
        type='text' 
        name='fnome'
        value={nome} 
        onChange={(e)=>{setNome(e.target.value)}}
      />
      <p>Nome digitado:</p>
    </>
  )
}