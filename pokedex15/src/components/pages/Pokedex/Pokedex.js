import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
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
} from '../../PokeHome/Styled'
import styled from 'styled-components'

const LiberarButton = styled.div``

const ContainerPokedex = styled.div`
  background: linear-gradient(red, yellow);
`

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
    setPokes(JSON.parse(localStorage.getItem('pokedex')))
  }, [])

  const liberarPoke = poke => {
    let lista = pokes
    let novaLista = lista.filter(item => {
      if (item.data.name !== poke.data.name) {
        return item
      }
    })
    localStorage.setItem('pokedex', JSON.stringify(novaLista))
    setPokes(novaLista)
  }

  const pokemon = pokes?.map(poke => {
    return (
      <div>
        <StyledCard key={poke.data.name}>
          <ContainerImgPoke>
            <StyleImg src={poke.data.sprites.other.dream_world.front_default} />
          </ContainerImgPoke>

          <h5>{poke.data.species.name}</h5>
          {poke.data.types.map(type => {
            return (
              <div key={poke.data.name}>
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

            <LiberarButton onClick={() => liberarPoke(poke)}>
              <LiberarImg src={liberar} />
            </LiberarButton>
          </StyledButtom>
        </StyledCard>
      </div>
    )
  })

  return <div>{pokemon ? pokemon : <h1>Sua Pokedex esta Vazia</h1>}</div>
}
