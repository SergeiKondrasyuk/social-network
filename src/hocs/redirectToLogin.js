import React from "react";
import {Redirect} from "react-router-dom";

export let redirectToLogin = (WrapperdComponent) => {

    let otherComponent = (props) => {

        if (!props.auth.isAuth) {
            debugger
            return <Redirect to={{

                pathname: '/login'
            }}/>
        }

        return <div>
            <WrapperdComponent {...props}/>
        </div>
    };

    return otherComponent;
};