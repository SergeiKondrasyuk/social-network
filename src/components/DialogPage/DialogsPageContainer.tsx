import React from 'react'
import {connect} from "react-redux";
import DialogsPage from "./DialogsPage";
import {me} from "../../redux/authReducer";
import {RedirectToLogin} from "../../hocs/redirectToLogin";

const DialogsPageConnected = (props: any) => {

    return <DialogsPage login={props.login}
                        meRequest={props.meRequest}
    />
};

const mapStateToProps = (state: any) => {
    return {
        login: state.login,
    }
};


const DialogsPageContainer = connect(mapStateToProps, {meRequest: me})(DialogsPageConnected);

export default RedirectToLogin(DialogsPageContainer);
