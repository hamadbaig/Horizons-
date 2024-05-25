import react from "react";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import "./About.css"


const About = () => {
 

  return (
     <>
    
    <div className="bck-aPropos">
        </div>
        
         <section>
        <article className="container" >
     <div className="flex margin-top">
     <div className="gallery">
  <img src="img/parachute.jpg" alt="parachute" />
  <img src="https://picsum.photos/id/872/400/400" alt="The mountain" />
  <img src="https://picsum.photos/id/603/400/400" alt="a river" />
  <img src="https://picsum.photos/id/823/400/400" alt="a women with a camera" />
</div>
     
         <div className="flex-direction-clm margin-left center" >
  <h2 className="h2-checkbox" >Découvrez de nouveaux horizons </h2>
  <div className="checkbox">
  <input type="checkbox" id="subject-01" className="inputs-checkbox"  style={{ display: 'none' }} />
  <h1 className="h1-checkbox"><label htmlFor="subject-01" className="label-checkbox">Qui sommes-nous? </label></h1>
  <div className="p-checkbox">
    <p>Horizons Lointains s’engage à offrir à ses clients le meilleur rapport 
    qualité-prix et des arrangements de voyage. Nous sommes passionnés 
    par les voyages et le partage des merveilles du monde avec vous.</p>
  </div>
</div>

<div className="checkbox">
  <input type="checkbox" id="subject-02" className="inputs-checkbox" style={{ display: 'none' }} />
  <h1 className="h1-checkbox" ><label htmlFor="subject-02" className="label-checkbox">Notre mission </label></h1>
  <div className="p-checkbox">
    <p>Notre mission est d’offrir l’expérience ultime de planification 
    de voyage hrefut en devenant un guichet unique pour hrefus les services 
    de voyage disponibles dans l’industrie.</p>
  </div>
  
</div>

<div className="checkbox">
  <input type="checkbox" id="subject-03" className="inputs-checkbox" style={{ display: 'none' }} />
  <h1 className="h1-checkbox"><label htmlFor="subject-03" className="label-checkbox">Pourquoi nous choisir </label></h1>
  <div className="p-checkbox">
    <p>Nous sommes fiers d’offrir une excellente qualité et un excellent
    rapport qualité-prix dans nos circuits, qui vous donnent la chance de
    découvrir la destination de votre choix d’une manière authentique et 
    passionnante.</p>
  </div>
  
</div>
<button className="btn-contactezNous" ><NavLink to="/contact" > Contactez-nous </NavLink></button>
</div>

</div>
</article>






<article className="container ">
    <article>
        <h2 className="center h2-body-card">Des personnes différentes – une mission</h2>
        </article>
        
</article>
<div className="body-card container flex">
  <div className="team-card">
    <img src="img/person3.jpg" alt="Membre 2" />
    <div className="info">
      <h2>James Smith</h2>
      <p>Responsable des relations publiques</p>
      <p>+1 323-913-4688</p>
    </div>
  </div>
  <div className="team-card">
    <img src="img/person2.jpg" alt="Membre 2" />
    <div className="info">
      <h2>Peter McMillan</h2>
      <p>Agent de voyages</p>
      <p> +1 323-913-4688 </p>
    </div>
  </div>
  <div className="team-card">
    <img src="img/person2.jpg" alt="Membre 2" />
    <div className="info">
      <h2>Diana Robinson</h2>
      <p>Fondateur, Propriétaire</p>
      <p> +1 323-913-4688 </p>
    </div>
  </div>
  <div className="team-card">
    <img src="img/person2.jpg" alt="Membre 2"  width="20px"/>
    <div className="info">
      <h2>Jill Peterson</h2>
      <p>Conseillère en tournée</p>
      <p>+1 323-913-4688</p>
    </div>
  </div>
</div>

    </section>
  </>
      )
}

export default About;