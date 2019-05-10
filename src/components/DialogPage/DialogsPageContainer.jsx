import React from 'react'
import {connect} from "react-redux";
import DialogsPage from "./DialogsPage";

const DialogsPageConnected = (props) => {

    return <DialogsPage login={props.login}/>

};

const mstp = (state) => {
    return {
        login: state.login
    }
};

const DialogsPageContainer = connect(mstp)(DialogsPageConnected);

export default DialogsPageContainer;
