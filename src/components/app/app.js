import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import app from './app.module.css';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
  const [data, setData] = React.useState([]);
 
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setData(data.data);
    }
    getData();
    
  }, []);

  

  return (
    <div className={app.app}>
      <AppHeader />
      <main className={app.main}>
        <h2 className="text text_type_main-large title">
          Соберите бургер
        </h2>
        <div className={app.wrapper}>
          <BurgerIngredients data={data} />
          <BurgerConstructor ingredients={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
