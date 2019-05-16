import * as axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8d2bc1c5-0699-4268-a156-0a069b48147f'
    }

});