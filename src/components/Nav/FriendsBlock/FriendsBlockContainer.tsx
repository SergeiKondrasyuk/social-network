import React from 'react';
import {connect} from "react-redux";
import FriendsBlock from "./FriendsBlock";

const FriendsBlockConnected = (props: any) => {
    return <FriendsBlock friends={props.friends}/>
};

const mapStateToProps = (store: any) => {
    return {
        friends: store.friends.friends,
    }
};

const FriendsBlockContainer = connect(mapStateToProps)(FriendsBlockConnected);

export default FriendsBlockContainer;