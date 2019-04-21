import React from 'react';
import s from './ProfileCard.module.css';
import PropTypes from "prop-types";


const ProfileCard = (props) => {

    return <div className={s.profileCard}>

        <div className={s.avatar}> <img alt='User avatar' src={props.user.avatar}/> </div>

        <div className={s.profileInfo}>
            <div className={s.name}><span>{props.user.firstName}</span><span> {props.user.lastName}</span></div>
            <div className={s.address}>City: {props.user.address}</div>
            <div className={s.dob}>Date of Birth: {props.user.dob}</div>
            <div className={s.education}>Education: {props.user.education}</div>
            <div className={s.website}>Website: {props.user.website}</div>
        </div>

    </div>


};

export default ProfileCard;

ProfileCard.propTypes = {
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    address: PropTypes.string,
    dob: PropTypes.string,
    education: PropTypes.string,
    website: PropTypes.string,
};