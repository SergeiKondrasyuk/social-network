import React from 'react';
import s from './FriendBlockItem.module.css';
import PropTypes from "prop-types";

const FriendBlockItem = (props) => {


    return <div  className={s.friendBlock}>
        <img alt='Friend_avatar' className={s.avatar} src={props.friendAvatar}/>
        <p className={s.friendName}> {props.friendName}</p>
    </div>
};

export default FriendBlockItem;

FriendBlockItem.propTypes = {
    friendAvatar: PropTypes.string,
    friendName: PropTypes.string,
};