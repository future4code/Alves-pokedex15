import React, { useContext, useState } from 'react'
import { StyleDatail } from './StyleDetail'
import { GlobalState } from '../../../Global/GlobaState'
import GlobalContext from '../../../Global/GlobalContext'

export default function Detalhes() {
  const { poke } = useContext(GlobalContext)
  
  return (
    <div>
      <div key={poke.data.species.name}>
        <div>
          <img src={poke.data.sprites.other.dream_world.front_default} />
        </div>

        <h5>{poke.data.species.name}</h5>
        {poke.data.types.map(type => {
          return (
            <div>
              <p key={type.type.name}>{type.type.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}