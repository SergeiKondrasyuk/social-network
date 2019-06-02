import React from 'react';
import {connect} from "react-redux";
import ProfileCard from "./ProfileCard";
import {
    onAboutMeChange, onContactChange, onFullNameChange, onJobDescriptionChange,
    profileInfoPutRequest, profileInfoRequest, setEditModeStatus, setErrorMessage,
    setLookingForAJobStatus, uploadPhotoRequest
} from '../../../redux/profilePageReducer';


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

const mapStateToProps = (store) => {
    return {
        profilePage: store.profilePage,
    }
};

const ProfileCardContainer = connect(mapStateToProps, {
    profileInfoRequest, profileInfoPutRequest, setEditModeStatus, onContactChange, onAboutMeChange,
    onFullNameChange, setLookingForAJobStatus, onJobDescriptionChange, uploadPhotoRequest, setErrorMessage
})(ProfileCardConnected);

export default ProfileCardContainer;