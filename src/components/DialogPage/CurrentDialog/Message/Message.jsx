import React from 'react'
import s from './Message.module.css'
import PropTypes from 'prop-types';


const Message = (props) => {
  const type = props.type==='incoming'? s.incoming: 'outcoming';
    return <div className={s.message}>
        <img className={s.dialogAva} src={props.avatar}/>

        <p className={s.userName}>{props.user}</p>
        <div className={s.messageBlock}>
            <div className={s.angle}></div>
            <div className={s.messageText}>
                <div className={type}>{props.message}</div>
                <div className={s.addedTime}>{props.addedTime}</div>
            </div>
        </div>
    </div>
}

export default Message;


Message.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.string,
    message: PropTypes.string,
}