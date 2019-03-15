import React from 'react';
import s from './ProfileCard.module.css';


const ProfileCard = (props) => {
    return <div className={s.profileCard}>

        <div className={s.avatar}> <img src={props.ava}/> </div>

        <div className={s.profileInfo}>
            <div className={s.name}>{props.profile.name}</div>
            <br/>
            <div className={s.address}>City: {props.profile.address}</div>
            <div className={s.dob}>Date of Birth: {props.profile.dob}</div>
            <div className={s.education}>Education: {props.profile.education}</div>
            <div className={s.skype}>Skype: {props.profile.skype}</div>
        </div>

    </div>


}

export default ProfileCard;