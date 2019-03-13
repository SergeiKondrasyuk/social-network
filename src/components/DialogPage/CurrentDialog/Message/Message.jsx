import React from 'react'
import s from './Message.module.css'

import avaSmile from "../../../../img/avaSmile.png";


const Message = (props) => {
debugger

    return  <div className={s.message}>
                <img className={s.dialogAva} src={props.ava}/>
                <p className={s.userName}>{props.user}</p>
                <div className={s.messageBlock}>
                    <div className={s.angle}></div>
                    <div className={s.messageText}>{props.message}

                    </div>
                </div>
            </div>
}

export default Message;