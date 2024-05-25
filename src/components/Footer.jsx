import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>CONTACTEZ-NOUS</h3>
            <p className="p-footer"> 📞 01 47 58 65 49</p>
            <p className="p-footer"> 📧 h.lointains@gmail.com </p>
            <p className="p-footer">📍 42 Rues des Fontaines</p>
            <p className="p-footer"> &emsp; 77370 Nangis </p>
          </div>
          <div className="col">
            <h3>LIENS RAPIDES</h3>
            <NavLink to="/about"><p className="p-footer">Qui sommes-nous</p></NavLink>
            <NavLink to="/destinations"><p className="p-footer">Nos Circuits</p></NavLink>
            <NavLink to="/contact"><p className="p-footer">Contact</p></NavLink>
            <NavLink to="/"><p className="p-footer">Accueil</p></NavLink>
          </div>
          <div className="col">
            <h3>NOS RESEAUX SOCIAUX</h3>
            <div className="flex-direction center">
              <p className="p-footer"><i className="fa-brands fa-instagram"></i></p>
              <p className="p-footer"><i className="fa-brands fa-facebook"></i></p>
              <p className="p-footer"><i className="fa-brands fa-pinterest"></i></p>
              <p className="p-footer"><i className="fa-brands fa-tiktok"></i></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
