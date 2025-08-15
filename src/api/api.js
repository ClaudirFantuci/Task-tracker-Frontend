import axios from "axios";


const API_URL = import.meta.env.VITE_URL_BACK_END;

console.log("Base URL:", API_URL);


const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});


api.interceptors.request.use(
    config => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            config.headers.Authorization = `Bearer ${user.token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default api;