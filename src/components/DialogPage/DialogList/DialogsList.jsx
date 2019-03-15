import React from 'react'
import s from './DialogList.module.css'

const DialogList = (props) => {
    return <div className={s.dialogsList}>
        <div className={s.dialogsTitle}>Dialogs</div>
        <ul className={s.dialogUsers}>
            <li>{props.users[1]}</li>
            <li className={s.active}>{props.users[2]}</li>
            <li>{props.users[3]}</li>
            <li>{props.users[4]}</li>
            <li>{props.users[5]}</li>
            <li>{props.users[6]}</li>
            <li>{props.users[7]}</li>
            <li>{props.users[8]}</li>
            <li>{props.users[9]}</li>
        </ul>
    </div>
}

export default  DialogList;