import React from 'react'
import {connect} from "react-redux";
import DialogsPage from "./DialogsPage";
import {me} from "../../redux/authReducer";
import {RedirectToLogin} from "../../hocs/redirectToLogin";
import {compose} from 'redux';
const DialogsPageContainer = (props) => {

    return <DialogsPage login={props.login}
                        meRequest={props.meRequest}
    />

};

const mapStateToProps = (state) => {
    return {
        login: state.login,
    }
};


export default compose(
    connect(mapStateToProps, {meRequest: me}),
    RedirectToLogin
)(DialogsPageContainer);
