import React from 'react'
import s from './Message.module.css'


const Message = (props) => {
    debugger
    return <div style={props.type === 'incoming' ? {alignSelf: 'flex-end'} : {}} className={s.message}>
        <img alt='User avatar' className={s.dialogAva} src={props.avatar}/>
        <p className={s.userName}>{props.user}</p>
        <div className={s.messageBlock}>
            <div className={s.angle}></div>
            <div className={s.messageText}>{props.message}</div>
            {props.viewed ? <div className={s.viewed}>👁</div> :
                <div className={s.viewed} style={{opacity: '.4'}}>👁</div>}
            <div className={s.addedTime}>{props.addedTime.replace('T', ' ').slice(0, 16)}</div>
            <button className={s.deleteButton} onClick={() => {
                props.deleteMessageWithUser(props.id)
            }}>Delete
            </button>
            <button className={s.spamButton}>Spam</button>
        </div>

    </div>
};


export default Message;
