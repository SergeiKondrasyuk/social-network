import React from 'react';
import topImage from "../../img/topimage.jpg";
import s from './ProfilePage.module.css';
import PropTypes from "prop-types";
import PostsContainer from "./Posts/PostsContainer";
import ProfileCardContainer from "./ProfileCard/ProfileCardContainer";
import {redirectToLogin} from "../../hocs/redirectToLogin";

const ProfilePage = () => {

    return <div className={s.profile}>

        <div className={s.topImage}><img alt='Top_Image' src={topImage}/></div>

        <ProfileCardContainer/>

        <PostsContainer/>

    </div>
};

export default (ProfilePage);
//export default redirectToLogin(ProfilePage);

ProfilePage.propTypes = {
    topImage: PropTypes.string,
    users: PropTypes.array,
    postData: PropTypes.array,
};