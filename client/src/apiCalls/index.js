import axios from "axios";

export const url = "https://quick-chat-app-i3bh.onrender.com";

export const axiosInstance = axios.create({
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
});
