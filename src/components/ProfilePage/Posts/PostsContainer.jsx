import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";


const PostsConnected = (props) => {
    return <Posts postData={props.postData}
                  friends={props.friends}/>

};

const mstp = (store) => {
    return {
        postData: store.profilePage.postData,
        friends: store.friends.friends,
    }
};

const PostsContainer = connect(mstp)(PostsConnected);

export default PostsContainer;