import Personaje from "./Personaje";
import { useEffect, useState } from "react";

export default function ListaPersonajes(page){
    const[personajes, setPersonajes]=useState([])
   

    const getPersonajes= async ()=>{
        //Fecth realiza la peticion a la Api
        const response= await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        setPersonajes(data.results)
        console.log(data.results);
    }

    useEffect(()=>{
        getPersonajes()
    }, [page])
    return(
        <div style={{display: "grid", gridTemplateColumns:"repeat(4, 1fr", gap:"1rem"}}>
            {personajes && personajes.length>0 ? personajes.map((personaje, index)=>
            <Personaje key={index} data={personaje}/>
            ) : <p>no hay data</p> }
            
            
        </div>
        
    )
}