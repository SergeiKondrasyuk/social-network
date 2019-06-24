import React from 'react';
import s from './ProfilePage.module.css';
import PostsContainer from "./Posts/PostsContainer";
import ProfileCardContainer from "./ProfileCard/ProfileCardContainer";

const ProfilePage = () => {

    return <div className={s.profile}>

        <div className={s.topImage}><img alt='Top_Image' src="../../img/topimage.jpg"/></div>

        <ProfileCardContainer/>

        <PostsContainer/>

    </div>
};

export default ProfilePage;