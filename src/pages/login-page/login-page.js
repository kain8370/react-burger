import React from 'react';
import Login from '../../components/login/login';

import loginPageStyle from './login-page.module.css';

const LoginPage = () => {
  return (
    <div className={loginPageStyle.loginPage}>
      <Login />
    </div>
  )
}

export default LoginPage;
