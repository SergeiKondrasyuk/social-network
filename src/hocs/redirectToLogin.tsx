import * as React from "react";
import {Redirect} from "react-router-dom";
import {getAuthReducer} from '../redux/selectors';
import {connect} from 'react-redux';

export let RedirectToLogin = (WrappedComponent: any) => {

    let mapStateToPropsForRedirect = (state: any) => ({
        auth: getAuthReducer(state),
    });
    let RedirectComponent = (props: any) => {

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