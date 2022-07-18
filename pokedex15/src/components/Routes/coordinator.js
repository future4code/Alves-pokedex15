import React from 'react'
import { useNavigate } from 'react-router-dom'

export const goHome = navigate => {
  navigate('/home')
}

export const goDetails = navigate => {
  navigate('/detalhes')
}

export const goPokedex = navigate => {
  navigate('/pokedex')
}

export const goBack = navigate => {
  navigate(-1)
}
