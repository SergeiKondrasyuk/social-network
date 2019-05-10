import React from 'react';
import anonymousUser from "../../img/anonymous-user.png"
import s from './User.module.css'

const Users = (props) => {

        props.getUsers(props.users.status);

    return <div>
        {props.users.users.map(u =>

            <div>
                <img className={s.userPhoto} src={u.photos.small == null ? anonymousUser : u.photos.small}/>
                <span>{u.name}</span>
                {u.followed
                    ? <button onClick={() => {
                        props.unFollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
            </div>)}
    </div>
};


export default Users;