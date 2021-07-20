import React from 'react';
import ResetPassword from '../../components/reset-password/reset-password';

import resetPasswordPageStyle from './reset-password-page.module.css';

const ResetPasswordPage = () => {
  return (
    <div className={resetPasswordPageStyle.resetPasswordPage}>
      <ResetPassword />
    </div>
  )
}

export default ResetPasswordPage;