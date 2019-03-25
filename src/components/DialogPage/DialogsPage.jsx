import React from 'react'
import s from './DialogPage.module.css'
import DialogList from "./DialogList/DialogsList";
import CurrentDialog from "./CurrentDialog/CurrentDialog";
import PropTypes from "prop-types";

const DialogPage = (props) => {
    return <div className={s.dialogPage}>

        <DialogList users={props.users}/>

        <CurrentDialog messages={props.messages} users={props.users} dialogUsers={props.dialogUsers}/>

    </div>
}

export default DialogPage;

DialogPage.propTypes = {
    users: PropTypes.array,
    message: PropTypes.array,
    dialogUsers: PropTypes.array,
}