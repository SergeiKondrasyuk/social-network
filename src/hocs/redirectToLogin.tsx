import * as React from "react";
import {Redirect} from "react-router-dom";
import {getAuthReducer} from '../redux/selectors';
import {connect} from 'react-redux';

export let RedirectToLogin = (WrappedComponent: any) => {

    let mapStateToPropsForRedirect = (state: any) => ({
        auth: getAuthReducer(state),
<<<<<<< HEAD:src/hocs/redirectToLogin.tsx
<<<<<<< HEAD:src/hocs/redirectToLogin.tsx
    });
    let RedirectComponent = (props: any) => {
=======
=======
>>>>>>> parent of c470148... 22.06:src/hocs/redirectToLogin.js
    })

    let RedirectComponent = (props) => {
>>>>>>> parent of c470148... 22.06:src/hocs/redirectToLogin.js

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

        let ConnectedRedirectToLogin = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectToLogin;
};