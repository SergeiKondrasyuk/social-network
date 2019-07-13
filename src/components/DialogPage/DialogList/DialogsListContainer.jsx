import React, {Component} from 'react'
import {connect} from "react-redux";
import DialogList from "./DialogsList";
import {
    getAllDialogs, getMessagesWithUser, putUpDialogToTop, setCurrentDialog
} from '../../../redux/dialogPageReducer';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';


class DialogListContainer extends Component {

    componentDidMount() {
        this.props.getAllDialogs();
        let userId = this.props.match.params.userId;
        if (!!userId) {
            // props.putUpDialogToTop(userId);
            this.props.getMessagesWithUser(userId);
            this.props.setCurrentDialog(userId);
        }
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.match.params.userId;
        if (userId !== prevProps.match.params.userId) {
            this.props.getMessagesWithUser(userId);
            this.props.setCurrentDialog(userId);
        } //else {this.props.setCurrentDialog(null);}
    }


    render() {

        return <DialogList dialogs={this.props.dialogs}
                           getAllDialogs={this.props.getAllDialogs}
                           putUpDialogToTop={this.props.putUpDialogToTop}
                           userId={this.props.match}
                           selectedDialogId={this.props.dialogPage.selectedDialogId}
        />
    }
}

const mapStateToProps = (store) => {
    return {
        dialogPage: store.dialogPage,
        dialogs: store.dialogPage.dialogs,
    }
};

export default compose(
    connect(mapStateToProps, {
        getAllDialogs, putUpDialogToTop, setCurrentDialog,
        getMessagesWithUser
    }),
    withRouter
)(DialogListContainer);