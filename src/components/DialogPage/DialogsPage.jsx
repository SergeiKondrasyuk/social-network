import React from 'react'
import s from './DialogPage.module.css'
import DialogList from "./DialogList/DialogsList";
import CurrentDialog from "./CurrentDialog/CurrentDialog";

const DialogPage = (props) => {
    return <div className={s.dialogPage}>

        <DialogList users={props.users}/>

        <CurrentDialog messages={props.messages} users={props.users} avatars={props.avatars}/>

    </div>
}

export default DialogPage;