import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";

const FriendsConnected = (props) => {
    return <Friends users={props.users}/>
};

const mstp = (store) => {
    return {
        users: store.users.users,
    }
};

const FriendsContainer = connect(mstp)(FriendsConnected);

export default FriendsContainer;