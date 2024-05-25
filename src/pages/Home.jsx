import react from "react";
import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import "./Home.css"



const Home = () => {
{/*useState */}
 const [lastDestinations, setLastDestinations] = useState([])
 useEffect (() => {
     
  const fetchArticles = async () => {
      
      try {
         // sans le proxy dans vite.config.js : 
         //axios.get("http://alinarusnac.ide.3wa.io:9000/api/destinations")
         
          // axios.get(`${import.meta.env.VITE_API_URL}/api/destinations")
        const res = await axios.get("/api/destinations") // avec le vite.config.js
        console.log(res);
 
        const recentDestinations = res.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    setLastDestinations(recentDestinations.slice(0,3))
        
        
      } catch (e) {
        console.log(e);
      }
      

    }
      fetchArticles()

    
    
  }, [])
  return (
      <>
      
      <section className="bck">
        <h2>Découvrez le monde autrement </h2>
        <p>Partez en vacances l'esprit tranquille grâce à notre agence qui s'occupe de tout</p>
    </section>

    <section className="container">
        <h1 className="title">à propos de nous</h1>
        <div className="img-desc">
           <div className="left">
                <video src="img/mer.mp4" autoPlay loop></video>
           </div>
            <div className="right">
                <h3>Évadez-vous du quotidien et laissez-vous porter vers des destinations de rêve !</h3>
                <p>Horizons Lointains est une agence de voyage française qui propose des prestations sur mesure pour les voyageurs individuels, les groupes et les entreprises. Avec plus de 50 agences en France et en Moldavie, Horizons Lointains offre une large gamme de services, allant de la réservation de vols, d'hôtels, de croisières, de circuits touristiques, de séjours en tout inclus et bien plus encore.</p>
                <NavLink to="/destinations" className="btn-connexion">Lire Plus</NavLink>
            </div>
        </div>
    </section>
    
     <section className="popular-destination">
        <h1 className="title">Les Destinations Du Moment</h1>
        
        <div className="content">
            
            <div className="box">
                <img src="img/aouihumrio.jpg" alt=""/>
                <div className="content">
                    <div>
                        <h4>Rio</h4>
                        <p>Découvrez la beauté époustouflante</p>
                        <p>de la ville de Rio de Janeiro</p>
                        <NavLink to="/destinations" className="btn-connexion">Lire Plus</NavLink>
                    </div>
                </div>
            </div>
            
            <div className="box">
                <img src="img/ouioui.jpg" alt=""/>
                <div className="content">
                    <div>
                        <h4>Rome</h4>
                        <p>Découvrez la ville éternelle et plongez</p>
                        <p>dans l'histoire passionnante de Rome</p>
                        <NavLink to="/destinations" className="btn-connexion">Lire Plus</NavLink>
                    </div>
                </div>
            </div>
          
            <div className="box">
                <img src="img/unnamed(1).jpg" alt=""/>
                <div className="content">
                    <div>
                        <h4>Disneyland Paris</h4>
                        <p>Venez vivre une expérience inoubliable</p>
                        <p>en famille à Disneyland Paris</p>
                        <NavLink to="/destinations" className="btn-connexion">Lire Plus</NavLink>
                    </div>
                </div>
            </div>
            
             <div className="box">
                <img src="img/egypt.jpg" alt=""/>
                <div className="content">
                    <div>
                        <h4>Le Caire</h4>
                        <p>Plongez dans l'histoire millénaire et la</p>
                        <p>culture vibrante de l'Égypte</p>
                        <NavLink to="/destinations" className="btn-connexion">Lire Plus</NavLink>
                    </div>
                </div>
            </div>
            
             <div className="box">
                <img src="img/pontc.jpg" alt=""/>
                <div className="content">
                    <div>
                        <h4>Prague</h4>
                        <p>Vivez la magie de Prague et découvrez une ville historique</p>
                        <p>avec châteaux, ponts et architecture gothique.</p>
                        <NavLink to="/destinations" className="btn-connexion">Lire Plus</NavLink>
                    </div>
                </div>
            </div>
            
             <div className="box">
                <img src="img/paris/intro1.jpg" alt=""/>
                <div className="content">
                    <div>
                        <h4>Paris</h4>
                        <p>Partez à la découverte de la fascinante</p>
                        <p>ville de Paris</p>
                        <NavLink to="/destinations" className="btn-connexion">Lire Plus</NavLink>
                    </div>
                </div> 
        
            </div>
           </div> 
      
    </section>
    
    
      
    
  
    <section >
    <div className="container div-info">
        <h1 className="main-title">Informations Pratiques</h1>
        <div className="columns">
          <div className="column">
            <h2 className="column-title">Passeport et visas</h2>
            <p className="column-text">Vérifiez si vous avez un passeport valide et si vous avez besoin d'un visa pour les destinations que vous prévoyez de visiter. Assurez-vous de vous conformer aux exigences en matière de validité du passeport et de visa pour chaque pays que vous visiterez.</p>
          </div>
          <div className="column">
            <h2 className="column-title">Vaccinations</h2>
            <p className="column-text">Renseignez-vous sur les vaccinations recommandées ou obligatoires pour les destinations que vous allez visiter. Assurez-vous d'être à jour avec vos vaccinations habituelles et consultez un professionnel de la santé pour obtenir des conseils sur les vaccinations spécifiques à votre destination.</p>
          </div>
          <div className="column">
            <h2 className="column-title">Change de devises</h2>
            <p className="column-text">Vérifiez les taux de change et les options pour changer de devises avant de partir en voyage. Il peut être utile d'avoir un peu de monnaie locale pour les dépenses initiales à votre arrivée à destination.</p>
          </div>
        </div>
      </div>
      
    </section>
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
    
      )
}

export default Home;