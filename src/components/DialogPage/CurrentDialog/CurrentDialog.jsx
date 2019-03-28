import React from 'react'
import s from './CurrentDialog.module.css'
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import Post from "../../ProfilePage/Posts/Posts";

const CurrentDialog = (props) => {
    debugger
    let currentDialogMessages = props.dialogPage.dialogs[0].messages.map(p =>
        <Message message={p.content} user={p.author.name} avatar={p.author.avatar} addedTime={p.addedTime}/>
    );

    let newMessageText = React.createRef();

    let onSendMessageButtonClick = () => {
        debugger
        props.sendMessage();
        newMessageText.current.value = '';
    }

    let onMessageChange = (e) => {
        let newMessageText = e.target.value;
        props.updateNewMessage(newMessageText);
    }

    return <div className={s.currentDialog}>
        {currentDialogMessages}
        <div>
                <textarea onChange={onMessageChange} placeholder='Enter you message...'
                          className={s.newMessageTextArea} ref={newMessageText}></textarea>
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