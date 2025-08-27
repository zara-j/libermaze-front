import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.libermaze.com/api",
    withCredentials: true,
});

