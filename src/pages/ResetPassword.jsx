import {useState} from "react";
import {toast} from "react-toastify"
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios"
import "./Login.css"

const ResetPassword = () => {
    
    const [password, setPassword] = useState("")
    const {token} = useParams()
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
       try {
           e.preventDefault()
           const res = await axios.patch(`/api/users/reset-password/${token}`, {password})
           
           toast.success("Mis à jour du mot de passe, veuillez vous connecter")
           
           navigate("/login")
           
           
       } catch (e) {
           toast.error(e.response.data.message)
       }
    }
    
    return(
         <article className="body-login container">
         <div className="wrapper-login">
    <form  onSubmit={handleSubmit} className ="form-login" >
      <h2>Réinitialisation de Mot de Passe</h2>
    <div className="input-field-login">
      <input 
        id="password"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password} />
      <label htmlFor="email" > Nouveau Mot de Passe</label>
      </div>
      <button className="btn-login" type="submit">Réinitialiser le Mot de Passe</button>
    </form>
  </div>
  </article>
        
        )
}


export default ResetPassword