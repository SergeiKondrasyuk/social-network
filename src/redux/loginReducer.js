import {me, setIsAuth} from "./authReducer";
import {serverAPI} from '../dal/axios-instance';

const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';
const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
const SET_LOGIN_STATUS_MESSAGE = 'SET_LOGIN_STATUS_MESSAGE';

export const loginStatuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    CAPTCHA_REQUIRED: 'CAPTCHA_REQUIRED',
    IN_PROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    loginStatus: loginStatuses.NOT_INITIALIZED,
    captchaUrl: '',
    loginStatusMessage: '',
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CAPTCHA_URL : {
            return {
                ...state, captchaUrl: action.captchaUrl
            }
        }
        case SET_LOGIN_STATUS : {
            return {
                ...state, loginStatus: action.loginStatus
            }
        }
        case SET_LOGIN_STATUS_MESSAGE : {
            return {
                ...state, loginStatusMessage: action.loginStatusMessage
            }
        }
        default: {
            return state;
        }
    }
};

export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});
export const setLoginStatus = (loginStatus) => ({type: SET_LOGIN_STATUS, loginStatus});
export const setLoginStatusMessage = (loginStatusMessage) => ({type: SET_LOGIN_STATUS_MESSAGE, loginStatusMessage});


export const loginAttempt = (values) => (dispatch) => {
    dispatch(setLoginStatus(loginStatuses.IN_PROGRESS));
    serverAPI.loginRequest(values.email, values.password, values.rememberMe, values.captcha)
        .then(res => {
            switch (res.data.resultCode) {
                case 0:
                    dispatch(setLoginStatusMessage('Login success'));
                    dispatch(setLoginStatus(loginStatuses.SUCCESS));
                    dispatch(me());
                    break;
                case 1:
                    dispatch(setLoginStatus(loginStatuses.ERROR));
                    dispatch(setLoginStatusMessage(res.data.messages[0]));
                    break;
                case 10:
                    dispatch(setLoginStatus(loginStatuses.CAPTCHA_REQUIRED));
                    dispatch(setLoginStatusMessage(res.data.messages[0]));
                    serverAPI.captchaRequest().then((res) => {
                        dispatch(setCaptchaUrl(res.data.url));
                    });
                    break;
                default:
                    break;
            }
        })
};

export const logOutAttempt = () => (dispatch) => {
    serverAPI.logoutRequest()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(false, {id: null, login: null, email: null,}));
                dispatch(setLoginStatus(loginStatuses.NOT_INITIALIZED));
                dispatch(setLoginStatusMessage('Logout success'));
            }
        });
};

export default loginReducer;