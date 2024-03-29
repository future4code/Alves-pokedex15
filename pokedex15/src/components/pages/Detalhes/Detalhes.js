import React, { useContext, useState } from 'react'
import {
  ContainerDetails,
  ImgPoke,
  StyleTypes,
  ContainerPowers,
  StyleDivPai,
  StyleAttaks
} from './StyleDetail'
import { GlobalState } from '../../../Global/GlobaState'
import GlobalContext from '../../../Global/GlobalContext'

export default function Detalhes() {
  const { poke } = useContext(GlobalContext)

  console.log(poke)

  const stats = poke.data.stats.map(item => <p>{item.base_stat}</p>)
  const nameStats = poke.data.stats.map(item => <p>{item.stat.name}</p>)

  return (
    <StyleDivPai>
      <ContainerDetails key={poke.data.species.name}>
        <div>
          <h2>{poke.data.species.name}</h2>

          <ImgPoke
            src={
              poke.data.sprites.versions['generation-v']['black-white'].animated
                .front_default
            }
          />
        </div>
        <div>
          {poke.data.types.map(type => {
            return (
              <StyleTypes>
                <h4 key={type.type.name}>{type.type.name}</h4>
              </StyleTypes>
            )
          })}
        </div>
      </ContainerDetails>
      <ContainerPowers>
        <br />
        <br />
        <br />

        <h1>{nameStats}</h1>
        <h1>{stats}</h1>
      </ContainerPowers>
      <StyleAttaks>
        <h1>Habilidades</h1>
        <br />
        <br />
        <br />
        {poke.data.abilities.map(ability => {
          return (
            <div>
              <h2 key={ability.ability.name}>{ability.ability.name}</h2>
              <br />
            </div>
          )
        })}
      </StyleAttaks>
    </StyleDivPai>
  )
}
