import {serverAPI} from "../dal/axios-instance";

const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_ME_DATA = 'SET_ME_DATA';


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
                isAuth: action.value
            }
        }
        case SET_ME_DATA : {
            return {
                ...state,
                userData: action.userData,

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
            let {id, login, email} = res.data.data;
            debugger
            dispatch(setIsAuth(true));
            dispatch(setMeData(id, login, email));
        }
    });
};

export const setIsAuth = (value) => ({type: SET_IS_AUTH, value});
export const setMeData = (id, login, email) => ({type: SET_ME_DATA, userData: {id, login, email}});


export default authReducer;