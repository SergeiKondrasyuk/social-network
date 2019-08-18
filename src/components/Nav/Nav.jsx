import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import ProfileIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/QuestionAnswer';
import MusicIcon from '@material-ui/icons/MusicNote';
import UsersIcon from '@material-ui/icons/SupervisorAccount';
import NewsIcon from '@material-ui/icons/RssFeed';
import SettingsIcon from '@material-ui/icons/Settings';

const Nav = () => {

    return <div className={s.nav}>
        <div className={s.navItemElement}>
            <NavLink exact to='/profile' activeClassName={s.active}>
                <ProfileIcon className={s.icon}/>Profile</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/dialogs' activeClassName={s.active}>
                <MessageIcon className={s.icon}/>Messages</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/users' activeClassName={s.active}>
                <UsersIcon className={s.icon}/>Users</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/music' activeClassName={s.active}>
                <MusicIcon className={s.icon}/>
                Music</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/news' activeClassName={s.active}>
                <NewsIcon className={s.icon}/>News</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/settings' activeClassName={s.active}>
                <SettingsIcon className={s.icon}/>Settings</NavLink>
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