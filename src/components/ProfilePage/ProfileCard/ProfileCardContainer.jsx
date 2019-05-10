import React from 'react';
import {connect} from "react-redux";
import ProfileCard from "./ProfileCard";


const ProfileCardConnected = (props) => {
    return <ProfileCard user={props.user}/>
};

const mstp = (store) => {
    return {
        user: store.friends.friends[0],
    }
};

const ProfileCardContainer = connect(mstp)(ProfileCardConnected);

export default ProfileCardContainer;