import React from 'react';
import ForgotPassword from '../../components/forgot-password/forgot-password';

import forgotPasswordPageStyle from './forgot-password-page.module.css';

const ForgotPasswordPage = () => {
  return (
    <div className={forgotPasswordPageStyle.forgotPasswordPage}>
      <ForgotPassword />
    </div>
  )
}

export default ForgotPasswordPage;