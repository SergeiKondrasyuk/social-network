import React from 'react';
import s from './Nav.module.css';



const Nav = (props) => {
    return <div className={s.nav}>
        <div className={s.navItem}><a>{props.navItems[0]}</a></div>
        <div className={`${s.navItem} ${s.active}`}><a>{props.navItems[1]}</a></div>
        <div className={s.navItem}><a>{props.navItems[2]}</a></div>
        <div className={s.navItem}><a>{props.navItems[3]}</a></div>
        <div className={s.navItem}><a>{props.navItems[4]}</a></div>
    </div>
}
export default Nav;