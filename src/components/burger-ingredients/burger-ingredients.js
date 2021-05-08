import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './burger-ingredients.module.css';
import Ingredient from '../ingredient/ingredient';
import PropTypes from 'prop-types';

const burgerIngredientsPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
});

const BurgerIngredients = (props) => {
    const [current , setCurrent] = React.useState("Булки")
    const currentEl = Array.from(document.querySelectorAll('h3')).find(item => item.textContent === current);
    if (currentEl) currentEl.scrollIntoView();
    const dict = {
      'bun': 'Булки',
      'main': 'Начинки',
      'sauce': 'Соусы'
    }
    const ingredients = [];
    const propsValues = Object.values(props);
    for (let i = 0; i < propsValues.length; i++) {
      let res = (
        <React.Fragment key={i}>
          <h3 className="text text_type_main-medium">{dict[propsValues[i][i].type]}</h3>
          <div className={burgerIngredientsStyle.ingredientsContainer}>
            {propsValues[i].map(item => {
              return <Ingredient key={item._id} image={item.image} count={item.count} price={item.price} name={item.name} />
            })}
          </div>
        </React.Fragment>
      )
      ingredients.push(res);
    }

  return (
    <section className={burgerIngredientsStyle.burgerIngredients}>
      <div style={{ display: 'flex', marginTop: 20, marginBottom: 40 }}>
        <Tab className={burgerIngredientsStyle.tabItem} value="Булки" active={current === 'Булки'} style={ {width: '100%', color: 'black'} } onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={burgerIngredientsStyle.container}>
        {ingredients}
      </div>
      
    </section>
  );
}

BurgerIngredients.propTypes = {
  bun: PropTypes.arrayOf(burgerIngredientsPropTypes.isRequired).isRequired,
  main: PropTypes.arrayOf(burgerIngredientsPropTypes.isRequired).isRequired,
  sauce: PropTypes.arrayOf(burgerIngredientsPropTypes.isRequired).isRequired,
}

export default BurgerIngredients;