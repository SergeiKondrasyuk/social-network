import * as React from 'react';
import {Redirect} from "react-router-dom";
import {loginStatuses} from "../../redux/loginReducer";
import {Field, reduxForm} from 'redux-form';

interface RenderInputInterface {
    input: any
    meta: any
}

let renderInput = ({input, meta, ...props}: RenderInputInterface) => {
    return <>
        <input {...props}{...input}/>
        {meta.touched && meta.invalid && <span style={{color: 'red'}}>{meta.error}</span>}
        {meta.touched && meta.warning && <span style={{color: 'orange'}}>{meta.warning}</span>}
    </>
};

const Login = (props: any) => {

    if (props.auth.isAuth) {
        return <Redirect to={'/profile/'}/>
    }



    return (<form onSubmit={props.handleSubmit}>
        <div>
            <span>Email: </span>
            <Field component={renderInput} type='email' id='email' name='email' placeholder='Your email'
                   validate={[requiredValidator]}/>
        </div>
        <div>
            <span>Password: </span>
            <Field component={renderInput} type='password' name='password' placeholder='Your password'
                   validate={[requiredValidator]} warn={shortPasswordWarning}/>
        </div>
        <div>
            <span>Remember me: </span> <Field component={renderInput} type='checkbox' name='rememberMe'/>
        </div>

        {props.login.loginResult === 10 &&
        <div>
            <img src={props.login.captchaUrl} alt='captcha'/>
            <div><span>Enter captcha: </span><Field component={renderInput} name='captcha'/></div>
        </div>}
        <div>
            <button type='submit' disabled={props.login.loginStatus === loginStatuses.IN_PROGRESS}>Login</button>
        </div>

        <div>{props.login.loginStatusMessage}</div>
    </form>)
};
let LoginReduxForm = reduxForm({form: 'login-form'})(Login)

let requiredValidator = (value: string) => {
    return value ? undefined : 'Field is required';
};

let shortPasswordWarning = (value: string) => {
    if (value && value.length <= 3) return 'Too short password'
    return undefined
}

export default LoginReduxForm;