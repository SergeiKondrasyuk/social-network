import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    setUsers, setStatus, getUsers, followUserRequest,
    unFollowUserRequest, setCurrentPage
} from '../../redux/usersReducer';
import {getAuthReducer} from '../../redux/selectors';
import Preloader from '../common/Preloader';
import style from './User.module.css'

const UsersConnected = (props) => {

    return <>
        <div className={style.preloader}>{props.users.isFetching && <Preloader/>}</div>

        <Users users={props.users}
               auth={props.auth}
               setUsers={props.setUsers}
               setStatus={props.setStatus}
               getUsers={props.getUsers}
               followUserRequest={props.followUserRequest}
               unFollowUserRequest={props.unFollowUserRequest}
               setCurrentPage={props.setCurrentPage}
        />
    </>

};

const mapStateToProps = (state) => {
    return {
        users: state.users,
        auth: getAuthReducer(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setStatus: (status) => {
            dispatch(setStatus(status))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        },
        getUsers: (pageNumber) => {
            dispatch(getUsers(pageNumber))
        },
        followUserRequest: (userId) => {
            dispatch(followUserRequest(userId))
        },
        unFollowUserRequest: (userId) => {
            dispatch(unFollowUserRequest(userId))
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersConnected);

export default UsersContainer;