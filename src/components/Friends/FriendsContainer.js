import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {setFriends, setStatus} from "../../redux/friendsReducer";

const FriendsConnected = (props) => {

    return <Friends friends={props.friends}
                    setFriends={props.setFriends}
                    setStatus={props.setStatus}/>

};

const mstp = (state) => {
    return {
        friends: state.friends
    }
};

const mdtp = (dispatch) => {
    return {
        setFriends: (friends) => {
            dispatch(setFriends(friends))
        },
        setStatus: (status) => {
            dispatch(setStatus(status))
        },

    }
};

const FriendsContainer = connect(mstp, mdtp)(FriendsConnected);

export default FriendsContainer;