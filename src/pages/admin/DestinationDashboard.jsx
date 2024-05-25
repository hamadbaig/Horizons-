import {useState, useEffect} from "react"
import { NavLink } from "react-router-dom"; 
import {toast } from "react-toastify";
import axios from "axios"
import {token} from "../../context/token"
import "./Dashboard.css"

const DestinationDashboard = () => {
   
  const [searchInput, setSearchInput] = useState("")
  const [filteredDestinations, setFilteredDestinations] = useState([])
  const [destinations, setDestinations] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
  
  useEffect(()=> {
      
      const fetchDestinations = async () => {
          try {
              
              const res = await axios.get("/api/destinations")
              
              setDestinations(res.data)
              setFilteredDestinations(res.data)
              
              
          } catch (e) {}
      }
      
      fetchDestinations()
      
  },[isDeleted])
  
    const handleChange = (e) => {
    const search = e.target.value // Pour éviter le décalage de 1
    setSearchInput(search)
    
    const filtered = destinations.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())  
    || a.content.toLowerCase().includes(search.toLowerCase())  
    || a.summary.toLowerCase().includes(search.toLowerCase())  
    || a.location.toLowerCase().includes(search.toLowerCase())  
    || a.activity.toLowerCase().includes(search.toLowerCase())
    
    )
    
    setFilteredDestinations(filtered)
    
  }

    const handleDelete = async (id) => {
        
        const confirmDelete = confirm("Êtes vous sur de vouloir supprimer cette destination?")
        
        if(confirmDelete){
            try {
            const res = await axios.delete(`/api/destinations/delete/${id}`, {headers: token()})
            
            setIsDeleted(!isDeleted)
            toast.success(res.data.message)
            } catch (e) {
                console.log(e);
                toast.error("Erreur")
                setIsDeleted(!isDeleted)
            }
           
        }
        
    }

    return (
       <div className="dashboard-container">
      <div className="dashboard-title center">
        <h2>Dashboard Destinations</h2> 
        </div>
        <div className ="dashboard-align">
        <NavLink to="/destination/nouveau" className="dashboard-border"> ➕ Ajouter une destination</NavLink>
     </div>

      <div>
        <input
          className="dashboard-search-input"
          onChange={handleChange}
          value={searchInput}
          type="text"
          placeholder="Rechercher par titre ou context..."
        />
      </div>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Destination</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDestinations.map((destination) => (
            <tr key={destination._id}>
              <td>{new Date(destination.createdAt).toLocaleDateString()}</td>
              <td>
                <NavLink to={`/destination/${destination._id}`}>
                  {destination.title}
                </NavLink>
              </td>
              <td>{destination.location}</td>
              <td>
                <div className="dashboard-actions">
                 <button> <NavLink to={`/admin/destination/modifier/${destination._id}`}>
                    ✎Editer
                  </NavLink> </button>
                  <button onClick={() => handleDelete(destination._id)}>
                    ❌ Supprimer
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DestinationDashboard;
