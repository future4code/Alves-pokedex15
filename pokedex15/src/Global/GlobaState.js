import React, { useState } from 'react'
import GlobalContext from './GlobalContext'

export default function GlobaState({ children }) {
  const [poke, setPoke] = useState({})
  const Provider = GlobalContext.Provider
  const values = {
    poke,
    setPoke
  }

  return <Provider value={values}>{children}</Provider>
}
