import React from 'react'
import s from './DialogUser.module.css'
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {
    let path = '/dialogs/dialog' + props.id;

    return <div className={s.userName}>
        <NavLink to={path} activeClassName={s.active}>{props.user}</NavLink>
    </div>
}



export default DialogUser;