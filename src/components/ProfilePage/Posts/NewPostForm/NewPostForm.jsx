import React from 'react';
import s from './NewPostForm.module.css';
import PropTypes from "prop-types";


const NewPostForm = () => {

    return <div className={s.newPostForm}>
            <div className={s.newPost}>New post</div>
            <div><textarea placeholder='Enter you post...' className={s.newPostTextArea}></textarea></div>
            <div className={s.sendButton}>
                <button>Send</button>
            </div>
    </div>

}

export default NewPostForm;

NewPostForm.propTypes = {

}