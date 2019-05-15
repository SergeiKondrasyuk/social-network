import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {logoutRequest, setLoginStatus, setLoginStatusMessage} from "../../redux/loginReducer";
import {meRequest, setIsAuth} from "../../redux/authReducer";


const HeaderConnected = (props) => {

    return <Header login={props.login}
                   setLoginStatus={props.setLoginStatus}
                   setIsAuth={props.setIsAuth}
                   setLoginStatusMessage={props.setLoginStatusMessage}
                   isAuth={props.isAuth}
                   meRequest={props.meRequest}
                   logoutRequest={props.logoutRequest}/>
};

const mstp = (state) => {
    return {
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
            dispatch(logoutRequest())
        },
        meRequest: () => {
            dispatch(meRequest())
        },

    }
};

const HeaderContainer = connect(mstp, mdtp)(HeaderConnected);

export default HeaderContainer;

