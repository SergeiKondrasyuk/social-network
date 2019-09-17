import React from 'react';
import {Redirect} from "react-router-dom";
import {loginStatuses} from "../../redux/loginReducer";
import {Field, reduxForm} from 'redux-form';
import {maxLengthValidator, minLengthValidator, requiredFieldValidator} from '../../utils/validators';
import {Input} from '../common/FormsControl';
import s from './../common/FormsControls.module.css'
import style from './Login.module.css'
import Button from '@material-ui/core/Button';

let maxLength254 = maxLengthValidator(254);
let minLength3 = minLengthValidator(3);


const Login = ({handleSubmit, error, login, isAuth}) => {

    if (isAuth) {
        return <Redirect to={'/profile/'}/>
    }

    return (<form className={style.loginForm} onSubmit={handleSubmit}>
            <div className={style.fields}>
                <div className={style.email}>
                    <Field component={Input} type='email' id='email' name='email' label="Email address"
                           autoComplete="email" autoFocus fieldType='input'
                           validate={[requiredFieldValidator, maxLength254, minLength3]}/>
                </div>
                <div className={style.password}>
                    <Field component={Input} type='password' id='password' name='password' label="Password"
                           autoComplete="password" fieldType='input'
                           validate={[requiredFieldValidator, maxLength254, minLength3]} warn={minLength3}/>
                </div>
                <div>
                    <span>Remember me: </span> <Field component={Input} type='checkbox' fieldType='checkbox'
                                                      name='rememberMe'/>
                </div>

                {login.loginStatus === 'CAPTCHA_REQUIRED' &&
                <div><div>Please enter anti-bot symbols</div>
                    <img src={login.captchaUrl} alt='captcha'/>
                    <div><Field component={Input} name='captcha' type='captcha' id='captcha'
                                label="captcha" autoComplete="captcha" fieldType='input'/>
                    </div>
                </div>}
                {error && <div className={s.formSummaryError}>{error}</div>}
                <div>
                    <Button type="submit"
                            disabled={login.loginStatus === loginStatuses.IN_PROGRESS}
                            variant="contained" color="primary">Login</Button>
                </div>
            </div>

    </form>)
};
let LoginReduxForm = reduxForm({
    form: 'login-form' //unique form name
})(Login);


export default LoginReduxForm;