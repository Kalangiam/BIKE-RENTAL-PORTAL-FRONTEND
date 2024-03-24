import axios from "axios"

let AxiosService = axios.create({
    baseURL:"https://bike-rental-portal-backend.onrender.com/",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        
    }
})

export default AxiosService