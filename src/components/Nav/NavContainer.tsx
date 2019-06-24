import * as React from 'react';
import {connect} from "react-redux";
import Nav from "./Nav";

const NavContainer = (props: any) => {
    return <Nav auth = {props.auth}/>

};

const mapStateToProps = (store: any) => {
    return {
        auth: store.auth,
        users: store.users.users,
    }
};

export default connect(mapStateToProps)(NavContainer);;