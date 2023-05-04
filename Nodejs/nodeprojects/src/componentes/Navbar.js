export default function Navbar({setPage, page}){
    const sumar=()=>{
        setPage(page +1)
    }
    return(
        <nav style={{dislay:"flex", justifyContent:"space-between"}}> 
            <p>Pagina</p>
            <button type="button" onClick={()=> sumar()}>Siguiente</button>
        </nav>
    )
}