import React from 'react'
import s from './DialogList.module.css'
import DialogUser from "./DialogUser/DialogsUser";


const DialogList = (props) => {
    return <div className={s.dialogsList}>
        <div className={s.dialogsTitle}>Dialogs</div>

        <div className={s.dialogUsers}>
            <DialogUser user={props.users[1]} id={1}/>
            <DialogUser user={props.users[2]} id={2}/>
            <DialogUser user={props.users[3]} id={3}/>
            <DialogUser user={props.users[4]} id={4}/>


        </div>
    </div>
}

export default DialogList;