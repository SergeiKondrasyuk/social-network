import React, {Component, useEffect} from 'react';
import logo from "../../img/logo.png";
import s from './Header.module.css';
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";


class Header extends Component {

    componentDidMount() {
        this.props.meRequest();
    }

    render() {

        return <header className={s.header}>
            <img alt='Logo' className={s.logo} src={logo}/>
            {this.props.isAuth
                ? <button className={s.button} id='logOutButton' onClick={this.props.logoutRequest}>Log out</button>
                : <NavLink to='/login'>
                    <button className={s.button} id='logInButton'>Log in</button>
                </NavLink>
            }
        </header>
    }
}

export default Header;

Header.propTypes = {
    logo: PropTypes.string,
};