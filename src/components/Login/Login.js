import React from 'react';
import {Redirect} from "react-router-dom";
import {loginStatuses} from "../../redux/loginReducer";

const Login = (props) => {
    let {email, password, rememberMe, captcha} = props.login;
    if (props.auth.isAuth) {
        return <Redirect to={'/profile/' + props.auth.userInfo.userId}/>
    }

    let onLoginButtonClick = () => {
        props.loginRequest(email, password, rememberMe, captcha);
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
            <span>Password: </span> <input type='password' onChange={onChangeHandler} name='password' value={password}/>
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