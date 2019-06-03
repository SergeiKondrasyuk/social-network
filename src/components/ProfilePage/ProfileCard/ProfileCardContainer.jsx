import React from 'react';
import {connect} from "react-redux";
import ProfileCard from "./ProfileCard";
import {
    onAboutMeChange, onContactChange, onFullNameChange, onJobDescriptionChange,
    putProfileInfo, getProfileInfo, setEditModeStatus, setErrorMessage,
    setLookingForAJobStatus, uploadPhoto
} from '../../../redux/profilePageReducer';
import {getAuthReducer, getProfilePageReducer} from '../../../redux/selectors';


const ProfileCardConnected = (props) => {
    return <ProfileCard profilePage={props.profilePage}
                        auth={props.auth}
                        getProfileInfo={props.getProfileInfo}
                        putProfileInfo={props.putProfileInfo}
                        setEditModeStatus={props.setEditModeStatus}
                        onContactChange={props.onContactChange}
                        onAboutMeChange={props.onAboutMeChange}
                        onFullNameChange={props.onFullNameChange}
                        setLookingForAJobStatus={props.setLookingForAJobStatus}
                        onJobDescriptionChange={props.onJobDescriptionChange}
                        uploadPhoto={props.uploadPhoto}
                        setErrorMessage={props.setErrorMessage}
    />
};

const mapStateToProps = (state) => {
    return {
        profilePage: getProfilePageReducer(state),
        auth: getAuthReducer(state),

    }
};

const ProfileCardContainer = connect(mapStateToProps, {
    getProfileInfo, putProfileInfo, setEditModeStatus, onContactChange, onAboutMeChange,
    onFullNameChange, setLookingForAJobStatus, onJobDescriptionChange, uploadPhoto, setErrorMessage
})(ProfileCardConnected);

export default ProfileCardContainer;