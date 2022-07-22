import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyledCard, StyleImg, ImgButton, PokeButton, DivPai } from './Styled'
import { StyledButtom } from './Styled'
import { BASE_URL } from '../../consts/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { goDetails } from '../Routes/coordinator'
import pokebola from '../Assets/Img/pokebola.png'

export default function PokeCard() {

    const navigate = useNavigate()
    const [listaPokeHome, setlistaPokeHome] = useState([])
    const [pokeList, setPokeList] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        pegaPokemons()
        atualizaPokedexComStorage()
    }, [])


    useEffect(() => {
        if (listaPokeHome.length > 0) {
            localStorage.setItem("pokeHome", JSON.stringify(listaPokeHome))
            console.log(listaPokeHome)
        }

    }, [pokeList])

    useEffect(() => {
        pegaDetalhesPokes()
    }, [listaPokeHome.length > 0])


    useEffect(() => {
      pokedex.length > 0 && localStorage.setItem("pokedex", JSON.stringify(pokedex))
    }, [pokedex])


    const atualizaPokedexComStorage = () => {
        localStorage.getItem("pokedex") !== null &&
        setPokedex(JSON.parse(localStorage.getItem("pokedex")))
    }

    const pegaPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
            .then((res) => {
                setlistaPokeHome(res.data.results)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    const pegaDetalhesPokes = () => {

        const lista = []
        listaPokeHome.forEach((poke) => {
            axios.get(poke.url)
                .then((res) => {
                    lista.push(res)
                    if (lista.length === 20) {
                        setPokeList(lista)
                    }
                })
                .catch((erro) => { console.log(erro) })
        })
    }
    // if (localStorage.hasOwnProperty("peoples")) {
    //     peoples = JSON.parse(localStorage.getItem("peoples"))
    //   }

    const capturarPokemon = (poke) => {
        setPokedex([...pokedex, poke ])
           
    }
    
    console.log(pokedex)

    const pokemon = pokeList.map((poke) => {
        return (
            <StyledCard key={poke.data.species.name}>

                <StyleImg src={poke.data.sprites.other.dream_world.front_default} />

                <h5>{poke.data.species.name}</h5>
                {poke.data.types.map((type) => {
                    return (
                        <p key={type.type.name}>{type.type.name}</p>
                    )
                })}
                <StyledButtom>
                    <button onClick={() => { goDetails(navigate) }}>Detalhes</button>
                    <PokeButton onClick={() => capturarPokemon(poke)}>
                        <ImgButton src={pokebola} />
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
