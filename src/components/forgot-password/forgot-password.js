import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../services/actions/user';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import forgotPasswordStyle from './forgot-password.module.css';
import { FORGOT_PASSWORD_FAILED } from '../../services/constants';

const ForgotPassword = () => {

  const classNameLink = `text text_type_main-default text_color_inactive ${forgotPasswordStyle.link}`;
  const classNameInputContainer = `mt-6 ${forgotPasswordStyle.inputContainer}`;

  const [ email, setEmail ] = React.useState();
  const dispatch = useDispatch();
  const { forgotPasswordSuccess } = useSelector(store => ({forgotPasswordSuccess: store.userReducer.forgotPasswordSuccess}));
  const history = useHistory();

  const onChange = (e) => {
    setEmail(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  }

  if (forgotPasswordSuccess) {
    history.push("/reset-password");
    dispatch({ type: FORGOT_PASSWORD_FAILED});
  }

  console.log(forgotPasswordSuccess);

  return (
    <div className={forgotPasswordStyle.forgotPasswordFormContainer}>
      <h3 className="text text_type_main-medium mb-0 mt-0">Восстановление пароля</h3>
      <form className={forgotPasswordStyle.forgotPasswordForm} onSubmit={onSubmit}>
        <div className={classNameInputContainer}>
          <Input type="email" name="email" placeholder="E-mail" size="default" onChange={onChange} />
        </div>
        <div className="mb-20 mt-6">
          <Button type="primary" size="medium">
            Восстановить
          </Button>
        </div>
      </form>
      <p>
        <span className="text text_type_main-default text_color_inactive">Вспомнили пароль?</span> <Link className={classNameLink} to="/login">Войти</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;