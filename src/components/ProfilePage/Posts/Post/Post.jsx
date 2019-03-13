import React from 'react';
import s from './Post.module.css';


const Post = () => {

    return <div className={s.post}>
            <div className={s.ava}><img src='../../../img/ava.png'/></div>
            <div className={s.postContent}>
                Hello world!
            </div>
        </div>

}

export default Post;