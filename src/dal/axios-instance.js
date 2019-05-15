import * as axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '41f1894d-c126-47a9-ac0a-b59c7fbc64df'
    }

});