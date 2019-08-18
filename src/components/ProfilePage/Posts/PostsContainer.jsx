import React from 'react';
import Posts from './Posts';
import {connect} from 'react-redux';
import {getAuthReducer, getProfilePageReducer} from '../../../redux/selectors';


const PostsConnected = (props) => {

    if (props.profileInfo.userId!=props.auth.userData.id){
        return null
    }

    return <Posts postData={props.postData}
                  friends={props.friends}
                  profileInfo={props.profileInfo}/>
};

const mapDispatchToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        friends: state.friends.friends,
        profileInfo: getProfilePageReducer(state).profileInfo,
        auth: getAuthReducer(state),
    }
};

const PostsContainer = connect(mapDispatchToProps)(PostsConnected);

export default PostsContainer;