import React from 'react';
import {Redirect} from "react-router-dom";
import {loginStatuses} from "../../redux/loginReducer";
import {Field, reduxForm} from 'redux-form';
import {maxLengthValidator, minLengthValidator, requiredFieldValidator} from '../../utils/validators';
import {Input} from '../common/FormsControl';
import s from './../common/FormsControls.module.css'


let maxLength254 = maxLengthValidator(254);
let minLength3 = minLengthValidator(3);

const Login = (props) => {

    if (props.auth.isAuth) {
        return <Redirect to={'/profile/'}/>
    }

    return (<form onSubmit={props.handleSubmit}>
        <div>
            <span>Email: </span>
            <Field component={Input} type='email' id='email' name='email' placeholder='Your email'
                   validate={[requiredFieldValidator, maxLength254, minLength3]}/>
        </div>
        <div>
            <span>Password: </span>
            <Field component={Input} type='password' name='password' placeholder='Your password'
                   validate={[requiredFieldValidator, maxLength254, minLength3]} warn={minLength3}/>
        </div>
        <div>
            <span>Remember me: </span> <Field component={Input} type='checkbox' name='rememberMe'/>
        </div>

        {props.login.loginStatus === 'CAPTCHA_REQUIRED' &&
        <div>
            <img src={props.login.captchaUrl} alt='captcha'/>
            <div><span>Enter captcha: </span><Field component={Input} name='captcha'/></div>
        </div>}
        {props.error && <div className={s.formSummaryError}>{props.error}</div>}
        <div>
            <button type='submit' disabled={props.login.loginStatus === loginStatuses.IN_PROGRESS}>Login</button>
        </div>

    </form>)
};
let LoginReduxForm = reduxForm({
    form: 'login-form' //unique form name
})(Login);


export default LoginReduxForm;