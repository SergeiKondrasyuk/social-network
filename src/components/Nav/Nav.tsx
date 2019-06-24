import * as React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {

    return <div className={s.nav}>
        <div className={s.navItemElement}>
            <NavLink exact to='/profile' activeClassName={s.active}><img alt='Navigate item icon' className={s.icon}
                                                                   src='../../../img/icon-profile.png'/>Profile</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/dialogs' activeClassName={s.active}><img alt='Navigate item icon' className={s.icon}
                                                                   src='../../../img/icon-messages.png'/>Messages</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/users' activeClassName={s.active}><img alt='Navigate item icon' className={s.icon}
                                                                 src='../../../img/icon-users.png'/>Users</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/music' activeClassName={s.active}><img alt='Navigate item icon' className={s.icon}
                                                                 src='../../../img/icon-music.png'/>Music</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/news' activeClassName={s.active}><img alt='Navigate item icon' className={s.icon}
                                                                src='../../../img/icon-news.png'/>News</NavLink>
        </div>
        <div className={s.navItemElement}>
            <NavLink to='/settings' activeClassName={s.active}><img alt='Navigate item icon' className={s.icon}
                                                                    src='../../../img/icon-settings.png'/>Settings</NavLink>
        </div>
    </div>
};

export default Nav;