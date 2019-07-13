import React from 'react'
import s from './DialogUser.module.css'
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {

    return <div className={s.login}>
        <NavLink to={'/dialogs/'+ props.id} activeClassName={s.active}>{props.dialog}</NavLink>
    </div>
}

export default DialogUser;

