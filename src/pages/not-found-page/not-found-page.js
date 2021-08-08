import React from 'react';

import notFoundPageStyle from './not-found-page.module.css';

const NotFoundPage = () => {

  const textClassName = `text text_type_main-large ${notFoundPageStyle.text}`

  return (
    <div className={notFoundPageStyle.container}>
      <div className={textClassName}>404: Not Found :(</div>
    </div>
  )
}

export default NotFoundPage;