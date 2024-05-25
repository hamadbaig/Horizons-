import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/send-forgot-password", { email });
      toast.success("Email envoyé avec succès");
      setEmail("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
    return (

        <article className="body-login container">
      <div className="wrapper-login">
         <form  onSubmit={handleSubmit} className ="form-login" action="#">
         <h2>Demande de Réinitialisation de Mot de Passe</h2>
            <div className="input-field-login">
            <input 
                 id="email"
                type="email"
         name="email"
         onChange={(e) => setEmail(e.target.value)}
         value={email}
         required />
      <label htmlFor="email" >Entrez votre adresse e-mail</label>
      </div>
      <button type="submit" className="">Envoyer le lien de réinitialisation</button>
    </form>
  </div>
  </article>

    )

}


export default ForgotPassword;