import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    getUsers, followUserRequest, unFollowUserRequest, setCurrentPage
} from '../../redux/usersReducer';
import {getAuthReducer, getUsersReducer} from '../../redux/selectors';
import Preloader from '../common/Preloader';
import style from './User.module.css'

const UsersConnected = (props) => {
    return <>
        <div className={style.preloader}>{props.users.isFetching && <Preloader/>}</div>

        <Users users={props.users}
               auth={props.auth}
               getUsers={props.getUsers}
               followUserRequest={props.followUserRequest}
               unFollowUserRequest={props.unFollowUserRequest}
               setCurrentPage={props.setCurrentPage}
        />
    </>
};

const mapStateToProps = (state) => {
    return {
        users: getUsersReducer(state),
        auth: getAuthReducer(state),
    }
};

const UsersContainer = connect(mapStateToProps, {
    setCurrentPage, getUsers, followUserRequest, unFollowUserRequest
})(UsersConnected);

export default UsersContainer;