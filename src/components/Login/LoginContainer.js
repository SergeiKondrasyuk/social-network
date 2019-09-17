import React from 'react';
import {connect} from "react-redux";
import LoginReduxForm from "./Login";
import {loginAttempt} from "../../redux/loginReducer";
import {getAuthReducer, getLoginReducer} from "../../redux/selectors";

const LoginContainer = (props) => {

    let bllSubmit = (values) => {
        props.loginAttempt(values)
    };

    return <LoginReduxForm onSubmit={bllSubmit}
                           login={props.login}
                           isAuth={props.auth.isAuth}
                           loginAttempt={props.loginAttempt}
    />
};

const mapStateToProps = (state) => {
    return {
        login: getLoginReducer(state),
        auth: getAuthReducer(state),
    }
};

export default connect(mapStateToProps, {loginAttempt})(LoginContainer);