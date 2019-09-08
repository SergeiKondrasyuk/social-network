import style from "./User.module.css";
import Chip from "@material-ui/core/Chip";
import React from "react";
import FollowIcon from '@material-ui/icons/PersonAdd'
import UnFollowIcon from '@material-ui/icons/RemoveCircleOutline'

let FollowUnFollowButton = (props) => {

    let icon = props.followed ? <UnFollowIcon/> : <FollowIcon/>;
    let label = props.followed ? 'Unfollow' : 'Follow';
    let handleOnClick = () =>
        props.isAuth ? (props.followed ? props.unFollowUser(props.id) : props.followUser(props.id)) :
            (alert('Please Login'));

    return <>
        <Chip
            icon={icon}
            label={label}
            clickable
            className={style.followUnFollowButton}
            color="primary"
            disabled={props.followingInProgress.some(id => id === props.id)}
            onClick={handleOnClick}
        />
    </>
};

export default FollowUnFollowButton