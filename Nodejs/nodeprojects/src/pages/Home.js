import ListaPersonajes from "../componentes/ListaPersonajes";
import {useState} from "react";
import Navbar from"../componentes/Navbar";
    export default function Home(){
        const[page, setPage]=useState(1)
        return(
            <div>
                <h1 style={{textAlign: "center", marginBotton: "1rem"}}> 
                Rick & Morty
                </h1>
                <Navbar setPage={setPage} page={page}/>
                <ListaPersonajes page={page}/>
            </div>
        );
    }