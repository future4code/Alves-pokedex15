import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import pokedex1 from '../../Assets/Img/pokedex1.png'
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

export default function Pokedex() {
  const [pokes, setPokes] = useState([])
  const { setPoke } = useContext(GlobalContext)
  const navigate = useNavigate()

  useEffect(() => {
    setPokes(JSON.parse(localStorage.getItem('pokedex')))
  }, [])

  const liberarPoke = (poke)=>{
    let lista = pokes
    let novaLista = lista.filter((item)=>{
        if(item.data.name !== poke.data.name){
        return item}
       })
       localStorage.setItem("pokedex", JSON.stringify(novaLista))
       setPokes(novaLista)
  }

  const pokemon = pokes?.map(poke => {
    return (
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
            onClick={() => { goDetails(navigate, setPoke, poke) }}>
            <DetailImgButton src={pokedex1}/>
          </DetailButton>
          <button onClick={()=> liberarPoke(poke)}>Liberar</button>
        </StyledButtom>
      </StyledCard>
    )
  })

  return (
    <div>
      <h1>POKEDEX</h1>
      {pokemon ? pokemon : <h1>Vazio</h1>}
    </div>
  )
}
