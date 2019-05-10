import React from 'react';
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";


const ProfilePageConnected = (props) => {

    return <ProfilePage login={props.login}/>

};

const mstp = (state) => {
    return {
        login: state.login
    }
};

const ProfilePageContainer = connect(mstp)(ProfilePageConnected);

export default ProfilePageContainer;
