import {axiosInstance} from "../dal/axios-instance";

const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_USER_INFO = 'SET_USER_INFO';


let initialState = {
    isAuth: false,
    userInfo: {
        userId: null,
        userName: null
    }
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_AUTH : {
            return {

                ...state,
                isAuth: action.value
            }
        }
        case SET_USER_INFO : {
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.userId,
                    userName: action.userName,
                }
            }
        }
        default: {
            return state;
        }
    }
};

export const meRequest = () => (d) => {
    axiosInstance.get('auth/me').then(res => {
        debugger
        if (res.data.resultCode === 0) {
            d(setIsAuth(true));
            d(setUserInfo(res.data.data.id, res.data.data.login));
        }
    });
};

export const setIsAuth = (value) => ({type: SET_IS_AUTH, value});
export const setUserInfo = (userId, userName) => ({type: SET_USER_INFO, userId, userName});


export default authReducer;