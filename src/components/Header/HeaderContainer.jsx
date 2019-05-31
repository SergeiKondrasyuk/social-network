import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {logoutAttempt, setLoginStatus, setLoginStatusMessage} from "../../redux/loginReducer";
import {me, setIsAuth} from "../../redux/authReducer";


const HeaderConnected = (props) => {

    return <Header state={props.state}
                   setLoginStatus={props.setLoginStatus}
                   setIsAuth={props.setIsAuth}
                   setLoginStatusMessage={props.setLoginStatusMessage}
                   isAuth={props.isAuth}
                   me={props.me}
                   logoutRequest={props.logoutRequest}/>
};

const mstp = (state) => {
    return {
        state: state,
        isAuth: state.auth.isAuth
    }
};

const mdtp = (dispatch) => {
    return {
        setLoginStatus: (loginStatus) => {
            dispatch(setLoginStatus(loginStatus))
        },
        setLoginStatusMessage: (loginStatusMessage) => {
            dispatch(setLoginStatusMessage(loginStatusMessage))
        },
        setIsAuth: (value) => {
            dispatch(setIsAuth(value))
        },
        logoutRequest: () => {
            dispatch(logoutAttempt())
        },
        me: () => {
            dispatch(me())
        },

    }
};

const HeaderContainer = connect(mstp, mdtp)(HeaderConnected);

export default HeaderContainer;

