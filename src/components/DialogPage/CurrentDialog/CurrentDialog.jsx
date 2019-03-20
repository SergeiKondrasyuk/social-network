import React from 'react'
import s from './CurrentDialog.module.css'
import Message from "./Message/Message";

const CurrentDialog = (props) => {
    debugger
    return <div className={s.currentDialog}>

        <Message message={props.messages[0]} user={props.users[1].firstName} ava={props.users[1].avatar}/>
        <Message message={props.messages[1]} user={props.users[0].firstName} ava={props.users[0].avatar}/>
        <Message message={props.messages[2]} user={props.users[1].firstName} ava={props.users[1].avatar}/>

    </div>
}

export default CurrentDialog;