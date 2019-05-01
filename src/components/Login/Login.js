import React from 'react';
import {statuses} from "../../redux/loginReducer";
import * as axios from "axios";

const Login = (props) => {
debugger
    let axiosInstance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
    });

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
        props.setLoginStatus(statuses.INPROGRESS);
        axiosInstance.post('auth/login', {
            email: props.login.email,
            password: props.login.password,
            rememberMe: props.login.rememberMe,
            captcha: props.login.captchaValue,

        }).then((res) => {
            switch (res.data.resultCode) {
                case 0: {
                    props.setLoginStatus(statuses.SUCCESS);
                    props.setLoginStatusMessage('Login success');
                    break;
                }
                case 1: {
                    debugger
                    props.setLoginStatus(statuses.ERROR);
                    props.setLoginStatusMessage(res.data.messages[0]);
                    break;
                }
                case 10: {
                    props.setLoginStatus(statuses.ERROR);
                    props.setLoginStatusMessage(res.data.messages[0]);
                    break;
                }
            }

        })/*.then(() => axiosInstance.put('profile/', {

            "aboutMe": '123',



        }));*/
    };

    if (props.login.captchaStatus === statuses.NOT_INITIALIZED) {
        props.setCaptchaStatus(statuses.INPROGRESS);
        axiosInstance.get('security/get-captcha-url').then((res) => {
            props.setCaptchaStatus(statuses.SUCCESS);
            props.setCaptchaUrl(res.data.url);
        });

    };

    if (props.login.loginStatus === statuses.NOT_INITIALIZED || props.login.loginStatus === statuses.ERROR){
        return <div>
            <div><span>Email: </span> <input id='email' onChange={onEmailInputChange}
                                             ref={EmailValueRef}/></div>
            <div><span>Password: </span> <input type='password' onChange={onPasswordInputChange}
                                                ref={PasswordValueRef}/></div>
            <div><span>Remember me: </span> <input type='checkbox' onChange={onRememberMeInputChange}
                                                   ref={RememberMePositionRef}/></div>
            <div><img src={props.login.captchaUrl} alt='captcha'/><input onChange={onCaptchaInputChange}
                                                                         ref={captchaValueRef}/></div>
            <div>
                <button onClick={onLoginButtonClick}>Login</button>
            </div>

            <div>{props.login.loginStatusMessage}</div>
        </div>
    }







    return <div>

        <div>{props.login.loginStatusMessage}</div>

    </div>
};


export default Login;