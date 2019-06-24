import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

function Header(props: any) {

    return <header className={s.header}>
        <img alt='Logo' className={s.logo} src='../../img/logo.png'/>
        {props.isAuth
            ? <button className={s.button} id='logOutButton' onClick={props.logOutAttempt}>Log out</button>
            : <NavLink to='/login'>
                <button className={s.button} id='logInButton'>Log in</button>
            </NavLink>
        }
    </header>
}

export default Header;