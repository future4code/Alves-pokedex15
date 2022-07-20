import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { StyledCard } from './Styled'
import { StyledButtom } from './Styled'
import { BASE_URL } from '../../consts/BASE_URL'

export default function PokeCard() {

    const [listaPoke, setListaPoke] = useState([])
    const [pokeList, setPokeList] = useState([])

    useEffect (() => {
        pegaPokemons()
    }, [])

    useEffect (() => {
        pegaPokemons()
    }, [listaPoke.length === 20])

    const pegaPokemons = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then((res)=>{
            console.log(res.data.results)
            setListaPoke(res.data.results)
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }

    const detalhePokes = () =>{
        listaPoke.forEach((poke)=>{
           axios.get(poke.url)
           .then((res)=>{console.log(res)})
           .catch((erro)=>{console.log(erro.response)})
       }) 
       }

    return (

        <StyledCard>
            <figure>
                <img src='https://i.picsum.photos/id/870/200/200.jpg?hmac=G4IaFUfMAbn5JlMY8wZINYyI9gol9fXYZXdaVEF5Jzg' />
            </figure>
            <h5>pokemon</h5>
            <StyledButtom>
                <button onClick={detalhePokes}>Detalhes</button>
                <button>Capturar</button>
            </StyledButtom>
        </StyledCard>
    )
}
