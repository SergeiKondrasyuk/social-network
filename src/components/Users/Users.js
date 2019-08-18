import React from 'react';
import AnonymousUserIcon from '@material-ui/icons/Person'
import style from './User.module.css'
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FollowIcon from '@material-ui/icons/PersonAdd'
import UnFollowIcon from '@material-ui/icons/RemoveCircleOutline'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const Users = (props) => {
debugger
    let pagesCount = Math.ceil(props.usersReducer.usersTotalCount / props.usersReducer.usersCountOnPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getUsers(pageNumber);
    };

    let shorteningString = (string, maxLength) => {
        debugger
        return string.length > maxLength ? string.slice(0, maxLength - 1) + '...' : string
    };

    return <div>
        <div className={style.users}>{props.users.map(u =>
            <div className={style.user}>
                <NavLink to={'/profile/' + u.id}>
                    <div className={style.userPhoto}>
                        {!!u.photos.small
                            ? <img alt='User_Photo' src={u.photos.small}/>
                            : <AnonymousUserIcon
                                style={{width: 100, height: 100, textDecoration: 'none', color: 'black'}}/>}
                    </div>
                </NavLink>

                <span
                    className={style.name}><b>Name: </b>{shorteningString(u.name, 18)}</span>
                {u.status &&
                <span
                    className={style.status}><b>Status: </b>{shorteningString(u.status, 18)}</span>}

                {u.id === props.auth.userData.id ? <span className={style.itsYouMessage}>It's you</span> :
                    <Button className={style.followUnFollowButton} color="primary" variant="contained"
                            disabled={props.usersReducer.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.auth.isAuth ? (u.followed ? props.unFollowUser(u.id) : props.followUser(u.id)) :
                            (alert('Please Login'))
                    }}>{u.followed ? <>Unfollow<UnFollowIcon className={style.followIcon}/></> : <>Follow<FollowIcon
                        className={style.followIcon}/></>}</Button>
                }
            </div>)}
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
    </div>
};


export default Users;