import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import NewPostForm from "./NewPostForm/NewPostForm";
import PropTypes from "prop-types";


const Posts = (props) => {

    let postsList = props.postData.map( p =>
        <Post post={p.text} ava={props.user.avatar} likes={p.likeCount}/>
    );

    return <div className={s.posts}>

        <div className={s.postsHeader}>My posts</div>

        <NewPostForm posts={props.postData} addPost={props.addPost} updateNewPost={props.updateNewPost}/>

        {postsList}

    </div>


}

export default Posts;

Posts.propTypes = {
    postData: PropTypes.array,
    text: PropTypes.string,
    avatar: PropTypes.string,
    likeCount: PropTypes.number,
}