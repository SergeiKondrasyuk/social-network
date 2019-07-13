import React from 'react'
import s from './CurrentDialog.module.css'
import Message from "./Message/Message";

const CurrentDialog = (props) => {



    let currentDialogMessages = props.dialogPage.messages.map(p =>
        <Message message={p.body} user={p.senderName} /*avatar={p.author.avatar} addedTime={p.addedTime}
                 type={p.type}*//>
    );

    let newMessageTextRef = React.createRef();

    let onSendMessageButtonClick = () => {
        props.sendMessageToUser(props.selectedDialogId, newMessageTextRef.current.value);
    };


    return <div className={s.currentDialog}>
        {!!props.selectedDialogId ?
            <>
                {currentDialogMessages}
                <div>
                <textarea placeholder='Enter you message...'
                          className={s.newMessageTextArea} ref={newMessageTextRef}
                          value={null}/>
                </div>
                <div className={s.sendButton}>
                    <button onClick={onSendMessageButtonClick}>Send</button>
                </div>
            </>
            : <div>Please select dialog</div>}
    </div>


};

export default CurrentDialog;