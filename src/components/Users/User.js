import style from "./User.module.css";
import {NavLink} from "react-router-dom";
import AnonymousUserIcon from '@material-ui/icons/Person'
import FollowUnFollowButton from "./FollowUnFollowButton";
import React from "react";

let User = ({id, photo, name, status, authId, followed, unFollowUser, followUser, followingInProgress, isAuth}) => {

    let shorteningString = (string, maxLength) => {
        return string.length > maxLength ? string.slice(0, maxLength - 1) + '...' : string
    };

    return (
        <div className={style.user}>
            <NavLink to={'/profile/' + id}>
                <div className={style.userPhoto}>
                    {!!photo
                        ? <img alt='User_Photo' src={photo}/>
                        : <AnonymousUserIcon
                            style={{width: 100, height: 100, textDecoration: 'none', color: 'black'}}/>}
                </div>
            </NavLink>

            <span
                className={style.name}><b>Name: </b>{shorteningString(name, 18)}</span>
            {status &&
            <span
                className={style.status}><b>Status: </b>{shorteningString(status, 18)}</span>}

            {id === authId ? <span className={style.itsYouMessage}>It's you</span> :
                <FollowUnFollowButton followed={followed} id={id} followUser={followUser}
                                      unFollowUser={unFollowUser} isAuth={isAuth}
                                      followingInProgress={followingInProgress}/>}

        </div>
    )
};

export default User;