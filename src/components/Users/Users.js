import React from 'react';
import style from './User.module.css'
import User from "./User";
import Pagination from "../common/Pagination";

const Users = ({usersTotalCount, usersCountOnPage, currentPage, followingInProgress, auth, users, ...props}) => {

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getUsers(pageNumber);
    };

    return <>
        <div className={style.users}>{users.map(u =>
            <User id={u.id} photo={u.photos.small} status={u.status} name={u.name} followed={u.followed}
                  followingInProgress={followingInProgress} unFollowUser={props.unFollowUser}
                  isAuth={auth.isAuth} followUser={props.followUser} authId={auth.userData.id}/>
        )}
        </div>

        <Pagination usersTotalCount={usersTotalCount} usersCountOnPage={usersCountOnPage} currentPage={currentPage}
                    onPageChanged={onPageChanged}/>
    </>
};

export default Users;
