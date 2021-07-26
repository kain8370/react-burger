import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../services/actions/user';
import { useHistory } from 'react-router-dom';

import resetPasswordStyle from './reset-password.module.css';

const ResetPassword = () => {
  const classNameLink = `text text_type_main-default text_color_inactive ${resetPasswordStyle.link}`;
  const classNameInputContainer = `mt-6 ${resetPasswordStyle.inputContainer}`;

  const { resetPasswordSuccess } = useSelector(store => ({ resetPasswordSuccess: store.userReducer.resetPasswordSuccess }));
  const [ password, setPassword ] = React.useState('');
  const [ code, setCode ] = React.useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onChange = e => {
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else {
      setCode(e.target.value);
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(resetPassword(password, code));
  }

  if (resetPasswordSuccess) {
    history.push('/login');
  }

  return (
    <div className={resetPasswordStyle.resetPasswordContainer}>
      <h3 className="text text_type_main-medium mb-0 mt-0">Восстановление пароля</h3>
      <form className={resetPasswordStyle.resetPasswordForm} onSubmit={onSubmit}>
        <div className={classNameInputContainer}>
          <Input type="password" name="password" size="default" placeholder="Введите новый пароль" icon="ShowIcon" onChange={onChange} value={password} />
        </div >
        <div className={classNameInputContainer}>
          <Input type="text" name="code" placeholder="Введите код из письма" size="default" onChange={onChange} value={code} />
        </div>
        <div className="mb-20 mt-6">
          <Button type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </form>
      <p>
        <span className="text text_type_main-default text_color_inactive">Вспомнили пароль?</span> <Link className={classNameLink} to="/login">Войти</Link>
      </p>
    </div>
  );
}

export default ResetPassword;