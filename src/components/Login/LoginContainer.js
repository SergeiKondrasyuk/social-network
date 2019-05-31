import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {
    changeInputValue, loginAttempt,
    setCaptchaUrl, setLoginResult,
    setLoginStatus, setLoginStatusMessage,
} from "../../redux/loginReducer";
import {getAuthReducer, getLoginReducer} from "../../redux/selectors";

const LoginConnected = (props) => {

    return <Login login={props.login}
                  auth={props.auth}
                  setCaptchaUrl={props.setCaptchaUrl}
                  setCaptchaStatus={props.setCaptchaStatus}
                  setLoginStatus={props.setLoginStatus}
                  setLoginStatusMessage={props.setLoginStatusMessage}
                  setLoginResult={props.setLoginResult}
                  loginAttempt={props.loginAttempt}
                  changeInputValue={props.changeInputValue}
    />
};

const mapStateToProps = (state) => {
    return {
        login: getLoginReducer(state),
        auth: getAuthReducer(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCaptchaUrl: (captchaUrl) => {
            dispatch(setCaptchaUrl(captchaUrl))
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
        loginAttempt: (email, password, rememberMe, captcha) => {
            dispatch(loginAttempt(email, password, rememberMe, captcha))
        },
        changeInputValue: (propertyName, propertyValue) => {
            dispatch(changeInputValue(propertyName, propertyValue))
        },
    }
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginConnected);

export default LoginContainer;