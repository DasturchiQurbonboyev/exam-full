import axios from "axios";

const mainURL = axios.create({
    baseURL: "https://dummyjson.com"
})

mainURL.interceptors.request.use((req) => {
    let token = localStorage.getItem("token")
    if (token) {
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})

export default mainURL