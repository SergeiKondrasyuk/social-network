import React from 'react'
import s from './DialogPage.module.css'
import DialogList from "./DialogList/DialogsList";
import CurrentDialog from "./CurrentDialog/CurrentDialog";

const DialogPage = (props) => {
    return <div className={s.dialogPage}>

        <DialogList dialogUsers={props.dialogUsers}/>

        <CurrentDialog messages={props.messages} users={props.users} dialogUsers={props.dialogUsers}/>

    </div>
}

export default DialogPage;