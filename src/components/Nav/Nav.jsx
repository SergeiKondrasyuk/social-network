import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const Nav = (props) => {

    let navItems = props.nav.navItems.map(n =>
        <div className={s.navItem}>
            <NavLink to={n.link} activeClassName={s.active}><img alt='Navigate item icon'className={s.icon} src={n.icon}/>{n.title}</NavLink>
        </div>
    );

    return <div className={s.nav}>

        {navItems}

    </div>
};

export default Nav;

Nav.prototype = {
    navItems: PropTypes.array,
    link: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
};