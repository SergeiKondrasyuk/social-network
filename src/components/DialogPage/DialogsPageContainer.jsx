import React from 'react'
import {connect} from "react-redux";
import DialogsPage from "./DialogsPage";

const DialogsPageConnected = (props) => {

    return <DialogsPage login={props.login}
                        auth={props.auth}/>

};

const mstp = (state) => {
    return {
        login: state.login,
        auth: state.auth
    }
};

const DialogsPageContainer = connect(mstp)(DialogsPageConnected);

export default DialogsPageContainer;
