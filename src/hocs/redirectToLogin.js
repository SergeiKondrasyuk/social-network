import React from "react";
import {Redirect} from "react-router-dom";

export let redirectToLogin = (WrappedComponent) => {

    let redirectComponent = (props) => {

        if (!props.auth.isAuth) {
            debugger
            return <Redirect to={{
                pathname: '/login'
            }}/>
        }

        return <div>
            <WrappedComponent {...props}/>
        </div>
    };

    return redirectComponent;
};