import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    setUsers,
    setStatus,
    getUsers,
    followUserRequest,
    unFollowUserRequest
} from "../../redux/usersReducer";
import {getAuthReducer} from "../../redux/selectors";

const UsersConnected = (props) => {

    return <Users users={props.users}
                  auth={props.auth}
                  setUsers={props.setUsers}
                  setStatus={props.setStatus}
                  getUsers={props.getUsers}
                  followUserRequest={props.followUserRequest}
                  UnFollowUserRequest={props.UnFollowUserRequest}
    />

};

const mstp = (state) => {
    return {
        users: state.users,
        auth: getAuthReducer(state),
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
        getUsers: (status) => {
            dispatch(getUsers(status))
        },
        followUserRequest: (userId) => {
            dispatch(followUserRequest(userId))
        },
        UnFollowUserRequest: (userId) => {
            dispatch(unFollowUserRequest(userId))
        },
    }
};

const UsersContainer = connect(mstp, mdtp)(UsersConnected);

export default UsersContainer;