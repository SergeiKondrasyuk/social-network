import React from 'react'
import {connect} from "react-redux";
import DialogsPage from "./DialogsPage";
import {me} from "../../redux/authReducer";

const DialogsPageConnected = (props) => {

    return <DialogsPage login={props.login}
                        auth={props.auth}
                        meRequest={props.meRequest}
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
        meRequest: () => {
            dispatch(me())
        },

    }
};
const DialogsPageContainer = connect(mstp, mdtp)(DialogsPageConnected);

export default DialogsPageContainer;
