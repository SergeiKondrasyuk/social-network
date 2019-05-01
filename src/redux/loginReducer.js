const SET_CAPTCHAURL = 'SET_CAPTCHAURL';
const SET_CAPTCHA_STATUS = 'SET_CAPTCHA_STATUS';
const UPDATE_CAPTCHA_VALUE = 'UPDATE_CAPTCHA_VALUE';
const UPDATE_EMAIL_VALUE = 'UPDATE_EMAIL_VALUE';
const UPDATE_PASSWORD_VALUE = 'UPDATE_PASSWORD_VALUE';
const REMEMBER_ME_POSITION = 'REMEMBER_ME_POSITION';
const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
const SET_LOGIN_STATUS_MESSAGE = 'SET_LOGIN_STATUS_MESSAGE';


export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    loginStatus: statuses.NOT_INITIALIZED,
    captchaStatus: statuses.NOT_INITIALIZED,
    email: '',
    password: '',
    rememberMe: false,
    captchaValue: '',
    captchaUrl: '',
    loginStatusMessage: '',
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CAPTCHAURL : {
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
        case SET_LOGIN_STATUS_MESSAGE : {
            return {
                ...state,
                loginStatusMessage: action.loginStatusMessage
            }
        }
        case UPDATE_EMAIL_VALUE : {
            return {
                ...state,
                email: action.emailValue
            }
        }
        case UPDATE_PASSWORD_VALUE : {
            return {
                ...state,
                password: action.passwordValue
            }
        }
        case REMEMBER_ME_POSITION : {
            return {
                ...state,
                rememberMe: action.rememberMePosition
            }
        }
        case UPDATE_CAPTCHA_VALUE : {
            return {
                ...state,
                captchaValue: action.captchaValue
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
export const setLoginStatusMessage = (loginStatusMessage) => ({type: SET_LOGIN_STATUS_MESSAGE, loginStatusMessage});
export const updateEmailValue = (emailValue) => ({type: UPDATE_EMAIL_VALUE, emailValue});
export const updatePasswordValue = (passwordValue) => ({type: UPDATE_PASSWORD_VALUE, passwordValue});
export const updateRememberMePosition = (rememberMePosition) => ({type: REMEMBER_ME_POSITION, rememberMePosition});
export const updateCaptchaValue = (captchaValue) => ({type: UPDATE_CAPTCHA_VALUE, captchaValue});



export default loginReducer;