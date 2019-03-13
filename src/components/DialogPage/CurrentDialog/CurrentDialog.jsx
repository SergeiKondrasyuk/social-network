import React from 'react'
import s from './CurrentDialog.module.css'
import Message from "./Message/Message";

const CurrentDialog = (props) => {
    debugger
    return <div className={s.currentDialog}>

        <Message message={props.messages[0]} user={props.users[2]} ava={props.avatars[0]}/>
        <Message message={props.messages[1]} user={props.users[0]} ava={props.avatars[1]}/>
        <Message message={props.messages[2]} user={props.users[2]} ava={props.avatars[0]}/>

    </div>
}

export default CurrentDialog;