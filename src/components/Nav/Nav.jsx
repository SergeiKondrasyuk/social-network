import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const Nav = (props) => {

    let userId = props.auth.userInfo.userId;

    return <div className={s.nav}>
        <div className={s.navItemElement}>
            <NavLink to={'/profile/' + userId} activeClassName={s.active}><img alt='Navigate item icon'className={s.icon} src='../../../img/icon-profile.png'/>Profile</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/dialogs' activeClassName={s.active}><img alt='Navigate item icon'className={s.icon} src='../../../img/icon-messages.png'/>Messages</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/users' activeClassName={s.active}><img alt='Navigate item icon'className={s.icon} src='../../../img/icon-users.png'/>Users</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/music' activeClassName={s.active}><img alt='Navigate item icon'className={s.icon} src='../../../img/icon-music.png'/>Music</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/news' activeClassName={s.active}><img alt='Navigate item icon'className={s.icon} src='../../../img/icon-news.png'/>News</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/settings' activeClassName={s.active}><img alt='Navigate item icon'className={s.icon} src='../../../img/icon-settings.png'/>Settings</NavLink>
        </div>
    </div>
};

export default Nav;

Nav.prototype = {
    navItems: PropTypes.array,
    link: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
};