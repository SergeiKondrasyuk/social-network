import {axiosInstance} from "../dal/axios-instance";
import {setIsAuth} from "./authReducer";

const SET_CAPTCHAURL = 'SET_CAPTCHAURL';
const SET_CAPTCHA_STATUS = 'SET_CAPTCHA_STATUS';
const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
const SET_LOGIN_RESULT = 'SET_LOGIN_RESULT';
const SET_LOGIN_STATUS_MESSAGE = 'SET_LOGIN_STATUS_MESSAGE';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';


export const loginStatuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    loginStatus: loginStatuses.NOT_INITIALIZED,
    captchaStatus: loginStatuses.NOT_INITIALIZED,
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
        case SET_CAPTCHAURL : {
            debugger
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        case SET_CAPTCHA_STATUS : {
            return {
                ...state,
                captchaStatus: action.captchaStatus
            }
        }
        case SET_LOGIN_STATUS : {
            return {
                ...state,
                loginStatus: action.loginStatus
            }
        }
        case SET_LOGIN_RESULT : {
            debugger
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

export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHAURL, captchaUrl});
export const setCaptchaStatus = (captchaStatus) => ({type: SET_CAPTCHA_STATUS, captchaStatus});
export const setLoginStatus = (loginStatus) => ({type: SET_LOGIN_STATUS, loginStatus});
export const setLoginResult = (loginResult) => ({type: SET_LOGIN_RESULT, loginResult});
export const setLoginStatusMessage = (loginStatusMessage) => ({type: SET_LOGIN_STATUS_MESSAGE, loginStatusMessage});
export const changeInputValue = (propertyName, propertyValue) => ({
    type: CHANGE_INPUT_VALUE, propertyName, propertyValue
});

export const getCaptcha = (captchaStatus) => (d) => {

};


export const loginRequest = (email, password, rememberMe, captcha) => (d) => {
    d(setLoginStatus(loginStatuses.INPROGRESS));

    axiosInstance.post('auth/login', {
        email, password, rememberMe, captcha,
    }).then(res => {
        d(setLoginResult(res.data.resultCode));
        switch (res.data.resultCode) {
            case 0:
                d(setLoginStatusMessage('Login success'));
                d(setLoginStatus(loginStatuses.SUCCESS));
                d(setIsAuth(true));
                break;
            case 1:
                d(setLoginStatus(loginStatuses.ERROR));
                d(setLoginStatusMessage(res.data.messages[0]));
                d(setCaptchaStatus(loginStatuses.NOT_INITIALIZED));
                break;
            case 10:
                debugger
                d(setLoginStatus(loginStatuses.ERROR));
                d(setLoginStatusMessage(res.data.messages[0]));
                axiosInstance.get('security/get-captcha-url').then((res) => {
                    debugger
                    d(setCaptchaUrl(res.data.url));
                });
                break;
        }
    })
};

export const logoutRequest = () => (d) => {
    axiosInstance.post('auth/logout').then(res => {
        if (res.status === 200) {
            d(setIsAuth(false));
            d(setLoginStatus(loginStatuses.NOT_INITIALIZED));
            d(setLoginStatusMessage('Logout success'));
        }
    });
};

export default loginReducer;