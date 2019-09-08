import React from 'react';
import style from './User.module.css'
import User from "./User";

const Users = (props) => {

    let pagesCount = Math.ceil(props.usersReducer.usersTotalCount / props.usersReducer.usersCountOnPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getUsers(pageNumber);
    };

    return <>
        <div className={style.users}>{props.users.map(u =>
            <User id={u.id} photo={u.photos.small} status={u.status} name={u.name} followed={u.followed}
                  followingInProgress={props.usersReducer.followingInProgress} unFollowUser={props.unFollowUser}
                  isAuth={props.auth.isAuth} followUser={props.followUser} authId={props.auth.userData.id}/>
        )}
        </div>

        <div className={style.pagination}>
            {pages.map(p =>
                <span className={props.usersReducer.currentPage === p && style.selectedPage}
                      onClick={() => {
                          onPageChanged(p)
                      }}
                >{p}</span>
            )}
        </div>
    </>
};

export default Users;
