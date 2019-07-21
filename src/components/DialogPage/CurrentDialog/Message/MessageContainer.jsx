import React from 'react'
import {connect} from 'react-redux';
import {deleteMessageWithUser} from '../../../../redux/dialogPageReducer';
import Message from './Message';


const MessageContainer = (props) => {

    return <Message
        avatar={props.avatar}
        user={props.user}
        message={props.message}
        viewed={props.viewed}
        addedTime={props.addedTime}
        id={props.id}
        deleteMessageWithUser={props.deleteMessageWithUser}
    />

};

const mapStateToProps = (state) => {
    return {
        state: state
    }
};


export default connect(mapStateToProps, {
    deleteMessageWithUser
})(MessageContainer);

