import React from 'react';
import data from '../../utils/data.js';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import app from './app.module.css';

class App extends React.Component {

  state = { data: data }

  onAddIngredient = (id) => {
    const index = this.state.data.findIndex(item => item._id === id);
    this.setState(prevState => ({data: [...this.state.data.slice(0, index),{...prevState.data[index], count: prevState.data[index].count ? + prevState.data[index].count + 1 : 1}, ...this.state.data.slice(index + 1)]}));
  }

  render() {
    return (
      <div className={app.app}>
        <AppHeader />
        <main className={app.main}>
          <h2 className="text text_type_main-large title">
            Соберите бургер
          </h2>
          <div className={app.wrapper}>
            <BurgerIngredients onAddIngredient={this.onAddIngredient} data={this.state.data} />
            <BurgerConstructor ingredients={this.state.data} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
