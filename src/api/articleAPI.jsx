import axios from "axios"

export const fetchDestinations = async () => {
    try {
        
        const res = await axios.get("/api/destinations")
        return res.data
    }catch (e) {
        
    }
}


export const addDestination = async (form) => {
    try {
        const res = await axios.post("/api/destinations/new", form)
        return res.data
    }catch (e){
        
    }
}

export const getOneDestination = async (id) => {
    try {
        const res = await axios.get("/api/articles/" + id)
    }catch (e) {
        
    }
}