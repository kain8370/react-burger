import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './burger-ingredients.module.css';
import Ingredient from '../ingredient/ingredient';

class BurgerIngredients extends React.Component {
  state = {
    current: 'Булки',
  }

  setCurrent = current => {
    this.setState({current: current});
  }

  renderIngredients = () => {
    const dict = {
      'bun': 'Булки',
      'sauce': 'Соусы',
      'main': 'Начинки'
    }
    const items = this.props.data.filter(item => this.state.current === dict[item.type]);
    return items.map((item, index) => <Ingredient onAddIngredient={this.props.onAddIngredient} key={index} count={item.count} id={item._id} price={item.price} image={item.image} name={item.name} />) 
  }

  render() {
    const items = this.renderIngredients();
    return (
      <section className={burgerIngredientsStyle.burgerIngredients}>
        <div style={{ display: 'flex', marginTop: 20, marginBottom: 40 }}>
          <Tab className={burgerIngredientsStyle.tabItem} value="Булки" active={this.state.current === 'Булки'} style={ {width: '100%', color: 'black'} } onClick={this.setCurrent}>
            Булки
          </Tab>
          <Tab value="Соусы" active={this.state.current === 'Соусы'} onClick={this.setCurrent}>
            Соусы
          </Tab>
          <Tab value="Начинки" active={this.state.current === 'Начинки'} onClick={this.setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={burgerIngredientsStyle.container}>
          <h3 className="text text_type_main-medium">{this.state.current}</h3>
          <div className={burgerIngredientsStyle.ingredientsContainer}>
            {items}
          </div>
        </div>
        
      </section>
    );
  }
}

export default BurgerIngredients;