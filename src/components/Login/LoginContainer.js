import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {
    changeInputValue,
    getCaptcha, loginRequest,
    setCaptchaStatus,
    setCaptchaUrl, setLoginResult,
    setLoginStatus, setLoginStatusMessage,
    updateCaptchaValue,
    updateEmailValue, updatePasswordValue, updateRememberMePosition
} from "../../redux/loginReducer";

const LoginConnected = (props) => {

    return <Login login={props.login}
                  auth={props.auth}
                  setCaptchaUrl={props.setCaptchaUrl}
                  setCaptchaStatus={props.setCaptchaStatus}
                  setLoginStatus={props.setLoginStatus}
                  setLoginStatusMessage={props.setLoginStatusMessage}
                  setLoginResult={props.setLoginResult}
                  getCaptcha={props.getCaptcha}
                  loginRequest={props.loginRequest}
                  changeInputValue={props.changeInputValue}
    />

};

const mstp = (state) => {
    return {
        login: state.login,
        auth: state.auth
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
        setLoginStatusMessage: (loginStatusMessage) => {
            dispatch(setLoginStatusMessage(loginStatusMessage))
        },
        getCaptcha: (captchaStatus) => {
            dispatch(getCaptcha(captchaStatus))
        },
        loginRequest: (email, password, rememberMe, captcha) => {
            dispatch(loginRequest(email, password, rememberMe, captcha))
        },
        changeInputValue: (propertyName, propertyValue) => {
            dispatch(changeInputValue(propertyName, propertyValue))
        },

    }
};

const LoginContainer = connect(mstp, mdtp)(LoginConnected);

export default LoginContainer;