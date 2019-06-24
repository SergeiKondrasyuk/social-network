import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import NewPostFormContainer from "./NewPostForm/NewPostFormContainer";

const Posts = (props: any) => {

    let postsList = props.postData.map((p: any) =>
        <Post post={p.text}
              ava={props.profileInfo.photos.small == null ? '../../../img/anonymous-user.png' : props.profileInfo.photos.small}
              likes={p.likeCount}/>
    );
    return <div className={s.posts}>

        <div className={s.postsHeader}>My posts</div>

        <NewPostFormContainer/>

        {postsList}

    </div>


}

export default Posts;