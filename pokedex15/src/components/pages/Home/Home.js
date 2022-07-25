import React from 'react'
import PokeHome from '../../PokeHome/PokeHome'
import styled from 'styled-components'
import { StyledHome } from './StyleHome'

export default function Home() {
  return (
    <StyledHome>
      <PokeHome />
    </StyledHome>
  )
}
