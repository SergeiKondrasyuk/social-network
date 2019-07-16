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
import {getAuthReducer} from "../../../redux/selectors";


class CurrentDialogContainer extends Component {

    render() {

        return <CurrentDialog sendMessageToUser={this.props.sendMessageToUser}
                              auth={this.props.auth}
                              dialogPage={this.props.dialogPage}
                              selectedDialogId={this.props.selectedDialogId}
                              currentUserAvatar={this.props.currentUserAvatar}
                              userId={this.props.match.params.userId}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        selectedDialogId: state.dialogPage.selectedDialogId,
        currentUserAvatar: state.dialogPage.currentUserAvatar,
        auth: getAuthReducer(state),
    }
};


export default compose(
    connect(mapStateToProps, {
        updateNewMessageText, sendMessageToUser, putUpDialogToTop,
        getMessagesWithUser, setCurrentDialog
    }),
    withRouter
)(CurrentDialogContainer);