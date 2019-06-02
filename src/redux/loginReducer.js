import {axiosInstance, serverAPI} from "../dal/axios-instance";
import {setIsAuth} from "./authReducer";

const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';
const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
const SET_LOGIN_RESULT = 'SET_LOGIN_RESULT';
const SET_LOGIN_STATUS_MESSAGE = 'SET_LOGIN_STATUS_MESSAGE';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const loginStatuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    IN_PROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    loginStatus: loginStatuses.NOT_INITIALIZED,
    email: '',
    password: '',
    rememberMe: false,
    captcha: '',
    captchaUrl: '',
    loginStatusMessage: '',
    loginResult: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CAPTCHA_URL : {
            debugger
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        case SET_LOGIN_STATUS : {
            return {
                ...state,
                loginStatus: action.loginStatus
            }
        }
        case SET_LOGIN_RESULT : {
            return {
                ...state,
                loginResult: action.loginResult
            }
        }
        case SET_LOGIN_STATUS_MESSAGE : {
            return {
                ...state,
                loginStatusMessage: action.loginStatusMessage
            }
        }
        case CHANGE_INPUT_VALUE : {
            return {
                ...state,
                [action.propertyName]: action.propertyValue
            }
        }
        default: {
            return state;
        }
    }
};

export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});
export const setLoginStatus = (loginStatus) => ({type: SET_LOGIN_STATUS, loginStatus});
export const setLoginResult = (loginResult) => ({type: SET_LOGIN_RESULT, loginResult});
export const setLoginStatusMessage = (loginStatusMessage) => ({type: SET_LOGIN_STATUS_MESSAGE, loginStatusMessage});
export const changeInputValue = (propertyName, propertyValue) => ({
    type: CHANGE_INPUT_VALUE, propertyName, propertyValue
});


export const loginAttempt = () => (dispatch, getState) => {
    let state = getState().login;
    dispatch(setLoginStatus(loginStatuses.IN_PROGRESS));
    serverAPI.loginRequest(state.email, state.password, state.rememberMe, state.captcha)
        .then(res => {
            dispatch(setLoginResult(res.data.resultCode));
            switch (res.data.resultCode) {
                case 0:
                    dispatch(setLoginStatusMessage('Login success'));
                    dispatch(setLoginStatus(loginStatuses.SUCCESS));
                    dispatch(setIsAuth(true));
                    break;
                case 1:
                    dispatch(setLoginStatus(loginStatuses.ERROR));
                    dispatch(setLoginStatusMessage(res.data.messages[0]));
                    break;
                case 10:
                    dispatch(setLoginStatus(loginStatuses.ERROR));
                    dispatch(setLoginStatusMessage(res.data.messages[0]));
                    axiosInstance.get('security/get-captcha-url').then((res) => {
                        res.getUsersStatus === 200 && dispatch(setCaptchaUrl(res.data.url));
                    });
                    break;
                default: break;
            }
        })
};

export const logOutAttempt = () => (d) => {
    serverAPI.logoutRequest()
        .then(res => {
        if (res.data.resultCode === 0) {
            d(setIsAuth(false));
            d(setLoginStatus(loginStatuses.NOT_INITIALIZED));
            d(setLoginStatusMessage('Logout success'));
        }
    });
};

export default loginReducer;