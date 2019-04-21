import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

    return <div className={s.post}>
            <div className={s.ava}><img alt='User avatar' src={props.ava}/></div>
            <div className={s.postContent}>
                {props.post}<span className={s.like}>💚{props.likes}</span>
                    </div>
        </div>

};

export default Post;