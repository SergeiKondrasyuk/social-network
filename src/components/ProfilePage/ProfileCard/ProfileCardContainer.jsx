import React from 'react';
import {connect} from "react-redux";
import ProfileCard from "./ProfileCard";
import {
    onAboutMeChange, onContactChange, onFullNameChange, onJobDescriptionChange,
    putProfileInfo, getProfileInfo, setPhotoUpdateErrorMessage,
    setLookingForAJobStatus, uploadPhoto, updateStatus
} from '../../../redux/profilePageReducer';
import {getAuthReducer, getProfilePageReducer} from '../../../redux/selectors';


const ProfileCardConnected = (props) => {
    return <ProfileCard profilePage={props.profilePage}
                        meId={props.auth.userData.id}
                        getProfileInfo={props.getProfileInfo}
                        putProfileInfo={props.putProfileInfo}
                        onContactChange={props.onContactChange}
                        onAboutMeChange={props.onAboutMeChange}
                        onFullNameChange={props.onFullNameChange}
                        setLookingForAJobStatus={props.setLookingForAJobStatus}
                        onJobDescriptionChange={props.onJobDescriptionChange}
                        uploadPhoto={props.uploadPhoto}
                        updateStatus={props.updateStatus}
                        setErrorMessage={props.setErrorMessage}
                        status={props.profilePage.profileStatus}
                        profileInfo={props.profilePage.profileInfo}
    />
};

const mapStateToProps = (state) => {
    return {
        profilePage: getProfilePageReducer(state),
        auth: getAuthReducer(state),

    }
};

const ProfileCardContainer = connect(mapStateToProps, {
    getProfileInfo, putProfileInfo, onContactChange, onAboutMeChange, updateStatus,
    onFullNameChange, setLookingForAJobStatus, onJobDescriptionChange, uploadPhoto, setErrorMessage: setPhotoUpdateErrorMessage
})(ProfileCardConnected);

export default ProfileCardContainer;