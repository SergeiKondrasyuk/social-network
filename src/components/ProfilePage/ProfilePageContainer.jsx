import React from 'react';
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {setLoginStatus} from "../../redux/loginReducer";
import {meRequest} from "../../redux/authReducer";


const ProfilePageConnected = (props) => {

    return <ProfilePage login={props.login}
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
            dispatch(meRequest())
        },

    }
};

const ProfilePageContainer = connect(mstp, mdtp)(ProfilePageConnected);

export default ProfilePageContainer;
