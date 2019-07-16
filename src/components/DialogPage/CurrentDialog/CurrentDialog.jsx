import React from 'react'
import s from './CurrentDialog.module.css'
import Message from "./Message/Message";
import Field from 'redux-form/es/Field';
import {reduxForm} from 'redux-form';

const CurrentDialog = (props) => {


    let currentDialogMessages = props.dialogPage.messages.map(p =>
        <Message message={p.body} user={p.senderName} avatar={props.auth.userData.id === p.senderId ? null: props.currentUserAvatar} /*addedTime={p.addedTime}
                 type={p.type}*//>
    );

    let sendMessage = (values) => {
        props.sendMessageToUser(props.selectedDialogId, values.newMessageTextArea);
    };


    return <div className={s.currentDialog}>
        {!!props.selectedDialogId ?
            <>
                {currentDialogMessages}
                <AddMessageFormRedux onSubmit={sendMessage}/>
            </>
            : <div>Please select dialog</div>}
    </div>
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageTextArea' placeholder='Enter you message...'
                       className={s.newMessageTextArea}/>
            </div>
            <div className={s.sendButton}>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default CurrentDialog;