import React, {Component, useEffect} from 'react';
import {
    getMessagesWithUser,
    putUpDialogToTop,
    sendMessageToUser, setCurrentDialog,
    updateNewMessageText
} from "../../../redux/dialogPageReducer";
import {connect} from "react-redux";
import CurrentDialog from "./CurrentDialog";
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';


class CurrentDialogContainer extends Component {

    render() {

        return <CurrentDialog sendMessageToUser={this.props.sendMessageToUser}
                              dialogPage={this.props.dialogPage}
                              selectedDialogId={this.props.selectedDialogId}
                              userId={this.props.match.params.userId}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        selectedDialogId: state.dialogPage.selectedDialogId
    }
};


export default compose(
    connect(mapStateToProps, {
        updateNewMessageText, sendMessageToUser, putUpDialogToTop,
        getMessagesWithUser, setCurrentDialog
    }),
    withRouter
)(CurrentDialogContainer);