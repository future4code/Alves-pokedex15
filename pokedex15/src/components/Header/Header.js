import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logoPokemon from '../Assets/Img/logoPokemon.png'
import { goPokedex, goBack } from '../Routes/coordinator.js'

const StyleFatherContainer = styled.div`
  background: linear-gradient(gray, midnightBlue);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 0;
`

const StyleLogo = styled.img`
  width: 600px;
  height: 250px;
`

export default function Header() {
  const navigate = useNavigate()

  return (
    <StyleFatherContainer>
      <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      </div>
      <StyleLogo src={logoPokemon} />
      <div>
        <button onClick={() => goPokedex(navigate)}>Pokedex</button>
      </div>
    </StyleFatherContainer>
  )
}
