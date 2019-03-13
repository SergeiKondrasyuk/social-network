import React from 'react';
import s from'./Posts.module.css';
import Post from "./Post/Post";


const Posts = () => {
    return  <div className={s.posts}>
            <div className={s.myPosts}>My posts</div>
            <div className={s.newPostForm}>
                <div className={s.newPost}>New post</div>
                <div><textarea placeholder='Enter you post...' className={s.newPostTextArea}></textarea></div>
                <div className={s.sendButton}>
                    <button>Send</button>
                </div>
            </div>

            <Post/>
            <Post/>

        </div>


}

export default Posts;