import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ErrorMessage from '../error-message/error-message';
import ApiService from '../../services/api-service';

import app from './app.module.css';

import { DataContext } from '../../services/dataContext';

const apiService = new ApiService();

const App = () => {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState(false);
  const [addedBuns, setAddedBuns] = React.useState();
  // let initialCount;
  // const countState = React.useReducer(reducer, initialCount);

  React.useEffect(() => {
    apiService.getData()
      .then(data => setData(data))
      .catch(() => setError(true))
  }, []);

  // function reducer(state, action) {
  //   console.log(state);
  //   switch (action.type) {
  //     case 'add':
  //       // if (state && action.ingredientType !== 'bun') {
  //       //   return (state[action.id]) ? {...state, [action.id]: +state[action.id] + 1} : {...state, [action.id]: 1};
  //       // } else if (state) {
  //       //   return {...state, [action.id]: 2}
  //       // }
  //       // return {[action.id]: (action.ingredientType === 'bun' ? 2 : 1)};
  //         console.log(state);
  //         const index = state.findIndex(item => item._id === action.id)
  //         console.log(index);
  //         const el = state.find(item => item._id === action.id);
  //         el.count = el.count ? el.count + 1 : 1;
  //         const beforeState = state.slice(0, index);
  //         const afterState = state.slice(index + 1);
  //         const newState1 = beforeState.concat(afterState);
  //         console.log(newState1);
  //         return newState1;
  //       break;
  //     case 'remove':
  //       // const newState = Object.entries(state).filter(item => item[0] !== action.id);
  //       // return Object.fromEntries(newState);
  //     default:
  //       throw new Error(`Wrong type of action: ${action.type}`);
  //   }
  // }

  const addIngredient = (id) => {
    const ingredient = data.find((item => item._id === id));
    if (ingredient.type === 'bun') {
      const newIngredient = Object.assign({}, ingredient);
      newIngredient.count = 2;
      // ingredient.count = 2;
      setAddedBuns(newIngredient);
      // const index = data.findIndex(item => item._id === id);
      // ingredient.count = 2;
      // const beforeData = data.slice(0, index);
      // const afterData = data.slice(index + 1);
      // const newData = [...beforeData, ingredient, ...afterData]
      // setData(newData);
    } else  {
      const index = data.findIndex(item => item._id === id);
      ingredient.count = ingredient.count ? ingredient.count + 1 : 1;
      const beforeData = data.slice(0, index);
      const afterData = data.slice(index + 1);
      const newData = [...beforeData, ingredient, ...afterData]
      setData(newData);
      // const newAddedIngredients = [].concat(addedIngredients, ingredient);
      // setAddedIngredients(newAddedIngredients);
    }
  }

  const incrementCount = (id) => {
    const index = data.findIndex(item => item._id === id);
    const element = data.find(item => item._id === id);
    element.count = element.count - 1;
    const beforeData = data.slice(0, index);
    const afterData = data.slice(index + 1);
    const newData = [...beforeData, element, ...afterData];
    setData(newData);
  }

  const mainContent = (
    <>
      <h2 className="text text_type_main-large title">
            Соберите бургер
      </h2>
      <div className={app.wrapper}>
        <DataContext.Provider value={[data, setData]}>
          <BurgerIngredients addedBuns={addedBuns} addIngredient={addIngredient} />
          <BurgerConstructor addedBuns={addedBuns} incrementCount={incrementCount} />
        </DataContext.Provider>
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
