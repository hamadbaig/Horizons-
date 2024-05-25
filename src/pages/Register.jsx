import {NavLink} from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"
//import ReCAPTCHA from "react-google-recaptcha";
import "./Register.css"



const Register = () => {
    const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
  });

const [checkPwd, setCheckPwd] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    specialChar: false
})


const [isCompleted, setIsCompleted] = useState(true)

const handleChange = (e) =>{
    const {name, value} = e.target
 
    setFormInput({...formInput, [name]: value}) 

    
   
    setFormInput(prev => ({...prev, [name]: value}))
    
    isNotFullCompleted()
    // Validation pour le mot de passe
    if(name === "password"){
        const minLength = value.length >= 8; // Renvoie un true et false
        const uppercase = /[A-Z]/.test(value);
        const lowercase = /[a-z]/.test(value);
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value)
        
       return setCheckPwd({
            minLength,
            uppercase,
            lowercase,
            specialChar, 
            isFocus: true
        
        })
        
        
    }
    
    setCheckPwd(prev => ({...prev, isFocus:false}))
    
}




const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
        // Sécurité 
        
        const res = await axios.post("/api/users/register", formInput)
        
        toast.success(res.data.message)
    } catch (e) {
        // Pour afficher le message d'erreur venant du back 
        toast.error(e.response.data.message)
    }
}


const renderValidation = (isValid) => (
    isValid ? <span className ="text-green-500"> ✔️ </span> : <span className ="text-red-500"> ⛔</span>
)

const isNotFullCompleted = () => {
    const checkPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{8,55}$/
    
    if(!checkPwd.test(formInput.password)) {
       return setIsCompleted(true) 
    }
    
    return setIsCompleted(false) 

}

    return (
        <>
        <article className="body-register container">
            <div className="wrapper-register">
                <form onSubmit={handleSubmit} className="form-register" >
                    <h2>Inscription</h2>
                    <div className="input-field-register">
                        <input 
                        name="username"
                        type="text" 
                        onChange={handleChange}
                        value={formInput.username}
                        required />
                        <label>Entrez votre pseudo</label>
                    </div>
                    <div className="input-field-register">
                        <input 
                        name="email"
                        type="text" 
                        onChange={handleChange}
                        value={formInput.email}
                        required />
                        <label>Entrez votre adresse e-mail</label>
                    </div>
                    <div className="input-field-register">
                        <input 
                        name="password"
                        type="password" 
                        value={formInput.password} 
                        onChange={handleChange} 
                        required />
                        <label>Entrez votre mot de passe</label>
                    </div>
                    {checkPwd.isFocus && 
          <div className="text-white text-sm space-y-2">
            <p className="text-white"> {renderValidation(checkPwd.minLength)} Au moins 8 caractères  </p>
            <p className="text-white"> {renderValidation(checkPwd.uppercase)} Au moins 1 majuscule  </p>
            <p className="text-white"> {renderValidation(checkPwd.lowercase)} Au moins 1 minuscule  </p>
            <p className="text-white"> {renderValidation(checkPwd.specialChar)} Au moins 1 caractère spécial  </p>
          </div>
          }
                    {/*
                    <ReCAPTCHA
                    className="center"
                        sitekey="   "
                        onChange={handleChange}
                    /> */}
                    <button className="btn-register" type="submit" variant="filled">S'inscrire</button>
                    <div className="register-login">
                        <p>Déjà inscrit? <NavLink to="/login">Connectez-vous.</NavLink></p>
                    </div>
                </form>
            </div>
        </article>
        </>
        )
}
export default Register;