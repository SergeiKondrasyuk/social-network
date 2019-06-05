import {serverAPI} from "../dal/axios-instance";

const SET_IS_AUTH = 'SET_IS_AUTH';


let initialState = {
    isAuth: false,
    userData: {
        id: null,
        login: null,
        email: null,
    }
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_AUTH : {
            return {
                ...state,
                isAuth: action.value,
                userData: action.userData
            }
        }
        default: {
            return state;
        }
    }
};

export const me = () => (dispatch) => {
    serverAPI.meRequest().then(res => {
        if (res.data.resultCode === 0) {
            debugger
            let {id, login, email} = res.data.data;
            let userData = {id, login, email};
            dispatch(setIsAuth(true, userData));
        }
    });
};

export const setIsAuth = (value, userData) => ({type: SET_IS_AUTH, value, userData});


export default authReducer;