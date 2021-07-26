import React from 'react';
import Register from '../../components/register/register';

import registerPageStyle from './register-page.module.css';

const RegisterPage = () => {
  return (
    <div className={registerPageStyle.registerPage}>
      <Register />
    </div>
  )
}

export default RegisterPage;