import React from 'react'
import s from './DialogUser.module.css'
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {

    return <div className={s.userName}>
        <img className={s.avatar} src={props.avatar}/>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.dialog}</NavLink>
        {props.newMessagesCount && <><img src='../../../img/icon-new-message.png'
                                          className={s.newMessageIcon}/><span>{props.newMessagesCount}</span></>}
    </div>
}

export default DialogUser;

