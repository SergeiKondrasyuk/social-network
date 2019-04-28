import React from 'react';
import s from './FriendsBlock.module.css';
import FriendBlockItem from './FriendItem/FriendBlockItem';
import PropTypes from "prop-types";

const FriendsBlock = (props) => {
    let friendItem = props.users.slice(1).map(f =>
        <FriendBlockItem friendName={f.firstName} friendAvatar={f.avatar}/>
    );

    return <div className={s.friendsBlock}>
        <div className={s.friendsTitle}>Friends</div>
        <div className={s.friendsList}>
            {friendItem}
        </div>
    </div>
};

export default FriendsBlock;

FriendsBlock.propTypes = {
    users: PropTypes.array,
    firstName: PropTypes.string,
    avatar: PropTypes.string,
};