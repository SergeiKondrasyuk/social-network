import React from 'react';
import logo from "../../img/logo.png";
import s from './Header.module.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

function Header(props) {

    return <header className={s.header}>
        <img alt='Logo' className={s.logo} src={logo}/>
        {!!props.newMessagesCount &&
        <span className={s.newMessagesNotification}>New messages: {props.newMessagesCount}</span>}
        {props.isAuth
            ? <button className={s.button} id='logOutButton' onClick={props.logOutAttempt}>Log out</button>
            : <NavLink to='/login'>
                <button className={s.button} id='logInButton'>Log in</button>
            </NavLink>
        }
    </header>
}

export default Header;

Header.propTypes = {
    logo: PropTypes.string,
};