import React from 'react';
import logo from "../../img/logo.png";
import s from './Header.module.css';
import PropTypes from "prop-types";
import * as axios from "axios";
import {loginStatuses} from "../../redux/loginReducer";


const Header = (props) => {

    let axiosInstance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
    });

    let onLogOutButtonClick = () => {
        axiosInstance.post('auth/logout')
        props.setLoginStatus(loginStatuses.NOT_INITIALIZED);
        props.setLoginStatusMessage('Logout success');
        debugger
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