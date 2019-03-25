import React from 'react'
import s from './DialogUser.module.css'
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";


const DialogUser = (props) => {

    return <div className={s.userName}>
        <NavLink to={'/dialogs/'+ props.user} activeClassName={s.active}>{props.user}</NavLink>
    </div>
}

export default DialogUser;

DialogUser.propTypes = {
    user: PropTypes.string,
}

