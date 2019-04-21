import React from 'react';
import {connect} from "react-redux";
import Nav from "./Nav";

const NavConnected = (props) => {
    return <Nav nav = {props.nav}/>

};

const mstp = (store) => {
    return {
        nav: store.nav,
        users: store.users.users,
    }
};

const NavContainer = connect(mstp)(NavConnected);

export default NavContainer;