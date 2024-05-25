import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Destinations.css";

const Destinations = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await axios.get("/api/destinations");
        setFilteredDestinations(res.data);
        setDestinations(res.data);
      } catch (e) {
        
      }
    };

    fetchDestinations();
  }, []);

  const handleChange = (e) => {
    const search = e.target.value;
    setSearchInput(search);

    const filtered = destinations.filter(
      (d) =>
        d.title.toLowerCase().includes(search.toLowerCase()) ||
        d.summary.toLowerCase().includes(search.toLowerCase()) ||
        d.content.toLowerCase().includes(search.toLowerCase()) ||
        d.activity.toLowerCase().includes(search.toLowerCase()) ||
        d.location.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDestinations(filtered);
  };

const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);

    let sortedDestinations = [...filteredDestinations];

    switch (sortValue) {
      case "priceAsc":
        sortedDestinations.sort((a, b) => a.price.amount - b.price.amount);
        break;
      case "priceDesc":
        sortedDestinations.sort((a, b) => b.price.amount - a.price.amount);
        break;
      case "rating":
        sortedDestinations.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredDestinations(sortedDestinations);
  };
  
  
  return (
    <>
      <section>
        <article className="bck-destinations"></article>

        <form className="search-box">
          <input
            onChange={handleChange}
            value={searchInput}
            type="search"
            className="search"
            name="search"
            placeholder="Tapez pour rechercher"
          />
          <input
            className="search_submit"
            value="Rechercher"
            type="submit"
          />
        </form>
        
        <div className="sort-box">
          <label htmlFor="sortBy">Trier par :</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="">-- Sélectionnez --</option>
            <option value="priceAsc">Prix croissant</option>
            <option value="priceDesc">Prix décroissant</option>
            <option value="rating">Avis client</option>
          </select>
        </div>

        {filteredDestinations.map((destination, i) => (
          <NavLink
            to={`/destination/${destination.id}`}
            key={i}
            className="destination-link">
            
            <article>
            <h2>    </h2>
            </article>
            
            <article className="article-destination container">
              <div className="flex">
                <div className="img-destination">
                  <img
                    src={destination.imageUrl}
                    alt={destination.title}
                    width="400px"
                  />
                </div>
                <div>
                  <div className="margin-left overflow-price">
                    <div className="flex">
                      <div>
                        <h2 className="h2-destination">{destination.title}</h2>
                      </div>
                      <div>
                        <p className="price">
                          À partir de ${destination.price.amount}
                        </p>
                      </div>
                    </div>
                    <p className="p-avis">Avis des clients ⭐⭐⭐⭐⭐</p>
                    <p className="p-destination">{destination.summary}</p>
                  </div>
                  <div className="div-btn-pay">
                    <NavLink to="#" className="btn-pay">
                      Acheter ce circuit
                    </NavLink>
                  </div>
                </div>
              </div>
            </article>
          </NavLink>
        ))}
      </section>
      
      
      <div className="destinations-container">
      <h2 className="destinations-title">Découvrez nos destinations</h2>
      <div className="destinations-list">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.imageUrl} alt={destination.name} className="destination-image" />
            <div className="destination-info">
              <h3 className="destination-name">{destination.name}</h3>
              <p className="destination-description">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default Destinations;
