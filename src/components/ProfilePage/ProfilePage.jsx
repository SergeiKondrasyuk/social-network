import React from 'react';
import topimage from "../../img/topimage.jpg";
import s from'./ProfilePage.module.css';
import ProfileCard from "./ProfileCard/ProfileCard";
import Posts from "./Posts/Posts";


const ProfilePage = (props) => {
    return <div className={s.profile}>

        <div className={s.topImage}><img src={topimage}/></div>

        <ProfileCard  profile={props.profile} ava={props.avatars[1]}/>

        <Posts avatars={props.avatars} postData={props.postData}/>
    </div>


}

export default ProfilePage;