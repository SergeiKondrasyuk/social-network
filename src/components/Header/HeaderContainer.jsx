import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {logOutAttempt, setLoginStatus, setLoginStatusMessage} from '../../redux/loginReducer';
import {me, setIsAuth} from '../../redux/authReducer';
import {getCountOfNewMessages} from '../../redux/dialogPageReducer';


const HeaderContainer = (props) => {

    useEffect(() => {
        props.me();
        setInterval(() => {
            props.getCountOfNewMessages();
        }, 8000)
    }, [])

    return <Header state={props.state}
                   setLoginStatus={props.setLoginStatus}
                   setIsAuth={props.setIsAuth}
                   isAuth={props.isAuth}
                   newMessagesCount={props.newMessagesCount}
                   me={props.me}
                   getCountOfNewMessages={props.getCountOfNewMessages}
                   logOutAttempt={props.logOutAttempt}/>
};

const mapStateToProps = (state) => {
    return {
        state: state,
        isAuth: state.auth.isAuth,
        newMessagesCount: state.dialogPage.newMessagesCount
    }
};


export default connect(mapStateToProps, {
    me, setLoginStatus, setIsAuth, logOutAttempt, getCountOfNewMessages
})(HeaderContainer);


