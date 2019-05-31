import * as axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '544d10d7-513a-4df9-8375-4ea1fb27edd4'
    }
});

export const serverAPI = {
    meRequest() {
        return axiosInstance.get('auth/me');
    },

    logoutRequest() {
        return axiosInstance.post('auth/logout');
    },

    loginRequest(email, password, rememberMe, captcha) {
        return axiosInstance.post('auth/login', {
            email, password, rememberMe, captcha
        })
    },

    getUsersRequest(page, userCount) {
        return axiosInstance.get(`users?page=${page}&count=${userCount}`);
    },

}