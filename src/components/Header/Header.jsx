import React from 'react';
import logo from "../../img/logo.png";
import s from './Header.module.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

function Header(props) {

    return <header className={s.header}>
        <img alt='Logo' className={s.logo} src={logo}/>
        <div className={s.headerNotifications}>{!!props.newMessagesCount &&
        <div className={s.newMessagesNotification}>
            <NavLink className={s.notificationLink} to='/dialogs'>
                <Badge badgeContent={props.newMessagesCount} color="error">
                    <MailIcon color="secondary"/>
                </Badge>
            </NavLink>
        </div>}
            <div className={s.authButton}>{props.isAuth
                ? <Button color="secondary" variant="contained" className={s.button} id='logOutButton'
                          onClick={props.logOutAttempt}>Log out</Button>
                : <NavLink to='/login'>
                    <Button color="secondary" variant="contained" className={s.button} id='logInButton'>Log in</Button>
                </NavLink>
            }</div>
        </div>
    </header>
}

export default Header;

Header.propTypes = {
    logo: PropTypes.string,
};