import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {getUsers, followUser, unFollowUser, setCurrentPage} from '../../redux/usersReducer';
import {getAuthReducer, getUsersReducer, getUsersSelector} from '../../redux/selectors';
import Preloader from '../common/Preloader';
import style from './User.module.css'

const UsersConnected = (props) => {

    useEffect(() => {
        props.getUsers(props.usersReducer.currentPage);
    }, []);

    return <>
        {props.usersReducer.isFetching
            ? <div className={style.preloader}><Preloader/></div>
            : <Users usersReducer={props.usersReducer}
                     users={props.users}
                     auth={props.auth}
                     getUsers={props.getUsers}
                     followUser={props.followUser}
                     unFollowUser={props.unFollowUser}
                     setCurrentPage={props.setCurrentPage}
                     usersTotalCount={props.usersTotalCount}
                     usersCountOnPage={props.usersCountOnPage}
                     followingInProgress={props.followingInProgress}
                     currentPage={props.currentPage}
            />}


    </>
};

const mapStateToProps = (state) => {
    return {
        usersReducer: getUsersReducer(state),
        usersTotalCount: getUsersReducer(state).usersTotalCount,
        usersCountOnPage: getUsersReducer(state).usersCountOnPage,
        followingInProgress: getUsersReducer(state).followingInProgress,
        currentPage: getUsersReducer(state).currentPage,
        users: getUsersSelector(state),
        auth: getAuthReducer(state),
    }
};

const UsersContainer = connect(mapStateToProps, {setCurrentPage, getUsers, followUser, unFollowUser})(UsersConnected);

export default UsersContainer;