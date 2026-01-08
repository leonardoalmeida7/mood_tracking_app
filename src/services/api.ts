import axios from "axios";

export const api = axios.create({
    baseURL: "http://moodtrackingapp-backend-production.up.railway.app/",
})