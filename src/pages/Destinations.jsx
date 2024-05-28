import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import img from "./img/plage.jpg";

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
      } catch (e) {}
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
        <div className="bck-contact">
          <img src={img}></img>
        </div>
        <form className="search-box">
          <input
            onChange={handleChange}
            value={searchInput}
            type="search"
            className="search"
            name="search"
            placeholder="Tapez pour rechercher"
          />
          <input className="search_submit" value="Rechercher" type="submit" />
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
            className="destination-link"
          >
            <div className="flex-main">
              <div className="img-destination">
                <img
                  src={destination.imageUrl}
                  alt={destination.title}
                  width="310px"
                />
              </div>
              <div className="flex-sec">
                <div>
                  <h2 className="h2-destination">{destination.title}</h2>
                </div>

                <NavLink to="#" className="btn-pay">
                  Acheter ce circuit
                </NavLink>
                <p className="price">À partir de ${destination.price.amount}</p>
                {/* <p className="p-avis">Avis des clients ⭐⭐⭐⭐⭐</p>
                    <p className="p-destination">{destination.summary}</p> */}
              </div>
            </div>
          </NavLink>
        ))}
      </section>

      <div className="destinations-container">
        <h2 className="destinations-title">Découvrez nos destinations</h2>
        <div className="destinations-list">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="destination-image"
              />
              <div className="destination-info">
                <h3 className="destination-name">{destination.name}</h3>
                <p className="destination-description">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Destinations;
