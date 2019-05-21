import React from 'react';
import anonymousUser from "../../img/anonymous-user.png"
import s from './User.module.css'

const Users = (props) => {

        props.getUsers(props.users.getUsersStatus);
 debugger
    return <div className={s.users}>
        {props.users.users.map(u =>
            <div className={s.user}>
                <div className={s.userPhoto}><img alt='User_Photo'
                        src={u.photos.small == null ? anonymousUser : u.photos.small}/></div>
                <span className={s.name}>{u.name}</span>
                {u.id == props.auth.userInfo.userId ? <span>It's you</span> : <span className={s.followUnFollowButton}>{u.followed
                    ? <button onClick={() => {
                        props.UnFollowUserRequest(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.followUserRequest(u.id)
                    }}>Follow</button>}</span>}
            </div>)}
    </div>
};


export default Users;