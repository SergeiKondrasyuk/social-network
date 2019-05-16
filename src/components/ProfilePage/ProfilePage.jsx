import React, {useEffect} from 'react';
import topimage from "../../img/topimage.jpg";
import s from './ProfilePage.module.css';
import PropTypes from "prop-types";
import PostsContainer from "./Posts/PostsContainer";
import ProfileCardContainer from "./ProfileCard/ProfileCardContainer";
import {redirectToLogin} from "../../hocs/redirectToLogin";
import {withRouter} from "react-router-dom";

const ProfilePage = () => {


    return <div className={s.profile}>

        <div className={s.topImage}><img alt='Top_Image' src={topimage}/></div>

        <ProfileCardContainer/>

        <PostsContainer/>

    </div>
};

//export default (ProfilePage);
export default redirectToLogin(ProfilePage);

ProfilePage.propTypes = {
    topimage: PropTypes.string,
    users: PropTypes.array,
    postData: PropTypes.array,
};