import { useState } from 'react'
import { Luz } from './Luz'

export const Sinalizacao = ({ cores = [] }) => {
  const [idAtual, setIdAtual] = useState("");
  return (
      <div className="sinalizacao">
        {cores.map(({ id, cor, nome }) => (
            <Luz 
            key={id}
            cor={cor} nome={nome} ligado={id === idAtual} onClick={() => setCorAtual(id)}/>
        ))}
      </div>
  )
}