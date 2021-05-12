import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ErrorMessage from '../error-message/error-message';

import app from './app.module.css';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients/';

const App = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
 
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setData(data.data);
      } catch(err) {
        setError(true);
      }
      
    }
    getData();
    
  }, []);

  const mainContent = (
    <>
      <h2 className="text text_type_main-large title">
            Соберите бургер
      </h2>
      <div className={app.wrapper}>
        <BurgerIngredients data={data} />
        <BurgerConstructor ingredients={data} />
      </div>
    </>
  );
  const content = error ? <ErrorMessage /> : mainContent;

  return (
    <div className={app.app}>
      <AppHeader />
      <main className={app.main}>
        {content}
      </main>
    </div>
  );
}

export default App;
