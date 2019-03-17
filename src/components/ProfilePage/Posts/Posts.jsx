import React from 'react';
import s from'./Posts.module.css';
import Post from "./Post/Post";
import NewPostForm from "./NewPostForm/NewPostForm";


const Posts = (props) => {
    return  <div className={s.posts}>

            <div className={s.postsHeader}>My posts</div>

            <NewPostForm/>

            <Post post={props.postData[0].text} ava={props.avatars[1]} likes={props.postData[0].likeCount}/>
            <Post post={props.postData[1].text} ava={props.avatars[1]} likes={props.postData[1].likeCount}/>

        </div>


}

export default Posts;