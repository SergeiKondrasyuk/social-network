import React from 'react';
import anonymousUser from "../../img/anonymous-user.png"
import s from './User.module.css'

const Users = (props) => {

        props.getUsers(props.users.status);
 
    return <div className={s.users}>
        {props.users.users.map(u =>
            <div className={s.user}>
                <div className={s.userPhoto}><img alt='User_Photo'
                        src={u.photos.small == null ? anonymousUser : u.photos.small}/></div>
                <span className={s.name}>{u.name}</span>
                <span className={s.followUnFollowButton}>{u.followed
                    ? <button onClick={() => {
                        props.unFollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}</span>
            </div>)}
    </div>
};


export default Users;