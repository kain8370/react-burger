import React from 'react';
import data from '../../utils/data.js';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import app from './app.module.css';

const App = () => {
  const types = ['bun', 'main', 'sauce'];

  const ingredients = types.reduce((acc, type) => {
    acc[type] = data.filter(item => item.type === type);
    return acc;
  }, {});

  return (
    <div className={app.app}>
      <AppHeader />
      <main className={app.main}>
        <h2 className="text text_type_main-large title">
          Соберите бургер
        </h2>
        <div className={app.wrapper}>
          <BurgerIngredients {...ingredients} />
          <BurgerConstructor ingredients={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
