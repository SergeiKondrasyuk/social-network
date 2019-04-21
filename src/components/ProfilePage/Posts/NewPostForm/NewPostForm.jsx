import React from 'react';
import s from './NewPostForm.module.css';
import PropTypes from "prop-types";

const NewPostForm = (props) => {

    let newPostText = React.createRef();

    let onAddPostButtonClick = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let newPost = newPostText.current.value;
        props.updateNewPostText(newPost);
    };

    return (
        <div className={s.newPostForm}>
            <div className={s.newPost}>New post</div>
            <div>
                <textarea onChange={onPostChange} placeholder='Enter you post...'
                          className={s.newPostTextArea} ref={newPostText} value={props.newPost}/>
            </div>
            <div className={s.sendButton}>
                <button onClick={onAddPostButtonClick}>Send</button>
            </div>
        </div>
    )
}

export default NewPostForm;

NewPostForm.propTypes = {
    newPost: PropTypes.string,
    addPost: PropTypes.func,
    updateNewPostText: PropTypes.func,
};