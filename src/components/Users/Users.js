import React, {useEffect} from 'react';
import anonymousUser from '../../img/anonymous-user.png'
import style from './User.module.css'
import {NavLink} from 'react-router-dom';

const Users = (props) => {

    useEffect(() => {
        props.getUsers(props.users.currentPage);
    }, [])


    let pagesCount = Math.ceil(props.users.usersTotalCount / props.users.usersCountOnPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getUsers(pageNumber);
    }

    return <div>
        <div className={style.users}>{props.users.users.map(u =>
            <div className={style.user}>
                <NavLink to={'/profile/' + u.id}>
                    <div className={style.userPhoto}><img alt='User_Photo'
                                                          src={u.photos.small == null ? anonymousUser : u.photos.small}/>
                    </div>
                </NavLink>
                <span className={style.name}>{u.name}</span>
                {u.id === props.auth.userData.id ? <span className={style.itsYouMessage}>It's you</span> :
                    <span className={style.followUnFollowButton}>{u.followed
                        ? <button disabled={props.users.followingInProgress.some(id=>id===u.id)} onClick={() => {
                            props.auth.isAuth ? props.unFollowUser(u.id) : alert('Please Login')
                        }}>Unfollow</button>
                        : <button disabled={props.users.followingInProgress.some(id=>id===u.id)} onClick={() => {
                            props.auth.isAuth ? props.followUser(u.id) : alert('Please Login')
                        }}>Follow</button>}</span>}
            </div>)}</div>
        <div className={style.pagination}>
            {pages.map(p =>
                <span className={props.users.currentPage === p && style.selectedPage}
                      onClick={() => {
                          onPageChanged(p)
                      }}
                >{p}</span>
            )}
        </div>
    </div>
};


export default Users;