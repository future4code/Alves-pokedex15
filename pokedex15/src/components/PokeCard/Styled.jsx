import styled from 'styled-components'

export const DivPai = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`

export const StyledCard = styled.div`
background-color: #729F92;
display: flex;
justify-content: center;
flex-direction: column;
justify-content: space-around;
align-items: center;
 border: 1px solid yellow;
 width: 250px;
 height: 300px;
 padding: 10px;
 margin: 10px 25px 10px 25px;
 border-radius: 10px;
 &:hover {
    animation: StyledCard 0.3s linear both;
    @keyframes StyledCard {
      100% {
        transform: scale(1.2);
      }
    }
  }
`
export const StyledButtom = styled.div`
width: 250px;
display: flex;
justify-content: space-around;
`

export const ContainerImgPoke = styled.div`
`

export const StyleImg = styled.img`
width: 200px;
height: 200px;
&:hover {
    animation: StyleImg 0.3s linear both;
    @keyframes StyleImg {
      100% {
        transform: scale(1.5);
      }
    }
  }
`

export const CapImgButton = styled.img`
  width: 50px;
  height: 50px;
  border: none;
  background-color: none;
  &:hover {
    animation: pokebola 0.8s linear both infinite;
    @keyframes pokebola {
      50% {
        transform: scale(2);
      }
    }
  }
`

export const PokeButton = styled.div`
background-color: none;`

export const DetailButton = styled.div`
background-color: none;
`

export const DetailImgButton = styled.img`
  width: 50px;
  height: 50px;
  border: none;
  &:hover {
  animation: pokedex1 1.3s linear both infinite;
    @keyframes pokedex1 {
      0% {
        transform: scale(1) rotateZ(0);
      }
      50% {
        transform: scale(2) rotateZ(180deg);
      }
      100% {
        transform: scale(1) rotateZ(360deg);
      }
    }
  }
` 