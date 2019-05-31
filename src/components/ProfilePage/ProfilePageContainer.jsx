import React from 'react';
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {me} from "../../redux/authReducer";
import {profileInfoRequest} from "../../redux/profilePageReducer";


const ProfilePageConnected = (props) => {

    return <ProfilePage login={props.login}
                        auth={props.auth}
                        meRequest={props.meRequest}
                        profileInfoRequest={props.profileInfoRequest}
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
        profileInfoRequest: () => {
            dispatch(profileInfoRequest())
        },
    }
};

const ProfilePageContainer = connect(mstp, mdtp)(ProfilePageConnected);

export default ProfilePageContainer;
