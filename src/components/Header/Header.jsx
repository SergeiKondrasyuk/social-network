import React from 'react';
import logo from "../../img/logo.png";
import s from './Header.module.css';
import PropTypes from "prop-types";
import * as axios from "axios";


const Header = () => {

    let axiosInstance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
    });

    let onLogOutButtonClick = () => {
        axiosInstance.post('auth/logout')
    };


    return <header className={s.header}>
        <img alt='Logo' className={s.logo} src={logo}/>
        <button className={s.button} id='logOutButton' onClick={onLogOutButtonClick}>Log out</button>
    </header>
};

export default Header;

Header.propTypes = {
    logo: PropTypes.string,
};