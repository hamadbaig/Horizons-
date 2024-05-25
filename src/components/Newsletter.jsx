import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom"; 
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();
  
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/newsletter/subscribe", { email });
      toast.info(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };
  
  if (
    location.pathname === "/login" || 
    location.pathname === "/register" || 
    location.pathname === "/forgot-password" || 
    location.pathname === "/reset-password/:token" || 
    location.pathname === "/destination/nouveau" || 
    location.pathname === "destination/modifier/:id" || 
    location.pathname === "destination/dashboard"
  ) {
    return null;
  }

  return (
    <section className="newsletter">
      <div className="row">
        <div className="col">
          <h2>Recevez notre lettre d'information</h2>
          <p>
            Ne manquez aucune offre spéciale, destination de rêve ou conseil de 
            voyage en vous abonnant à notre newsletter.
          </p>
        </div>
        <form method="POST" onSubmit={handleSubmit} className="form">
          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Email"
              required
              onChange={handleChange}
              value={email}
            />
            <button 
            type="submit" 
            className="newsletter-btn" >Envoyer</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
