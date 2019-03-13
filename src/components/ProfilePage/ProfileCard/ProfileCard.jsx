import React from 'react';
import ava from "../../../img/ava.png";
import s from './ProfileCard.module.css';


const ProfileCard = () => {
    return <div className={s.profileCard}>

        <div className={s.avatar}><img src={ava} className={s.topImage}/></div>

        <div className={s.profileInfo}>
            <div className={s.name}>Sergei K.</div>
            <br/>
            <div className={s.address}>City: Minsk</div>
            <div className={s.dob}>Date of Birth: 23 october</div>
            <div className={s.education}>Education: BSUIR'13</div>
            <div className={s.skype}>Skype: bender.cdf</div>
        </div>

    </div>


}

export default ProfileCard;