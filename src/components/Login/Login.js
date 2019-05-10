import React from 'react';
import Redirect from "react-router-dom/es/Redirect";
import {loginStatuses} from "../../redux/loginReducer";

const Login = (props) => {

    let captchaValueRef = React.createRef();
    let EmailValueRef = React.createRef();
    let PasswordValueRef = React.createRef();
    let RememberMePositionRef = React.createRef();

    let onCaptchaInputChange = () => {
        props.updateCaptchaValue(captchaValueRef.current.value);
    };
    let onEmailInputChange = () => {
        props.updateEmailValue(EmailValueRef.current.value);
    };
    let onPasswordInputChange = () => {
        props.updatePasswordValue(PasswordValueRef.current.value);
    };
    let onRememberMeInputChange = () => {
        props.updateRememberMePosition(RememberMePositionRef.current.checked);
    };

    let onLoginButtonClick = () => {
        props.loginRequest(props.login.email, props.login.password, props.login.rememberMe, props.login.captchaValue);
    };

    if (props.login.loginStatus !== loginStatuses.SUCCESS) {
        return <div>
            <div><span>Email: </span> <input id='email' onChange={onEmailInputChange}
                                             ref={EmailValueRef}/></div>
            <div><span>Password: </span> <input type='password' onChange={onPasswordInputChange}
                                                ref={PasswordValueRef}/></div>
            <div><span>Remember me: </span> <input type='checkbox' onChange={onRememberMeInputChange}
                                                   ref={RememberMePositionRef}/></div>
            {props.login.loginResult === 10 && props.getCaptcha(props.login.captchaStatus)}
            {props.login.loginResult === 10 &&
            <div><img src={props.login.captchaUrl} alt='captcha'/><input onChange={onCaptchaInputChange}
                                                                         ref={captchaValueRef}/></div>}
            <div>
                <button disabled={props.login.loginStatus === loginStatuses.INPROGRESS}
                        onClick={onLoginButtonClick}>Login
                </button>
            </div>

            <div>{props.login.loginStatusMessage}</div>
        </div>
    }

    let pathToRedirect = '/profile';
    /*    let locState = props.state;
        if (locState && locState.page) {
            pathToRedirect = locState.page
        }*/
    return <Redirect to={pathToRedirect}/>;
};


export default Login;