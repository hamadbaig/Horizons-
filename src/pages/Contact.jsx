import react from "react";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useAuth} from "../context/AuthContext"




import "./Contact.css"





const Contact = () => {
 const [formInput, setFormInput] = useState({
    fullName:"",
    objet: "",
    email:"",
    phoneNumber:"",
    message:""
  })
  
  const [disableInput, setDisableInput] = useState(false)
  const [message, setMessage] = useState("")
  
 // Il faut envoyer les données de ce formulaire dans le localStorage,
 
 const handleChange = (e) =>{
   const {name, value} = e.target
   
   setFormInput({...formInput, [name]: value, date: new Date() })
   setMessage("")
   
 }
 
 const handleSubmit = e => {
   e.preventDefault();
      if(disableInput){
     return;
   }
   
   const dataFromLS = JSON.parse(localStorage.getItem("contact")) || []
   
   if(formInput.fullName.trim() === ""
   || formInput.objet.trim() === ""
   || formInput.email.trim() === ""
   || formInput.phoneNumber.trim() === ""
   || formInput.message.trim() === ""
   
   
   ){
     return setMessage("Vous ne pouvez pas envoyer des données vide")
   }
   dataFromLS.push(formInput)
   
   localStorage.setItem("contact", JSON.stringify(dataFromLS))
  setDisableInput(true)
   setTimeout(() => {
     setDisableInput(false)
   }, 10000)
 }

  return (
     <>
     <div className="bck-contact"> </div>
     
     <section className="contact">
    
    <div className=" container flex  ">
        <div className="div-h1-title"> 
        <h1 className="h1-nousContacter">Nous Contacter</h1>
        </div>
        <div className="p-nousContacter">
            <p className="div-p-title">Si vous avez des questions, il vous suffit de remplir le formulaire
            de contact, et nous vous répondrons dans les plus brefs délais.</p>
        </div>
        </div>
        
        <div className="bck-form"> 
        <form onSubmit={handleSubmit} >
            <div className="left-right">
                <div className="left">
                    <label htmlFor="fullName">Nom Complet</label>
                    <input 
                    id="fullName"
                    type="text"
                    onChange={handleChange}
                    value={formInput.fulName}
                    name="fullName"/>
                    
                    <label htmlFor="objet">Objet</label>
                    <input 
                    id="objet"
                    type="text"
                    onChange={handleChange}
                    value={formInput.objet}
                    name="objet"/>
                </div>
                
                <div className="right">
                    <label htmlFor="email">Email</label>
                    <input 
                    id="email"
                    type="text"
                    onChange={handleChange}
                    value={formInput.email}
                    name="email"/>
                    
                    <label htmlFor="phoneNumber">Numero de téléphone </label>
                    <input 
                    id="phoneNumber"
                    type="text"
                    onChange={handleChange}
                    value={formInput.phoneNumber}
                    name="phoneNumber"/>
                </div>
                
            </div>
             <label htmlFor="message">Message</label>
                    <textarea
                    id="message"
                    type="text"
                    onChange={handleChange}
                    value={formInput.message}
                    name="message"                    
                    cols="30" 
                    rows="10"
                    placeholder="Votre message "></textarea>
            <button type="submit">Envoyer</button>
        </form>
        </div>
        
         
        
    </section>
    
     <section className="container">
     <article className="flex gap">
     <div className="flex-direction section-info zoomEffect center" >
     <div className="icons center" >
    <img src="img/icons/phone-call.png" style={{  width: '50px', margin:'auto', display:'block' }}  className="zoomEffect"/>
     </div>
     <div>
        <h3>  +33 1 47 58 65 49 </h3>
        <h3>  +33 6 16 52 48 41 </h3>
     
     </div>
     </div>
   
   <div className="flex-direction section-info zoomEffect center" >
     <div className="icons">
    <img src="img/icons/marker.png" style={{ width: '50px', margin:'auto', display:'block' }} className="zoomEffect"/>
     </div>
     <div>
        <h3>  42 Rues des Fontaines</h3>
        <h3>  77370 Nangis </h3>
     
     </div>
     </div>
     
     <div className="flex-direction section-info zoomEffect center" >
     <div className="icons">
    <img src="img/icons/message.png" style={{  width: '50px', margin:'auto', display:'block' }} className="zoomEffect" />
     </div>
     <div>
        <h3>   h.lointains@gmail.com </h3>
        <h3>   noi.orizonturi@mail.md </h3>
     
     </div>
     </div>
   
   
     
     </article>
     <article className="container carte location ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.6371036040337!2d3.009361215608335!3d48.559345279259354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ef4fab2c52e85d%3A0xe2c21682c076e288!2s42%20Rue%20des%20Fontaines%2C%2077370%20Nangis!5e0!3m2!1sfr!2sfr!4v1677598279773!5m2!1sfr!2sfr"
                            width="1900"
                            height="500"
                            style={{border:0}}
                            allowFullScreen="" 
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
                            
                            </article>
     </section>
     
    
  </>
      )
}

export default Contact;