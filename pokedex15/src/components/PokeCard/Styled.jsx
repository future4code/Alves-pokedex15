import styled from 'styled-components'

export const DivPai = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`

export const StyledCard = styled.div`
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
`
export const StyledButtom = styled.div`
width: 250px;
display: flex;
justify-content: space-around;
`

export const StyleImg = styled.img`
width: 200px;
height: 200px;
`

export const ImgButton = styled.img`
  width: 50px;
  height: 50px;
  border: none;
  background-color: none;
  &:hover {
    animation: Icon 1.3s linear both infinite;
    @keyframes Icon {
      50% {
        transform: scale(2);
      }
    }
  }
`

export const PokeButton = styled.div`
background-color: none;`