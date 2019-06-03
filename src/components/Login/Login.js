import React from 'react';
import {Redirect} from "react-router-dom";
import {loginStatuses} from "../../redux/loginReducer";

const Login = (props) => {
debugger
    if (props.auth.isAuth) {
        debugger
        return <Redirect to={'/profile/'}/>
    }

    let onLoginButtonClick = () => {
        props.loginAttempt();
    };

    let onChangeHandler = (e) => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        props.changeInputValue(e.target.name, value)
    };

    return <div>
        <div>
            <span>Email: </span> <input id='email' onChange={onChangeHandler} name='email'/>
        </div>
        <div>
            <span>Password: </span> <input type='password' onChange={onChangeHandler} name='password'/>
        </div>
        <div>
            <span>Remember me: </span> <input type='checkbox' onChange={onChangeHandler} name='rememberMe'/>
        </div>

        {props.login.loginResult === 10 &&
        <div>
            <img src={props.login.captchaUrl} alt='captcha'/><input onChange={onChangeHandler} name='captcha'/>
        </div>}
        <div>
            <button disabled={props.login.loginStatus === loginStatuses.IN_PROGRESS}
                    onClick={onLoginButtonClick}>Login
            </button>
        </div>

        <div>{props.login.loginStatusMessage}</div>
    </div>


};


export default Login;