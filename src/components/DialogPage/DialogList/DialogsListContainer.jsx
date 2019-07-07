import React from 'react'
import {connect} from "react-redux";
import DialogList from "./DialogsList";

const DialogListConnected = (props) => {
    return <DialogList users={props.users}/>
};

const mstp = (store) => {
    return {
        users: store.dialogPage.dialogUsers,
    }
};

const DialogListContainer = connect(mstp)(DialogListConnected);

export default DialogListContainer;