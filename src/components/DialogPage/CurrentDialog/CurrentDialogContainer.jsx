import React from 'react';
import {sendMessageAC, updateNewMessageTextAC} from "../../../redux/dialogPageReducer";
import {connect} from "react-redux";
import CurrentDialog from "./CurrentDialog";


const CurrentDialogConnected = (props) => {
    return <CurrentDialog onMessageChange={props.onMessageChange}
                          onSendMessageButtonClick={props.onSendMessageButtonClick}
                          dialogPage={props.dialogPage}/>
};

const mstp = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

const mdtp = (dispatch) => {
    return ({
        onMessageChange: (newPost) => {
            dispatch(updateNewMessageTextAC(newPost))
        },
        onSendMessageButtonClick: () => {
            dispatch(sendMessageAC())
        }
    })
};

const CurrentDialogContainer = connect(mstp, mdtp)(CurrentDialogConnected);

export default CurrentDialogContainer;