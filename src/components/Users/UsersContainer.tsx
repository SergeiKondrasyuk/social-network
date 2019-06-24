import * as React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    getUsers, followUser, unFollowUser, setCurrentPage
} from '../../redux/usersReducer';
import {getAuthReducer, getUsersReducer} from '../../redux/selectors';
import Preloader from '../common/Preloader';
import style from './User.module.css'

const UsersConnected = (props: any) => {
    return <>
        <div className={style.preloader}>{props.users.isFetching && <Preloader/>}</div>

        <Users users={props.users}
               auth={props.auth}
               getUsers={props.getUsers}
               followUser={props.followUser}
               unFollowUser={props.unFollowUser}
               setCurrentPage={props.setCurrentPage}
        />
    </>
};

const mapStateToProps = (state: any) => {
    return {
        users: getUsersReducer(state),
        auth: getAuthReducer(state),
    }
};

const UsersContainer = connect(mapStateToProps, {setCurrentPage, getUsers, followUser, unFollowUser})(UsersConnected);

export default UsersContainer;