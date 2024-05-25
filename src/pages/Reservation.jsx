import {useState} from "react"
import { toast } from "react-toastify"
import {useNavigate, NavLink} from "react-router-dom"
import axios from "axios";
import {useAuth} from "../context/AuthContext"
import './Reservation.css'; 


const Reservation = () => {
    
    const [formInput, setFormInput] = useState({
    nom:"",
    numberPeople: {
      numberAdultes:"",
      numberChildrens: "" },
    startDate:"",
    endDate:""
    
  })
  
  // Hook qui permet de récupérer le context
  const auth = useAuth()
  
  const navigate = useNavigate()
  
 const handleChange = (e) =>{
     
     const {name, value} = e.target;
     
     setFormInput({...formInput, [name]: value})
 }
 
 const handleSubmit = async (e) => {
     
     e.preventDefault();
     
     try {
         
         
         // Sécurité
         
         const res = await axios.post("/api/users/login", formInput)
         console.log(res);
        toast.success("Vous êtes bien connecté, vous allez être redirigé.")
        
        auth.login(res.data)
        
        setTimeout(()=>{
            navigate("/")
        },2000)
   
     } catch (e) {
             toast.error(e.response.data.message)
     }
     
 }
 
 return (
 
 <article className="body-login container">
         <div className="wrapper-login">
    <form onSubmit={handleSubmit}  className ="form-login" action="#">
      <h2>Réservation</h2>
    <div className="input-field-login">
      <input 
        type="text"
       onChange={handleChange}
        value={formInput.email}
        name="nom"
        required />
      <label htmlFor="email" >Entrez votre nom complet</label>
      </div>
      
      <div className="flex gap-reservation">
      <div className="input-field-login">
        <input 
        onChange={handleChange}
        value={formInput.password}
        type="number"
        name="numberAdultes"
        required />
        <label htmlFor="numberAdultes" >Nr de voyageurs adultes</label>
      </div>
      <div className="input-field-login">
        <input 
        onChange={handleChange}
        value={formInput.password}
        type="number"
        name="numberChildrens"
        required />
        <label htmlFor="numberChildrens" >Nr de voyageurs enfants</label>
      </div>
         </div>
         
         
         
         <div className="flex ">
      <div className="input-field-login">
        <input 
        onChange={handleChange}
        value={formInput.password}
        type="date"
        name="startDate"
        required />
        <label htmlFor="startDate" > </label>
      </div>
      <div className="input-field-login">
        <input 
        onChange={handleChange}
        value={formInput.password}
        type="date"
        name="endDate"
        required />
        <label htmlFor="endDate" ></label>
      </div>
         </div> 
          
          
          
          
          
          
      <button className="btn-login" type="submit">Valider</button>
      <div className="register-login">
        <p>Plus des questions? Appelez-nous au 06154847 </p>
      </div>
    </form>
  </div>
  </article>
 
 
 
 
 
 
 
 
 
 
 
)    
}
export default Reservation;
