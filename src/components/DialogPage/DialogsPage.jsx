import React from 'react'
import s from './DialogPage.module.css'
import PropTypes from "prop-types";
import CurrentDialogContainer from "./CurrentDialog/CurrentDialogContainer";
import DialogListContainer from "./DialogList/DialogsListContainer";

const DialogPage = () => {

    return <div className={s.dialogPage}>

        <DialogListContainer/>

        <CurrentDialogContainer/>

    </div>
};

export default DialogPage;

DialogPage.propTypes = {
    users: PropTypes.array,
    message: PropTypes.array,
    dialogUsers: PropTypes.array,
};