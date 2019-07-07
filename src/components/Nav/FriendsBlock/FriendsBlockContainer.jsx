import React from 'react';
import {connect} from "react-redux";
import FriendsBlock from "./FriendsBlock";

const FriendsBlockConnected = (props) => {
    return <FriendsBlock friends={props.friends}/>
};

const mstp = (store) => {
    return {
        friends: store.friends.friends,
    }
};

const FriendsBlockContainer = connect(mstp)(FriendsBlockConnected);

export default FriendsBlockContainer;