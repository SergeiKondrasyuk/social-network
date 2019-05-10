import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {setUsers, setStatus, follow, unFollow, getUsers} from "../../redux/usersReducer";

const UsersConnected = (props) => {

    return <Users users={props.users}
                  setUsers={props.setUsers}
                  setStatus={props.setStatus}
                  follow={props.follow}
                  unFollow={props.unFollow}
                  getUsers={props.getUsers}
    />

};

const mstp = (state) => {
    return {
        users: state.users
    }
};

const mdtp = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setStatus: (status) => {
            dispatch(setStatus(status))
        },
        follow: (userID) => {
            dispatch(follow(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollow(userID))
        },
        getUsers: (status) => {
            dispatch(getUsers(status))
        },
    }
};

const UsersContainer = connect(mstp, mdtp)(UsersConnected);

export default UsersContainer;