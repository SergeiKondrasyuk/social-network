import React from 'react';
import {connect} from "react-redux";
import LoginReduxForm from "./Login";
import {loginAttempt} from "../../redux/loginReducer";
import {getAuthReducer, getLoginReducer} from "../../redux/selectors";

const LoginConnected = (props) => {

    let bllSubmit = (values) => {
        debugger
        props.loginAttempt(values)
    };

    return <LoginReduxForm onSubmit={bllSubmit}
                           initialValues={{email: props.login.email, password: props.login.password,
                               rememberMe: props.login.rememberMe, captcha: props.login.captcha }}
                           login={props.login}
                           auth={props.auth}
                           loginAttempt={props.loginAttempt}
    />
};

const mapStateToProps = (state) => {
    return {
        login: getLoginReducer(state),
        auth: getAuthReducer(state),
    }
};

let LoginContainer = connect(mapStateToProps, {loginAttempt})(LoginConnected);

export default LoginContainer;