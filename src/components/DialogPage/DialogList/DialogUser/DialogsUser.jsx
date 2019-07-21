import React from 'react'
import s from './DialogUser.module.css'
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {

    const newMessageCountElement = (props) => {
        switch (true) {
            case (props.newMessagesCount > 99) : {
                return (<span style={{fontSize: '10px'}} className={s.newMessageCount}>99+</span>)
            }
            case (props.newMessagesCount > 9) : {
                debugger
                return (<span style={{fontSize: '15px'}} className={s.newMessageCount}>{props.newMessagesCount}</span>)
            }
            case (props.newMessagesCount > 0) : {
                return (<span style={{fontSize: '18px'}} className={s.newMessageCount}>{props.newMessagesCount}</span>)
            }
            default:
                return null;
        }
    };

    return <div className={s.userName}>
        <img className={s.avatar} src={props.avatar}/>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.dialog}</NavLink>

        {!!props.newMessagesCount &&
        <><img src='../../../img/icon-new-message.png' className={s.newMessageIcon}/>
            {newMessageCountElement(props)}
            </>
        }
    </div>
}

export default DialogUser;

