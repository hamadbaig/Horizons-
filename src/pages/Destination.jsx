import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import Comments from "../components/Comment"
import {useAuth} from "../context/AuthContext"
import {toast} from "react-toastify"
import "./Destination.css"

const Destination = () => {
    
 const {id} = useParams();
const [destination, setDestination] = useState("")
const [comments, setComments] = useState([])
const [loaded, setLoaded] = useState(false)

useEffect(() => {
  
  const fetchOneDestination = async () => {
    try {
         const commentData = await axios.get(`/api/comments/${id}`)
      setComments(commentData)   
       window.location.pathname
     
    
      const res = await axios.get(`/api/destinations/${id}`)
      
      setDestination(res.data)
      console.log(res.data);
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message)
    }
  }

  fetchOneDestination()
}, [loaded])

const addComment = (newComment) =>  {
  setLoaded(!loaded)
   setComments([...comments, newComment])
}

//const API_URL = import.meta.env.VITE_API_URL


  return (
     <>
   { destination && (
       <>
     <article className="home ">
        <h2>{destination.location} </h2>
        <p>Découvrez la ville éternelle et plongez dans l'histoire passionnante de {destination.location} </p>
     </article>
 <section className="container">
    <article className="a-propos">
        <h2 className="title">L'Histoire</h2>
        <div className="img-desc">
           <div className="left">
                <video src="../img/romevodeo.mp4" autoPlay loop></video>
           </div>
            <div className="right  ">
                <h1>{destination.location}  : Pourquoi la visiter? </h1>
                <p className="p-destination"> {destination.summary} </p>
            </div>
        </div>      
    </article>
  
    <article className="popular-destination">
        <h2 className="title">Les Incontournables</h2>
        <div className="content">
       
            <div className="box">
                <img src={destination.imageUrl} alt=""/>
                <div className="content">
                    <div>
                        <h4>Le Colisée</h4>
                        <p>Un amphithéâtre emblématique où se déroulaient des combats de gladiateurs et d'autres spectacles publics dans l'Antiquité.</p>
                    </div>
                </div>
            </div>
            
            <div className="box">
                <img src="../img/pantheon.jpg" alt="pantheon" />
                <div className="content">
                    <div>
                        <h4>Le Panthéon</h4>
                        <p>Un temple antique dédié à tous les dieux, célèbre pour son impressionnante coupole et ses murs de marbre.</p>
                    </div>
                </div>
            </div>
          
            <div className="box">
                <img src="../img/trevi.jpg" alt="trevi" />
                <div className="content">
                    <div>
                        <h4>La Fontaine de Trevi</h4>
                        <p>Une fontaine baroque ornée de sculptures de personnages mythologiques, où les visiteurs peuvent jeter une pièce de monnaie pour s'assurer un retour à Rome.</p>
                    </div>
                </div>
            </div>
            
             <div className="box">
                <img src="../img/forum.jpg" alt="forum"/>
                <div className="content">
                    <div>
                        <h4>Le Forum romain</h4>
                        <p>Une ancienne zone de rassemblement politique et sociale, qui abrite aujourd'hui des ruines antiques impressionnantes, notamment l'Arc de Titus et le Temple de Saturne.</p>
                    </div>
                </div>
            </div>
            
             <div className="box">
                <img src="../img/vatican.jpg" alt="vatican"/>
                <div className="content">
                    <div>
                        <h4>Le Musée du Vatican</h4>
                        <p>L'un des plus grands musées d'art au monde, qui abrite une collection impressionnante de peintures, de sculptures et d'artefacts historiques.</p>
                    </div>
                </div>
            </div>
            
             <div className="box">
                <img src="../img/piazzanavona.jpg" alt="piazzanavona"/>
                <div className="content">
                    <div>
                        <h4>La Piazza Navona</h4>
                        <p>Une place baroque magnifique, ornée de fontaines et de sculptures, et bordée de cafés et de restaurants.</p>
                    </div>
                </div>
            </div>
            </div>
            </article>
            
            
           <article className="activity">
           <h1> Les activites proposees en {destination.location}  </h1>
           <div>
           <h1> </h1>
           <p> {destination.activity}   </p>
           </div>
           
           
           </article>
        *************************
     <div className="custom-destination-details-container">
      <div className="custom-destination-header">
        <img src={destination.imageUrl} alt={destination.title} className="custom-destination-image" />
        <div className="custom-destination-info">
          <h2 className="custom-destination-title">{destination.title}</h2>
          <p className="custom-location">{destination.location}</p>
          <p className="custom-reviews">Avis des clients ⭐⭐⭐⭐⭐</p>
          <p className="custom-summary">{destination.summary}</p>
        </div>
      </div>

      <div className="custom-destination-content">
        {destination.activities.map((activity, index) => (
          <div key={index} className="custom-activity">
            <img src={activity.imageUrl} alt={activity.title} className="custom-activity-image" />
            <div className="custom-activity-info">
              <h3 className="custom-activity-title">{activity.title}</h3>
              <p className="custom-activity-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-buy-button-container">
        <NavLink to="#" className="custom-btn-buy">
          Acheter cette destination
        </NavLink>
      </div>

      <div className="custom-comments-section">
        <h3 className="custom-comments-title">Commentaires</h3>
        <form className="custom-comment-form">
          <textarea placeholder="Laissez un commentaire" className="custom-comment-input"></textarea>
          <button type="submit" className="custom-btn-submit">Soumettre</button>
        </form>
        <div className="custom-comments-list">
          {destination.comments.map((comment, index) => (
            <div key={index} className="custom-comment">
              <p><strong>{comment.author}:</strong> {comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    
    <div className="location container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.7643209635!2d12.5359979!3d41.9100711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Ville%20m%C3%A9tropolitaine%20de%20Rome%20Capitale%2C%20Italie!5e0!3m2!1sfr!2sfr!4v1681850040841!5m2!1sfr!2sfr" 
                width="600"
                height="450" 
                style={{border:0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      </section>
      </>
  )}
    
  </>
      )
}

export default Destination;