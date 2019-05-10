import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setLoginStatus, setLoginStatusMessage} from "../../redux/loginReducer";


const HeaderConnected = (props) => {

    return <Header login={props.login}
                   setLoginStatus={props.setLoginStatus}
                   setLoginStatusMessage={props.setLoginStatusMessage}/>
};

const mstp = (state) => {
    return {
        login: state.login
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

    }
};

const HeaderContainer = connect(mstp, mdtp)(HeaderConnected);

export default HeaderContainer;

