import React from 'react';
import s from './FriendItem.module.css';
import PropTypes from "prop-types";

const FriendItem = (props) => {


    return <div className={s.friendBlock}>
        <img className={s.avatar} src={props.friendAvatar}/>
        <p className={s.friendName}> {props.friendName}</p>
    </div>
};

export default FriendItem;

FriendItem.propTypes = {
    friendAvatar: PropTypes.string,
    friendName: PropTypes.string,
};