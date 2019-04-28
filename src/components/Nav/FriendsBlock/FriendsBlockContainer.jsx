import React from 'react';
import {connect} from "react-redux";
import FriendsBlock from "./FriendsBlock";

const FriendsBlockConnected = (props) => {
    return <FriendsBlock users={props.users}/>
};

const mstp = (store) => {
    return {
        users: store.users.users,
    }
};

const FriendsBlockContainer = connect(mstp)(FriendsBlockConnected);

export default FriendsBlockContainer;