import React from "react";
import {Redirect} from "react-router-dom";

export let redirectToLogin = (WrapperdComponent) => {

    let otherComponent = (props) => {

        if (props.login.loginStatus !== 'SUCCESS') {
            return <Redirect to={{
                pathname: '/login',
                state: {page: '/profile'}
            }}/>
        }

        return <div>
            <WrapperdComponent {...props}/>
        </div>
    };

    return otherComponent;
};