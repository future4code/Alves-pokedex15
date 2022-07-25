import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../Assets/Img/Logo.png'
import { goPokedex, goBack } from '../Routes/coordinator.js'
import pokegif from '../Assets/Img/pokegif.gif'

const PokeGif = styled.img`
  width: 300px;
  height: 300px;
`

const StyleFatherContainer = styled.div`
  background-color: red;
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
      <StyleLogo src={logo} />
      <div onClick={() => goPokedex(navigate)}>
        <PokeGif src={pokegif} />
      </div>
    </StyleFatherContainer>
  )
}
