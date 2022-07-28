import { useState } from "react";
import GlobalContext from "./GlobalContext";

export default function GlobalState({children}){

    const [poke, setPoke] = useState({})

    const Provider = GlobalContext.Provider

    const values ={
        //  poke: "dados poke"
        setPoke
    }
    console.log(poke)

    return <Provider value={values}>{children}</Provider>
}