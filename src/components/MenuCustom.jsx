import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useAuth} from "../context/AuthContext"
import {useNavigate} from "react-router-dom"
import './MenuCustom.css';

const MenuCustom = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {user, logout} = useAuth()
    const navigate = useNavigate()
    
    const handleLogout = () => {
    
   
    // Logout est une fonction qu'on a créé dans notre contexte.
    logout()
    
      // On redirige vers la page d'accueil
    navigate("/")
   
  }
    const handleNavLinkClick = () => {
        setMenuOpen(false);
    }
    
   
    return (
        <header className="menu-bg">
            <article>
                <NavLink className="logo-colors" to="/">HorizonsLointains</NavLink>
            </article>
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="menu">
                    <li><NavLink to="/" onClick={handleNavLinkClick}>Accueil</NavLink></li>
                    <li><NavLink to="/about" onClick={handleNavLinkClick}>A propos</NavLink></li>
                    <li><NavLink to="/destinations" onClick={handleNavLinkClick}>Destinations</NavLink></li>
                    <li><NavLink to="/info" onClick={handleNavLinkClick}>Informations</NavLink></li>
                    <li><NavLink to="/contact" onClick={handleNavLinkClick}>Contact</NavLink></li>
                    {user && user.token ? (
                        <li><NavLink  className="btn-connexion" to="#" onClick={handleLogout}>Se déconnecter</NavLink></li>
                    ) : (
                        <li><NavLink  className="btn-connexion" to="/login">Se connecter</NavLink></li> )}
                </ul>
                
                
            </nav>
        
        
         </header>
    );
}

export default MenuCustom;
