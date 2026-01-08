import axios from "axios";

export const api = axios.create({
    baseURL: "https://moodtrackingapp-backend-production.up.railway.app/",
})