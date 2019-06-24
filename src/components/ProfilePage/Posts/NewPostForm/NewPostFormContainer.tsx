import * as React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profilePageReducer";
import NewPostForm from "./NewPostForm";
import {connect} from "react-redux";

const NewPostFormConnected = (props: any) => {
    return <NewPostForm updateNewPostText={props.updateNewPostText}
                        addPost={props.addPost}
                        profilePage={props.profilePage}/>
};

const mapStateToProps = (state: any) => {
    return {
        profilePage: state.profilePage
    }
};


const NewPostFormContainer = connect(mapStateToProps, {
    updateNewPostText: updateNewPostTextAC,
    addPost: addPostAC
})(NewPostFormConnected);

export default NewPostFormContainer;