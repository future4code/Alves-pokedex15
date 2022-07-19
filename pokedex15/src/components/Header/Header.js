import React from 'react'
import styled from 'styled-components'
import logoPokemon from '../Assets/Img/logoPokemon.png'

const StyleLogo = styled.img`
  width: 600px;
  height: 250px;
`

const StyleFatherContainer = styled.div`
  background: linear-gradient(gray, midnightBlue);
`

export default function Header() {
  return (
    <StyleFatherContainer>
      <StyleLogo src={logoPokemon} />
    </StyleFatherContainer>
  )
}
