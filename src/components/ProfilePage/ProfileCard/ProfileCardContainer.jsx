import React from 'react';
import {connect} from "react-redux";
import ProfileCard from "./ProfileCard";
import {
    onAboutMeChange,
    onContactChange, onFullNameChange, onJobDescriptionChange,
    profileInfoPutRequest,
    profileInfoRequest,
    setEditModeStatus, setErrorMessage, setLookingForAJobStatus, uploadPhotoRequest
} from "../../../redux/profilePageReducer";


const ProfileCardConnected = (props) => {
    return <ProfileCard profilePage={props.profilePage}
                        profileInfoRequest={props.profileInfoRequest}
                        profileInfoPutRequest={props.profileInfoPutRequest}
                        setEditModeStatus={props.setEditModeStatus}
                        onContactChange={props.onContactChange}
                        onAboutMeChange={props.onAboutMeChange}
                        onFullNameChange={props.onFullNameChange}
                        setLookingForAJobStatus={props.setLookingForAJobStatus}
                        onJobDescriptionChange={props.onJobDescriptionChange}
                        uploadPhotoRequest={props.uploadPhotoRequest}
                        setErrorMessage={props.setErrorMessage}
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
        profileInfoPutRequest: () => {
            dispatch(profileInfoPutRequest())
        },
        setEditModeStatus: (value) => {
            dispatch(setEditModeStatus(value))
        },
        onContactChange: (value, contactKey) => {
            dispatch(onContactChange(value, contactKey))
        },
        onAboutMeChange: (value) => {
            dispatch(onAboutMeChange(value))
        },
        onFullNameChange: (value) => {
            dispatch(onFullNameChange(value))
        },
        setLookingForAJobStatus: (value) => {
            dispatch(setLookingForAJobStatus(value))
        },
        onJobDescriptionChange: (value) => {
            dispatch(onJobDescriptionChange(value))
        },
        uploadPhotoRequest: (photo) => {
            dispatch(uploadPhotoRequest(photo))
        },
        setErrorMessage: (value) => {
            dispatch(setErrorMessage(value))
        },

    }
};

const ProfileCardContainer = connect(mstp, mdtp)(ProfileCardConnected);

export default ProfileCardContainer;