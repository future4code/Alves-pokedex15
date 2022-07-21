import React from 'react'
import PokeCard from '../../PokeCard/PokeCard'
import styled from 'styled-components'
import { StyledHome } from './StyleHome'

export default function Home() {
  return (
    <StyledHome>
      <PokeCard />
    </StyledHome>
  )
}
