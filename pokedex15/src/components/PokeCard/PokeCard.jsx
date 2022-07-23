import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { 
    StyledCard,
    StyleImg,
    CapImgButton,
    PokeButton,
    DivPai,
    DetailButton,
    DetailImgButton,
    ContainerImgPoke
     } from './Styled'
import { StyledButtom } from './Styled'
import { BASE_URL } from '../../consts/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { goDetails } from '../Routes/coordinator'
import pokebola from '../Assets/Img/pokebola.png'
import pokedex1 from '../Assets/Img/pokedex1.png'
import GlobalContext from '../../Global/GlobalContext'


export default function PokeCard() {

    const navigate = useNavigate()
    const [listaPokeHome, setlistaPokeHome] = useState([])
    const [pokeList, setPokeList] = useState([])
    const [pokedex, setPokedex] = useState([])
    const {setPoke} = useContext(GlobalContext)
    const [pokeHome, setPokeHome] = useState()

    const filtraPokemons = () => {
        const lista = pokeList.filter((poke) =>{
            if(poke.data.species.name !== pokedex.poke.data.species.name){
                return poke
            } 
            setPokeHome(lista)
        })
    }

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
           localStorage.splice(JSON.stringify(poke))
    }
    
    console.log(pokedex)

    const pokemon = pokeList.map((poke) => {
        return (
            <StyledCard key={poke.data.species.name}>
                <ContainerImgPoke>
                    <StyleImg src={poke.data.sprites.other.dream_world.front_default} />
                </ContainerImgPoke>

                <h5>{poke.data.species.name}</h5>
                {poke.data.types.map((type) => {
                    return (
                        <div>
                            <p key={type.type.name}>{type.type.name}</p>
                        </div>
                    )
                })}
                <StyledButtom>
                    <DetailButton onClick={() => { goDetails(navigate, setPoke, poke) }}>
                        <DetailImgButton src={pokedex1} />
                    </DetailButton>
                    <PokeButton onClick={() => capturarPokemon(poke)}>
                        <CapImgButton src={pokebola} />
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
