import * as React from 'react';
import {sendMessageAC, updateNewMessageTextAC} from "../../../redux/dialogPageReducer";
import {connect} from "react-redux";
import CurrentDialog from "./CurrentDialog";


const CurrentDialogConnected = (props: any) => {
    return <CurrentDialog onMessageChange={props.onMessageChange}
                          onSendMessageButtonClick={props.onSendMessageButtonClick}
                          dialogPage={props.dialogPage}/>
};

const mapDispatchToState = (state: any) => {
    return {
        dialogPage: state.dialogPage
    }
};


const CurrentDialogContainer = connect(mapDispatchToState, {
    onMessageChange: updateNewMessageTextAC,
    onSendMessageButtonClick: sendMessageAC
})(CurrentDialogConnected);

export default CurrentDialogContainer;