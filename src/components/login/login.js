import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../services/actions/user';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import loginStyle from './login.module.css';

const Login = () => {

  const classNameLink = `text text_type_main-default text_color_inactive ${loginStyle.link}`;
  const classNameInputContainer = `mt-6 ${loginStyle.inputContainer}`;

  const [ email, setEmail ] = React.useState();
  const [ password, setPassword ] = React.useState();
  const dispatch = useDispatch();
  const { user } = useSelector(store => ({ user: store.userReducer.user }));
  const history = useHistory();

  const onChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  }

  if (user) {
    history.push('/');
  }

  return (
    <div className={loginStyle.loginFormContainer}>
      <h3 className="text text_type_main-medium mb-0 mt-0">Вход</h3>
      <form className={loginStyle.loginForm} onSubmit={onSubmit}>
        <div className={classNameInputContainer}>
          <Input type="email" name="email" placeholder="E-mail" size="default" onChange={onChange} />
        </div>
        <div className={classNameInputContainer}>
          <Input type="password" name="password" size="default" placeholder="Пароль" icon="ShowIcon" onChange={onChange} />
        </div>
        <div className="mb-20 mt-6">
          <Button type="primary" size="medium">
            Войти
          </Button>
        </div>
      </form>
      <p className={loginStyle.text}>
        <span className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</span> <Link className={classNameLink} to="/register">Зарегистрироваться</Link>
      </p>
      <p className={loginStyle.text}>
        <span className="text text_type_main-default text_color_inactive">Забыли пароль?</span> <Link className={classNameLink} to="/forgot-password">Восстановить пароль</Link>
      </p>
    </div>
  )
}

export default Login;