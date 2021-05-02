import React from 'react';
import data from '../../utils/data.js';

import AppHeader from '../app-header/app-header';

import app from './app.module.css';

function App() {
  return (
    <div className={app.app}>
      <AppHeader />
    </div>
  );
}

export default App;
