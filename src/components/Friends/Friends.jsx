import React from 'react';
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';
import PropTypes from "prop-types";

const Friends = (props) => {
    let friendItem =  props.users.slice(1).map (f =>
        <FriendItem friendName={f.firstName} friendAvatar={f.avatar}/>
    );

    return <div className={s.friendsBlock}>
        <div className={s.friendsTitle}>Friends</div>
        <div className={s.friendsList}>
            {friendItem}
        </div>
    </div>
}
export default Friends;

Friends.propTypes = {
    users: PropTypes.array,
    firstName: PropTypes.string,
    avatar: PropTypes.string,
}