import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../services/actions/user';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import registerStyle from './register.module.css';

const Register = () => {
  
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();

  const dispatch = useDispatch();
  const { user } = useSelector(store => ({ user: store.userReducer.user }));
  const history = useHistory();

  const classNameLink = `text text_type_main-default text_color_inactive ${registerStyle.link}`;
  const classNameInputContainer = `mt-6 ${registerStyle.inputContainer}`;

  const onChange = (e) => {
    switch(e.target.name) {
      case 'name': {
        setName(e.target.value);
        break;
      }
      case 'email': {
        setEmail(e.target.value);
        break
      }
      case 'password': {
        setPassword(e.target.value);
        break;
      }
      default: 
       return;
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(email, password, name));
  }

  if (user) {
    history.push('/');
  }

  return (
    <div className={registerStyle.registerFormContainer}>
      <h3 className="text text_type_main-medium mb-0 mt-0">Регистрация</h3>
      <form className={registerStyle.registerForm} onSubmit={onSubmit}>
        <div className={classNameInputContainer}>
          <Input type="text" name="name" placeholder="Имя" size="default" onChange={onChange} />
        </div>
        <div className={classNameInputContainer}>
          <Input type="email" name="email" placeholder="E-mail" size="default" onChange={onChange} />
        </div>
        <div className={classNameInputContainer}>
          <Input type="password" name="password" size="default" placeholder="Пароль" icon="ShowIcon" onChange={onChange} />
        </div >
        <div className="mb-20 mt-6">
          <Button type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </div>
      </form>
      <p>
        <span className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</span> <Link className={classNameLink} to="/login">Войти</Link>
      </p>
    </div>
  );
}

export default Register;