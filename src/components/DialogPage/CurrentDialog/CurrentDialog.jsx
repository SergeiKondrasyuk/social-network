import React from 'react'
import s from './CurrentDialog.module.css'
import Field from 'redux-form/es/Field';
import {reduxForm} from 'redux-form';
import MessageContainer from './Message/MessageContainer';
import {Textarea} from '../../common/FormsControl';
import {requiredFieldValidator} from '../../../utils/validators';

const CurrentDialog = (props) => {


    let currentDialogMessages = props.dialogPage.messages.map(p =>
        <MessageContainer message={p.body} user={p.senderName} id={p.id}
                 avatar={props.auth.userData.id !== p.senderId ? props.currentUserAvatar : props.myAvatar}
                 viewed={p.viewed} addedTime={p.addedAt} senderId={p.senderId}/>
    );

    let sendMessage = (values) => {
        props.sendMessageToUser(props.selectedDialogId, values.newMessageTextArea);
    };


    return <div className={s.currentDialog}>
        {!!props.selectedDialogId ?
            <>
                {currentDialogMessages}
                {props.dialogPage.messages.length < props.currentDialogMessagesCount && <button>Show previous</button>}
                <AddMessageFormRedux onSubmit={sendMessage} props={props}/>
            </>
            : <div>Please select dialog</div>}
    </div>
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageTextArea' placeholder='Enter you message...'
                       className={s.newMessageTextArea}  validate={[requiredFieldValidator]}
                />
            </div>
            <div className={s.sendButton}>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default CurrentDialog;