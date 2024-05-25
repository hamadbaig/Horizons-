import { useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import "./NotFound.css"

const NotFound =() =>{
    
    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(()=> {
            navigate("/")
        },4000)
    },[])
    
    return(
        <article className="bck-404 ">
        <h1 className="p-404">Désolé, cette page n'existe pas...</h1>
        </article>
        )
}

export default NotFound;