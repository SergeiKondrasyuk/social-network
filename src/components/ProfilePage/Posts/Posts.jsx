import React from 'react';
import s from'./Posts.module.css';
import Post from "./Post/Post";
import NewPostForm from "./NewPostForm/NewPostForm";


const Posts = (props) => {
    return  <div className={s.posts}>

            <div className={s.postsHeader}>My posts</div>

            <NewPostForm/>

            <Post post={props.posts[0]} ava={props.avatars[1]} likes={props.postsLikes[0]}/>
            <Post post={props.posts[1]} ava={props.avatars[1]} likes={props.postsLikes[1]}/>

        </div>


}

export default Posts;