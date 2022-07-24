import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PokeCard from '../../PokeCard/PokeCard'
import { goBack } from '../../Routes/coordinator'
import pokedex1 from '../../Assets/Img/pokedex1.png'
import liberar from '../../Assets/Img/liberar.png'
import { goDetails } from '../../Routes/coordinator'
import GlobalContext from '../../../Global/GlobalContext'
import {
  StyledCard,
  StyleImg,
  DetailButton,
  DetailImgButton,
  ContainerImgPoke,
  StyledButtom
} from '../../PokeCard/Styled'
import styled from 'styled-components'

const LiberarButton = styled.div``

const LiberarImg = styled.img`
  width: 50px;
  height: 50px;
  &:hover {
    animation: StyleImg 0.3s linear both;
    @keyframes StyleImg {
      100% {
        transform: scale(1.5);
      }
    }
  }
`

export default function Pokedex() {
  const [pokes, setPokes] = useState([])
  const { setPoke } = useContext(GlobalContext)

  const navigate = useNavigate()

  useEffect(() => {
    renderPokedex()
  }, [])

  const renderPokedex = () => {
    setPokes(JSON.parse(localStorage.getItem('pokedex')))
  }

  const pokemon = pokes?.map(poke => {
    return (
      <StyledCard key={poke.data.species.name}>
        <ContainerImgPoke>
          <StyleImg src={poke.data.sprites.other.dream_world.front_default} />
        </ContainerImgPoke>

        <h5>{poke.data.species.name}</h5>
        {poke.data.types.map(type => {
          return (
            <div>
              <p key={type.type.name}>{type.type.name}</p>
            </div>
          )
        })}
        <StyledButtom>
          <DetailButton
            onClick={() => {
              goDetails(navigate, setPoke, poke)
            }}
          >
            <DetailImgButton src={pokedex1} />
          </DetailButton>
          <LiberarButton>
            <LiberarImg src={liberar} />
          </LiberarButton>
        </StyledButtom>
      </StyledCard>
    )
  })

  console.log(pokes)
  return (
    <div>
      <h1>POKEDEX</h1>
      {pokemon ? pokemon : <h1>Vazio</h1>}
    </div>
  )
}
