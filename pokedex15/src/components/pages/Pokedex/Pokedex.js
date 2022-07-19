import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/coordinator'

export default function Pokedex() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Pokedex</h1>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}
