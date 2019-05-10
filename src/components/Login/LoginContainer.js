import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {
    getCaptcha, loginRequest,
    setCaptchaStatus,
    setCaptchaUrl, setLoginResult,
    setLoginStatus, setLoginStatusMessage,
    updateCaptchaValue,
    updateEmailValue, updatePasswordValue, updateRememberMePosition
} from "../../redux/loginReducer";

const LoginConnected = (props) => {

    return <Login login={props.login}
                  setCaptchaUrl={props.setCaptchaUrl}
                  setCaptchaStatus={props.setCaptchaStatus}
                  updateCaptchaValue={props.updateCaptchaValue}
                  updateEmailValue={props.updateEmailValue}
                  updatePasswordValue={props.updatePasswordValue}
                  updateRememberMePosition={props.updateRememberMePosition}
                  setLoginStatus={props.setLoginStatus}
                  setLoginStatusMessage={props.setLoginStatusMessage}
                  setLoginResult={props.setLoginResult}
                  getCaptcha={props.getCaptcha}
                  loginRequest={props.loginRequest}
    />

};

const mstp = (state) => {
    return {
        login: state.login
    }
};

const mdtp = (dispatch) => {
    return {
        setCaptchaUrl: (captchaUrl) => {
            dispatch(setCaptchaUrl(captchaUrl))
        },
        setCaptchaStatus: (captchaStatus) => {
            dispatch(setCaptchaStatus(captchaStatus))
        },
        setLoginStatus: (loginStatus) => {
            dispatch(setLoginStatus(loginStatus))
        },
        setLoginResult: (loginResult) => {
            dispatch(setLoginResult(loginResult))
        },
        updateCaptchaValue: (captchaValue) => {
            dispatch(updateCaptchaValue(captchaValue))
        },
        updateEmailValue: (emailValue) => {
            dispatch(updateEmailValue(emailValue))
        },
        updatePasswordValue: (passwordValue) => {
            dispatch(updatePasswordValue(passwordValue))
        },
        updateRememberMePosition: (rememberMePosition) => {
            dispatch(updateRememberMePosition(rememberMePosition))
        },
        setLoginStatusMessage: (loginStatusMessage) => {
            dispatch(setLoginStatusMessage(loginStatusMessage))
        },
        getCaptcha: (captchaStatus) => {
            dispatch(getCaptcha(captchaStatus))
        },
        loginRequest: (email, password, rememberMe, captcha) => {
            dispatch(loginRequest(email, password, rememberMe, captcha))
        },

    }
};

const LoginContainer = connect(mstp, mdtp)(LoginConnected);

export default LoginContainer;