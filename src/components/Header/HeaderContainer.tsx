import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {logOutAttempt, setLoginStatus, setLoginStatusMessage} from '../../redux/loginReducer';
import {me, setIsAuth} from '../../redux/authReducer';


const HeaderContainer = (props: any) => {

    useEffect(() => {
        props.me();
    }, [])

    return <Header state={props.state}
                   setLoginStatus={props.setLoginStatus}
                   setIsAuth={props.setIsAuth}
                   setLoginStatusMessage={props.setLoginStatusMessage}
                   isAuth={props.isAuth}
                   me={props.me}
                   logOutAttempt={props.logOutAttempt}/>
};

const mapStateToProps = (state: any) => {
    return {
        state: state,
        isAuth: state.auth.isAuth
    }
};


export default connect(mapStateToProps, {
    me, setLoginStatus, setLoginStatusMessage, setIsAuth, logOutAttempt
})(HeaderContainer);


