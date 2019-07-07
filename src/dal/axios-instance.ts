import axios from "axios";
import {finished} from 'stream';

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

    loginRequest(email: string, password: string, rememberMe: boolean, captcha: string) {
        return axiosInstance.post('auth/login', {
            email, password, rememberMe, captcha
        })
    },

    captchaRequest() {
        return axiosInstance.get('security/get-captcha-url')
    },

    getUsersRequest(page: number, userCount: number) {
        return axiosInstance.get(`users?page=${page}&count=${userCount}`);
    },

    followUser(userId: number) {
        return axiosInstance.post(`follow/${userId}`)
    },

    unFollowUser(userId: number) {
        return axiosInstance.delete(`follow/${userId}`)
    },

<<<<<<< HEAD:src/dal/axios-instance.ts
<<<<<<< HEAD:src/dal/axios-instance.ts
    profileInfoRequest(userId: number){
        return axiosInstance.get(`profile/${userId}`)
=======
    profileInfoRequest(userId){
        return axiosInstance.get('profile/' + userId)
>>>>>>> parent of c470148... 22.06:src/dal/axios-instance.js
=======
    profileInfoRequest(userId){
        return axiosInstance.get('profile/' + userId)
>>>>>>> parent of c470148... 22.06:src/dal/axios-instance.js
    },

    putProfileInfoRequest(profileInfo: any){
        return axiosInstance.put('profile/', profileInfo);
    },

    uploadPhotoRequest(photo: any){
        return axiosInstance.put('profile/photo/', photo);
    },

    updateStatusRequest(status: string){
        return axiosInstance.put('profile/status/', {status: status});
    },

    getStatusRequest(userId: number){
        return axiosInstance.get('profile/status/' + userId)
    },

<<<<<<< HEAD:src/dal/axios-instance.ts
<<<<<<< HEAD:src/dal/axios-instance.ts
    getAllDialogsRequest(){
        return axiosInstance.get('dialogs/')
    },

    refreshDialogRequest(userId: number){
        return axiosInstance.get(`dialogs/${userId}`)
    },

    getMessagesWithFriendRequest(userId: number){
        return axiosInstance.get(`dialogs/${userId}/messages`)
    },

    sendMessageToFriendRequest(friendId: number, message: string){
        return axiosInstance.post(`dialogs/${friendId}/messages`, {body: message})
    },
=======

>>>>>>> parent of c470148... 22.06:src/dal/axios-instance.js
=======

>>>>>>> parent of c470148... 22.06:src/dal/axios-instance.js

}