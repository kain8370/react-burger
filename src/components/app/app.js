import React from 'react';
import data from '../../utils/data.js';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import app from './app.module.css';

function App() {
  return (
    <div className={app.app}>
      <AppHeader />
      <main className={app.main}>
        <h2 className="text text_type_main-large title">
          Соберите бургер
        </h2>
        <BurgerIngredients />
      </main>
    </div>
  );
}

export default App;
