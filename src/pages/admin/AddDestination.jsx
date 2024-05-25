import {useState} from "react"
import axios from "axios"
import {toast} from "react-toastify"
import {token} from "../../context/token"
import "./AddDestination.css"

const AddDestination = () => {
    
const [inputs, setInputs] = useState({
    title : "",
    summary: "",
    content: "",
    location:"",
    activities: [
      {
        activity:"",
        imageUrl:"",
      },
      ],
    imageUrl:"",
    price: {
      amount:"",
      currency:""
    }
})

  const [message, setMessage] =useState("")
  
   const handleChange = (e, index) => {
  const { name, value } = e.target;

  // Mettre à jour l'état en fonction du champ de saisie qui a déclenché le changement
  setInputs(prevState => ({
   ...prevState,
    [name]: name === "imageUrl"? e.target.files[0] : value,
    activities: prevState.activities.map((activity, i) =>
      i === index? ({...activity, [name]: name === "imageUrl"? e.target.files[0] : value }) : activity
    )
  }));

  // Effacer le message d'état après son définition
  setMessage("");
};
  const handleAddActivity = () => {
    setInputs({
    ...inputs,
      activities: [...inputs.activities, { activity: "", imageUrl: "" }],
    });
  };

  const handleRemoveActivity = (index) => {
    setInputs({
    ...inputs,
      activities: inputs.activities.filter((_, i) => i!== index),
    });
  };

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    
  
    try { 
        console.log(inputs)
        
        const formData = new FormData();
        
        const {title, summary, content, location, activity, imageUrl, amount } = inputs
        
          // Sécurité
          
          if(title.trim() === ""
          || summary.trim() === ""
          || content.trim() === ""
          || location.trim() === ""
          || activity.trim() === ""
          || imageUrl.trim() === ""
          || amount.trim() === ""
          ){
              return toast.warning("Veuillez remplir tous les champs")
          }
          
         if (parseFloat(amount) < 1) {
        return toast.warning("Le prix doit être supérieur ou égal à 1 EUR");
      } 
          
        formData.append("title", inputs.title);
        formData.append("summary", inputs.summary);
        formData.append("content", inputs.content);
        formData.append("location", inputs.location);
        formData.append("activity", inputs.activity);
        formData.append("imageUrl", inputs.imageUrl);
        formData.append("amount", inputs.amount);
        formData.append("currency", inputs.currency);

        
      
        const res = await axios.post("/api/destinations/new", formData,  {headers: token()})
           

     setMessage(res.data.message)
     
     toast.success(res.data.message)
    } catch (e) {
        toast.error("Erreur lors de la création de la destination")
        setMessage("Erreur lors de la création de la destination")
    }
  }
   try {
      const formData = new FormData();

      // Validation
      for (const key in inputs) {
        if (key === "imageUrl") {
          inputs.activities.forEach((activity, index) => {
            formData.append(`activities[${index}][imageUrl]`, activity.imageUrl);
          });
        } else if (key === "activities") {
          inputs.activities.forEach((activity, index) => {
            formData.append(`activities[${index}][activity]`, activity.activity);
          });
        } else {
          formData.append(key, inputs[key]);
        }
      }
}catch (e) {
  
}


  


    return (
      <div className="add-destination-container">
      <div className="add-destination-form">
        <h2 className="add-destination-title center">Ajouter une Destination</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Titre</label>
            <input
              onChange={handleChange}
              value={inputs.title}
              id="title"
              name="title"
              type="text"
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="summary">Résumé</label>
            <textarea
              onChange={handleChange}
              value={inputs.summary}
              id="summary"
              name="summary"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Contenu</label>
            <textarea
              onChange={handleChange}
              value={inputs.content}
              id="content"
              name="content"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Pays</label>
            <input
              onChange={handleChange}
              value={inputs.location}
              id="location"
              name="location"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="activities">Activités proposées</label>
            <div className="margin-add">
            {inputs.activities.map((activity, index) => (
              <div key={index}>
                <label htmlFor={`activity-${index}`} className="parag">Activité</label>
                <input
                  onChange={(e) => handleChange(e, index)}
                  value={activity.activity}
                  id={`activity-${index}`}
                  name="activity"
                  type="text"
                />
                <label htmlFor={`imageUrl-${index}`} className="parag">Importer une image</label>
                <input
                  onChange={(e) => handleChange(e, index)}
                  id={`imageUrl-${index}`}
                  name="imageUrl"
                  type="file"
                />
                <div className="align-right ">
                {index!== 0 && (
                  
                  <button 
                  type="button" 
                  onClick={() => handleRemoveActivity(index)}
                  className="remove-activity"
                  >
                   ✘ Supprimer
                  </button>
                )}
                </div>
              </div>
            ))}
            <div className="align-right">
            <button 
            type="button" 
            onClick={handleAddActivity} 
            disabled={inputs.activities.length >= 6}
            className="new-activity">
              ➕Ajouter une nouvelle activité
            </button>
            </div>
          
          </div>
  
          <div className="message">
            {message && <span>{message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="amount">Prix</label>
            <input
              onChange={handleChange}
              value={inputs.amount}
              id="amount"
              name="amount"
              type="number"
              min="1"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select name="currency" 
              id="currency"
              onChange={handleChange}
              value={inputs.currency} >
              <option value="EUR">EUR </option>
              <option value="USD">USD </option>
              <option value="CAD">CAD </option>
              <option value="LEI">LEI </option>
              </select>
            
          </div>

          <div className="message">
            {message && <span>{message}</span>}
          </div>

          <button type="submit" className="submit-button">
            Ajouter
          </button>
          </div >
        </form>
        
      </div>
    </div>
  );
};

export default AddDestination;