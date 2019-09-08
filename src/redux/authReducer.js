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

export const me = () => async (dispatch) => {
    let response = await serverAPI.meRequest();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        let userData = {id, login, email};
        dispatch(setIsAuth(true, userData));
    }
};

export const setIsAuth = (value, userData) => ({type: SET_IS_AUTH, value, userData});


export default authReducer;