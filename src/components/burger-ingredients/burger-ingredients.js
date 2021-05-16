import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './burger-ingredients.module.css';
import Ingredient from '../ingredient/ingredient';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { DataContext } from '../../services/dataContext';

const burgerIngredientsPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
});

const BurgerIngredients = (props) => {
    const [current , setCurrent] = React.useState("Булки")
    const [state, setState] = React.useState({visible: false, data: {}});
    const [data] = React.useContext(DataContext);
    const types = ['bun', 'main', 'sauce'];
    const modalTitle = 'Детали ингредиента';
    if (!Array.isArray(data)) return <div></div>;
    let currentIngredient = '';

    const ingredientsArr = types.reduce((acc, type) => {
      acc[type] = data.filter(item => item.type === type);
      return acc;
    }, {});

    const currentEl = Array.from(document.querySelectorAll('h3')).find(item => item.textContent === current);
    if (currentEl) currentEl.scrollIntoView();
    const dict = {
      'bun': 'Булки',
      'main': 'Начинки',
      'sauce': 'Соусы'
    }

    const onToggleVisible = (id) => {
      currentIngredient = data.find(item => item._id === id);
      setState({ visible: !state.visible, data: currentIngredient});
    }
    const ingredients = [];
    const propsValues = Object.values(ingredientsArr);
    for (let i = 0; i < propsValues.length; i++) {
      let res = (
        <React.Fragment key={i}>
          <h3 className="text text_type_main-medium">{dict[propsValues[i][i]?.type]}</h3>
          <div className={burgerIngredientsStyle.ingredientsContainer}>
            {propsValues[i].map(item => {
              return <Ingredient addIngredient={props.addIngredient} key={item._id} type={item.type} image={item.image} count={item._id === props.addedBuns?._id ? props.addedBuns?.count : item.count} price={item.price} name={item.name} visible={state.visible} id={item._id} onToggleVisible={onToggleVisible} />
            })}
          </div>
        </React.Fragment>
      )
      ingredients.push(res);
    }
  return (
    <section className={burgerIngredientsStyle.burgerIngredients}>
      <div style={{ display: 'flex', marginBottom: 40 }}>
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
      {data.length && state.visible && <ModalOverlay visible={state.visible} already={false} onChangeVisible={setState}><IngredientDetails title={modalTitle} data={state.data} /></ModalOverlay>}
    </section>
  );
}

BurgerIngredients.propTypes = {
  addedBuns: burgerIngredientsPropTypes,
  addIngredient: PropTypes.func.isRequired
}

export default BurgerIngredients;