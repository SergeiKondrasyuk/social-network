import React from 'react'
import s from './CurrentDialog.module.css'
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import Post from "../../ProfilePage/Posts/Posts";

const CurrentDialog = (props) => {
    let currentDialogMessages = props.dialogPage.dialogs[0].messages.map(p =>
        <Message message={p.content} user={p.author.name} avatar={p.author.avatar} addedTime={p.addedTime}
                 type={p.type}/>
    );

    let newMessageText = React.createRef();

    let onSendMessageButtonClick = () => {
        props.dispatcher(
            {type: 'SEND_MESSAGE'}
        )
    }

    let onMessageChange = () => {
        let newMessage = newMessageText.current.value;
        props.dispatcher(
            {
                type: 'UPDATE_NEW_MESSAGE',
                text: newMessage
            }
        )
    }

    return <div className={s.currentDialog}>
        {currentDialogMessages}
        <div>
                <textarea onChange={onMessageChange} placeholder='Enter you message...'
                          className={s.newMessageTextArea} ref={newMessageText}
                          value={props.dialogPage.dialogs[0].newMessage}/>
        </div>
        <div className={s.sendButton}>
            <button onClick={onSendMessageButtonClick}>Send</button>
        </div>
    </div>


}

export default CurrentDialog;

CurrentDialog.propTypes = {
    users: PropTypes.array,
    messages: PropTypes.array,
}