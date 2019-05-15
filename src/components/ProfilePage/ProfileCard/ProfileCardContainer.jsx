import React from 'react';
import {connect} from "react-redux";
import ProfileCard from "./ProfileCard";
import {
    onContactChange,
    profileInfoPutRequest,
    profileInfoRequest,
    setEditModeStatus
} from "../../../redux/profilePageReducer";


const ProfileCardConnected = (props) => {
    return <ProfileCard profilePage={props.profilePage}
                        profileInfoRequest={props.profileInfoRequest}
                        profileInfoPutRequest={props.profileInfoPutRequest}
                        setEditModeStatus={props.setEditModeStatus}
                        onContactChange={props.onContactChange}
    />
};

const mstp = (store) => {
    return {
        profilePage: store.profilePage,
        user: store.friends.friends[0],

    }
};

const mdtp = (dispatch) => {
    return {
        profileInfoRequest: (id) => {
            dispatch(profileInfoRequest(id))
        },
        profileInfoPutRequest: (profileInfo) => {
            dispatch(profileInfoPutRequest(profileInfo))
        },
        setEditModeStatus: (value) => {
            dispatch(setEditModeStatus(value))
        },
        onContactChange: (value, contactKey) => {
            dispatch(onContactChange(value, contactKey))
        },

    }
};

const ProfileCardContainer = connect(mstp, mdtp)(ProfileCardConnected);

export default ProfileCardContainer;