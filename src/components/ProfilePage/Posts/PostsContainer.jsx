import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";


const PostsConnected = (props) => {
    return <Posts postData={props.postData}
                  users={props.users}/>

};

const mstp = (store) => {
    return {
        postData: store.profilePage.postData,
        users: store.users.users,
    }
};

const PostsContainer = connect(mstp)(PostsConnected);

export default PostsContainer;