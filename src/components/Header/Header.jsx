import React from 'react';
import logo from "../../img/logo.png";
import s from './Header.module.css';
import PropTypes from "prop-types";


const Header = () => {
    return <header className={s.header}>
        <img className={s.logo} src={logo}/>
    </header>
}

export default Header;

Header.propTypes = {
    logo: PropTypes.string,
}