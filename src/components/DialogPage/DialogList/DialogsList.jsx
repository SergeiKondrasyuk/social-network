import React from 'react'
import s from './DialogList.module.css'
import DialogUser from "./DialogUser/DialogsUser";
import PropTypes from 'prop-types';

const DialogList = (props) => {

    let usersList = props.users.map(d =>
        <DialogUser user={d}/>
    );
    return <div className={s.dialogsList}>

        <div className={s.dialogsTitle}>Dialogs</div>

        <div className={s.dialogUsers}>
            {usersList}
        </div>
    </div>
}

export default DialogList;

DialogList.propTypes = {
    users: PropTypes.array,
}