import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import axios from "axios"
import {toast} from "react-toastify"
import {token} from "../../context/token"

const EditDestination = () => {

const { id } = useParams();
const navigate = useNavigate()
const [inputs, setInputs] = useState({
    
    title: "",
    summary: "", 
    content: "",
    location: "",
    activity: "", 
    imageUrl: "",
    price:""
    
})

const [message, setMessage] = useState("")

useEffect(()=> {
    
    const fetchOneDestination = async () => {
        try {
                
                const res = await axios.get(`/api/destinations/${id}`)
                
                setInputs(res.data)

        } catch (e) {
            console.log(e);
        }
    }
    
    fetchOneDestination()
    
},[])





const handleChange = (e) => {
    

    
    // DECOMPOSITION
    const {name, value} = e.target;
    
    if(name === "imageUrl"){
        console.log(e.target.files[0])
        setInputs({...inputs, imageUrl: e.target.files[0]})
    }else{
         // Assignation dynamique lié au name
    setInputs({...inputs, [name]: value})
 
    }
    
    // Je vide l'input
    setMessage("")


}

const handleSubmit = async(e) => {
    e.preventDefault();
  
    try { 
        console.log(inputs)
        
        const formData = new FormData();
        
        const {title, summary, content, location, activity, imageUrl, price } = inputs
        
          // Sécurité
          
          if(title.trim() === ""
          || summary.trim() === ""
          || content.trim() === ""
          || location.trim() === ""
          || activity.trim() === ""
          || imageUrl.trim() === ""
          || price.trim() === ""
          ){
              return toast.warning("Veuillez remplir tous les champs")
          }
          
          
          
        formData.append("title", inputs.title);
        formData.append("summary", inputs.summary);
        formData.append("content", inputs.content);
        formData.append("location", inputs.location);
        formData.append("activity", inputs.activity);
        formData.append("imageUrl", inputs.imageUrl);
        formData.append("price", inputs.price);
        
        


        // Envoie vers notre serveur du formulaire
        const res = await axios.put(`/api/destinations/edit/${id}`, formData,  {headers: token()})
           

        setMessage(res.data.message)
        toast.success(res.data.message)
        setTimeout(() => {
        navigate("/admin/destination/dashboard")
            
        }, 2000) 
        
    } catch (e) {
        toast.error("Erreur lors de la mise à jour de la destination")
        setMessage("Erreur lors de la création de la destination")
    }

   
  
}

return (
<div className="">
      <div className="">
        <h1 className="">Ajouter une Destination</h1>
        <form encType="multipart/form-data" onSubmit={handleSubmit} className="">
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="mb-2">Titre</label>
            <input onChange={handleChange} value={inputs.title} id="title" name="title" type="text"  />
          </div>

          <div className="">
            <label htmlFor="summary" className="mb-2">Résumé</label>
            <textarea onChange={handleChange} value={inputs.summary} id="summary" name="summary"  />
          </div>

          <div className="">
            <label htmlFor="content" className="mb-2">Contenu</label>
            <textarea onChange={handleChange} value={inputs.content} id="content" name="content"   />
          </div>

          <div className="">
            <label htmlFor="location" className="mb-2">Pays</label>
            <input onChange={handleChange} value={inputs.location} id="location" name="location" type="text"  />
          </div>

          <div className="">
            <label htmlFor="activity" className="">Activites propossees</label>
            <input onChange={handleChange}  id="activity" name="activity" type="text"   />
          </div>

          <div className="">
            <label htmlFor="imageUrl" className="mb-2">URL de l'image de l'article</label>
            <input onChange={handleChange} value={inputs.imageUrl} id="imageUrl" name="imageUrl" type="file" />
          </div>
          <div className="">
            <label htmlFor="price" className="">Prix </label>
            <input onChange={handleChange}  id="prix" name="prix" type="number"   />
          </div>
          
          <div className="">
            {message && <span> {message} </span>}
        </div>
          <button type="submit" variant="filled" className=" ">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default EditDestination;