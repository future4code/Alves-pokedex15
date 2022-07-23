export const goHome = navigate => {
  navigate('/home')
}

export const goDetails = (navigate, setPoke, poke) => {
  navigate('/detalhes')
  setPoke(poke)
}

export const goPokedex = navigate => {
  navigate('/pokedex')
}

export const goBack = navigate => {
  navigate(-1)
}
