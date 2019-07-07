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

    captchaRequest() {
        return axiosInstance.get('security/get-captcha-url')
    },

    getUsersRequest(page, userCount) {
        return axiosInstance.get(`users?page=${page}&count=${userCount}`);
    },

    followUser(userId) {
        return axiosInstance.post(`follow/${userId}`)
    },

    unFollowUser(userId) {
        return axiosInstance.delete(`follow/${userId}`)
    },

    profileInfoRequest(userId){
        return axiosInstance.get(`profile/${userId}`)
    },

    putProfileInfoRequest(profileInfo){
        return axiosInstance.put('profile/', profileInfo);
    },

    uploadPhotoRequest(photo){
        return axiosInstance.put('profile/photo/', photo);
    },

    updateStatusRequest(status){
        return axiosInstance.put('profile/status/', {status: status});
    },

    getStatusRequest(userId){
        return axiosInstance.get('profile/status/' + userId)
    },

    getAllDialogsRequest(){
        return axiosInstance.get('dialogs/')
    },

    refreshDialogRequest(userId){
        return axiosInstance.get(`dialogs/${userId}`)
    },

    getMessagesWithFriendRequest(userId){
        return axiosInstance.get(`dialogs/${userId}/messages`)
    },

    sendMessageToFriendRequest(friendId, message){
        return axiosInstance.post(`dialogs/${friendId}/messages`, {body: message})
    },

};