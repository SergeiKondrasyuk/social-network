import React, {useEffect} from 'react'
import s from './DialogList.module.css'
import DialogUser from "./DialogUser/DialogsUser";
import {sendMessageToUser} from '../../../redux/dialogPageReducer';

const DialogList = (props) => {

    let usersList = props.dialogs.map(d =>
        <DialogUser dialog={d.userName} id={d.id} avatar={d.photos.small} newMessagesCount={d.newMessagesCount}/>
    );
    return <div className={s.dialogsList}>

        <div className={s.dialogsTitle}>Dialogs</div>

        <div className={s.dialogUsers}>
            {usersList}
        </div>
    </div>
};

export default DialogList;
