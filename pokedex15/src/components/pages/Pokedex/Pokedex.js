import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/coordinator'

export default function Pokedex() {

  const [pokes, setPokes] = useState([])

  const navigate = useNavigate()

  useEffect(()=> {
    pegaPokemon()
  },[])

  const pegaPokemon = ()=>{
    if (localStorage.hasOwnProperty("listaPokes")) {
      const poke = JSON.parse(localStorage.getItem("listaPokes"))
      setPokes( poke )
    }
  }
console.log(pokes)
  return (
    <div>
      <h1>Pokedex</h1>


    </div>
  )
}
