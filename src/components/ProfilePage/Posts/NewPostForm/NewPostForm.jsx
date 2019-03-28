import React from 'react';
import s from './NewPostForm.module.css';
import PropTypes from "prop-types";


const NewPostForm = (props) => {
    debugger

    let newPostText = React.createRef();

    let onAddPostButtonClick = () => {
        props.addPost();
        newPostText.current.value = '';
    }

    let onPostChange = (e) => {
        let newPostText = e.target.value;
        props.updateNewPost(newPostText);
    }

    return (
        <div className={s.newPostForm}>
            <div className={s.newPost}>New post</div>
            <div>
                <textarea onChange={onPostChange} placeholder='Enter you post...'
                          className={s.newPostTextArea} ref={newPostText}></textarea>
            </div>
            <div className={s.sendButton}>
                <button onClick={onAddPostButtonClick}>Send</button>
            </div>
        </div>
    )
}

export default NewPostForm;

NewPostForm.propTypes = {}