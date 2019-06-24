import * as React from 'react'
import s from './Message.module.css'


const Message = (props: any) => {
    return <div style={props.type === 'incoming' ? {alignSelf: 'flex-end'} : {}} className={s.message}>
        <img alt='User avatar' className={s.dialogAva} src={props.avatar}/>

        <p className={s.login}>{props.user}</p>
        <div className={s.messageBlock}>
            <div className={s.angle}></div>
            <div className={s.messageText}>
                <div>{props.message}</div>
                <div className={s.addedTime}>{props.addedTime}</div>
            </div>
        </div>
    </div>
};

export default Message;