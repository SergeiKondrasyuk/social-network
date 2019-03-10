import React from 'react';
import s from  './Nav.module.css';



const Nav = () => {
    return <div className={s.nav}>
        <div className={s.navItem}><a>Profile</a></div>
        <div className={`${s.navItem} ${s.active}`}><a>Messages</a></div>
        <div className={s.navItem}><a>Music</a></div>
        <div className={s.navItem}><a>News</a></div>
        <div className={s.navItem}><a>Settings</a></div>
    </div>
}
export default Nav;