import React from 'react';
import s from './NewPostForm.module.css';
import PropTypes from "prop-types";


const NewPostForm = (props) => {
    debugger
    let onAddPostButtonClick = () => {
        props.addPost(enteredPost);

    }

    let enteredPost = '';

    let onPostChange = (e) => {
        enteredPost = e.currentTarget.value;
    }

    return (
        <div className={s.newPostForm}>
            <div className={s.newPost}>New post</div>
            <div>
                <textarea onChange={onPostChange} placeholder='Enter you post...'
                          className={s.newPostTextArea}></textarea>
            </div>
            <div className={s.sendButton}>
                <button onClick={onAddPostButtonClick}>Send</button>
            </div>
        </div>
    )
}

export default NewPostForm;

NewPostForm.propTypes = {}