import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profilePageReducer";
import NewPostForm from "./NewPostForm";
import {connect} from "react-redux";

const NewPostFormConnected = (props) => {
    return <NewPostForm updateNewPostText={props.updateNewPostText}
                        addPost={props.addPost}
                        profilePage={props.profilePage}/>
};

const mstp = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const mdtp = (dispatch) => {
    return {
        updateNewPostText: (newPost) => {
            dispatch(updateNewPostTextAC(newPost))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
};

const NewPostFormContainer = connect(mstp, mdtp)(NewPostFormConnected);

export default NewPostFormContainer;