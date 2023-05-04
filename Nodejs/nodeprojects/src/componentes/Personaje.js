export default function Personaje({data}){
     return(
        <figure>
            <figcaption Style={{textAlign:"center", marginBorrom:"1rem"}}>{data.name}</figcaption>
            <img style={{borderRadius:"9999px", width:"100%"}} src={data.image}></img>
        </figure>
    )
}