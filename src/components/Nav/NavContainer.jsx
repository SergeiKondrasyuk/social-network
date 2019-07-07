import React from 'react';
import {connect} from "react-redux";
import Nav from "./Nav";

const NavConnected = (props) => {
    return <Nav auth = {props.auth}/>

};

const mstp = (store) => {
    return {
        auth: store.auth,
        users: store.users.users,
    }
};

const NavContainer = connect(mstp)(NavConnected);

export default NavContainer;