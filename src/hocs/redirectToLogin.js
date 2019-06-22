import React from "react";
import {Redirect} from "react-router-dom";
import {getAuthReducer} from '../redux/selectors';
import {connect} from 'react-redux';

export let RedirectToLogin = (WrappedComponent) => {

    let mapStateToPropsForRedirect = (state) => ({
        auth: getAuthReducer(state),
    });
    let RedirectComponent = (props) => {

        if (!props.auth.isAuth) {
            return <Redirect to={{
                pathname: '/login'
            }}/>
        }

        return <div>
            <WrappedComponent {...props}/>
        </div>
    };

        let ConnectedRedirectToLogin = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectToLogin;
};