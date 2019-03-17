import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return <div className={s.nav}>

        <div className={s.navItem}>
            <NavLink to='/profile' activeClassName={s.active}><img className={s.icon} src={props.icons.profile}/>{props.navItems[0]}</NavLink>
        </div>

        <div className={s.navItem}>
            <NavLink to='/dialogs' activeClassName={s.active}><img className={s.icon} src={props.icons.messages}/>{props.navItems[1]}</NavLink>
        </div>

        <div className={s.navItem}>
            <NavLink to='/music' activeClassName={s.active}><img className={s.icon} src={props.icons.music}/>{props.navItems[2]}</NavLink>
        </div>

        <div className={s.navItem}>
            <NavLink to='/news' activeClassName={s.active}><img className={s.icon} src={props.icons.news}/>{props.navItems[3]}</NavLink>
        </div>

        <div className={s.navItem}>
            <NavLink to='/settings' activeClassName={s.active}><img className={s.icon} src={props.icons.settings}/>{props.navItems[4]}</NavLink>
        </div>
    </div>
}
export default Nav;