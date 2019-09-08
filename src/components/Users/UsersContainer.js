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
            />}


    </>
};

const mapStateToProps = (state) => {
    return {
        usersReducer: getUsersReducer(state),
        users: getUsersSelector(state),
        auth: getAuthReducer(state),
    }
};

const UsersContainer = connect(mapStateToProps, {setCurrentPage, getUsers, followUser, unFollowUser})(UsersConnected);

export default UsersContainer;