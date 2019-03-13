import React from 'react';
import topimage from "../../img/topimage.jpg";
import s from'./ProfilePage.module.css';
import ProfileCard from "./ProfileCard/ProfileCard";
import Posts from "./Posts/Posts";


const ProfilePage = () => {
    return <div className={s.profile}>

        <div className={s.topImage}><img src={topimage}/></div>

        <ProfileCard/>

        <Posts/>
    </div>


}

export default ProfilePage;