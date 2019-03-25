import React from 'react'
import s from './CurrentDialog.module.css'
import Message from "./Message/Message";
import PropTypes from 'prop-types';

const CurrentDialog = (props) => {

    return <div className={s.currentDialog}>

        <Message message={props.messages[0]} user={props.users[1].firstName} avatar={props.users[1].avatar}/>
        <Message message={props.messages[1]} user={props.users[0].firstName} avatar={props.users[0].avatar}/>
        <Message message={props.messages[2]} user={props.users[1].firstName} avatar={props.users[1].avatar}/>
        <Message message={props.messages[3]} user={props.users[0].firstName} avatar={props.users[0].avatar}/>

    </div>
}

export default CurrentDialog;

CurrentDialog.propTypes = {
    users: PropTypes.array,
    messages: PropTypes.array,
}