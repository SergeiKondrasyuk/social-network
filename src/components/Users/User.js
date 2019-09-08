import style from "./User.module.css";
import {NavLink} from "react-router-dom";
import AnonymousUserIcon from '@material-ui/icons/Person'
import FollowUnFollowButton from "./FollowUnFollowButton";
import React from "react";

let User = (props) => {

    let shorteningString = (string, maxLength) => {
        return string.length > maxLength ? string.slice(0, maxLength - 1) + '...' : string
    };

    return (
        <div className={style.user}>
            <NavLink to={'/profile/' + props.id}>
                <div className={style.userPhoto}>
                    {!!props.photo
                        ? <img alt='User_Photo' src={props.photo}/>
                        : <AnonymousUserIcon
                            style={{width: 100, height: 100, textDecoration: 'none', color: 'black'}}/>}
                </div>
            </NavLink>

            <span
                className={style.name}><b>Name: </b>{shorteningString(props.name, 18)}</span>
            {props.status &&
            <span
                className={style.status}><b>Status: </b>{shorteningString(props.status, 18)}</span>}

            {props.id === props.authId ? <span className={style.itsYouMessage}>It's you</span> :
                <FollowUnFollowButton followed={props.followed} id={props.id} followUser={props.followUser}
                                      unFollowUser={props.unFollowUser} isAuth={props.isAuth}
                                      followingInProgress={props.followingInProgress}/>}

        </div>
    )
};

export default User;