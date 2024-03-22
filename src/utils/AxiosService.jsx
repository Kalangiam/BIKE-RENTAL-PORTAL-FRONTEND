import axios from "axios"

let AxiosService = axios.create({
    baseURL:"http://localhost:8000",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        
    }
})

export default AxiosService