import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { StyledCard, StyleImg, ImgButton, PokeButton, DivPai } from './Styled'
import { StyledButtom } from './Styled'
import { BASE_URL } from '../../consts/BASE_URL'
import { useNavigate } from 'react-router-dom'
import {goDetails} from '../Routes/coordinator'
import pokebola from '../Assets/Img/pokebola.png'

export default function PokeCard() {

    const navigate = useNavigate()
    const [listaPoke, setListaPoke] = useState([])
    const [pokeList, setPokeList] = useState([])

    useEffect (() => {
        pegaPokemons()
    }, [])

    useEffect (() => {
        detalhePokes()
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

    const detalhePokes = () => {

        const lista = []
        listaPoke.forEach((poke) => {
            axios.get(poke.url)
                .then((res) => {
                    lista.push(res)
                    if (lista.length === 20) {
                        setPokeList(lista)
                    }
                    console.log(lista[0].data)
                })
                .catch((erro)=>{console.log(erro)})
        })
    }

    const pokemon = pokeList.map((poke)=>{
        return(
            <StyledCard key={poke.data.species.name}>
            
                <StyleImg src={poke.data.sprites.other.dream_world.front_default} />
           
            <h5>{poke.data.species.name}</h5>
            {poke.data.types.map((type)=>{
                return(
                    <p key={type.type.name}>{type.type.name}</p>
                )
            })}
            <StyledButtom>
                <button onClick={() =>{goDetails(navigate)}}>Detalhes</button>
                <PokeButton>
                    <ImgButton src={pokebola}/>
                </PokeButton>
            </StyledButtom>
        </StyledCard>
        )
    })

    return (
        <DivPai>
            {pokemon}
        </DivPai>
    )
    }
