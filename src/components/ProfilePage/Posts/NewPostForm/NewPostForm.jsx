import React from 'react';
import s from './NewPostForm.module.css';
import PropTypes from "prop-types";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profilePageReducer";



const NewPostForm = (props) => {
    debugger
    let newPostText = React.createRef();

    let onAddPostButtonClick = () => {
        props.dispatch(addPostAC());
    };

    let onPostChange = () => {
        let newPost = newPostText.current.value;
        props.dispatch(updateNewPostTextAC(newPost));
    };

    return (
        <div className={s.newPostForm}>
            <div className={s.newPost}>New post</div>
            <div>
                <textarea onChange={onPostChange} placeholder='Enter you post...'
                          className={s.newPostTextArea} ref={newPostText} value={props.profilePage.newPost}/>
            </div>
            <div className={s.sendButton}>
                <button onClick={onAddPostButtonClick}>Send</button>
            </div>
        </div>
    )
}

export default NewPostForm;

NewPostForm.propTypes = {};