import React from 'react';
import s from './FriendsBlock.module.css';
import FriendBlockItem from './FriendItem/FriendBlockItem';

const FriendsBlock = (props: any) => {
    let friendItem = props.friends.map((f: any) =>
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