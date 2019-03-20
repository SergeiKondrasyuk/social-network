import React from 'react';
import s from './ProfileCard.module.css';


const ProfileCard = (props) => {
    return <div className={s.profileCard}>

        <div className={s.avatar}> <img src={props.user.avatar}/> </div>

        <div className={s.profileInfo}>
            <div className={s.name}><span>{props.user.firstName}</span><span> {props.user.lastName}</span></div>
            <div className={s.address}>City: {props.user.address}</div>
            <div className={s.dob}>Date of Birth: {props.user.dob}</div>
            <div className={s.education}>Education: {props.user.education}</div>
            <div className={s.skype}>Skype: {props.user.skype}</div>
        </div>

    </div>


}

export default ProfileCard;