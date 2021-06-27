import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './burger-ingredients.module.css';
import Ingredient from '../ingredient/ingredient';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';

const BurgerIngredients = () => {
    const [current , setCurrent] = React.useState("Булки")
    const types = ['bun', 'main', 'sauce'];
    const ingredients = useSelector(store => store.ingredientsReducer.ingredients);

    const containerRef = React.useRef(null);
    const mainRef = React.useRef(null);
    const bunRef = React.useRef(null);
    const sauceRef = React.useRef(null);

    const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(getIngredients());
    }, [dispatch])

    const onScroll = (e) => {

      if (e.target.scrollTop > 272 && e.target.scrollTop < 1470) {
        setCurrent("Начинки")
      } else if (e.target.scrollTop >= 1470) {
        setCurrent("Соусы")
      } else {
        setCurrent("Булки")
      }

    }

    if (!ingredients.length) return <div></div>;
    const ingredientsArr = types.reduce((acc, type) => {
      acc[type] = ingredients.filter(item => item.type === type);
      return acc;
    }, {});

    const currentEl = Array.from(document.querySelectorAll('h3')).find(item => item.textContent === current);
    console.log(currentEl)
    
    if (currentEl) currentEl.scrollIntoView();
    const dict = {
      'bun': 'Булки',
      'main': 'Начинки',
      'sauce': 'Соусы'
    }

    const ingredientsElem = [];
    const propsValues = Object.values(ingredientsArr);
    for (let i = 0; i < propsValues.length; i++) {
      let res = (
        <React.Fragment key={i}>
          <div ref={i === 0 ? bunRef : i === 1 ? sauceRef : mainRef}>
          <h3 className="text text_type_main-medium" >{dict[propsValues[i][i]?.type]}</h3>
          <div className={burgerIngredientsStyle.ingredientsContainer}>
            {propsValues[i].map(item => {
              return <Ingredient key={item._id} id={item._id} />
            })}
          </div>
          </div>
          
        </React.Fragment>
      )
      ingredientsElem.push(res);
    }

  return (
    <section className={burgerIngredientsStyle.burgerIngredients}>
      <div style={{ display: 'flex', marginBottom: 40 }}>
        <Tab className={burgerIngredientsStyle.tabItem} value="Булки" active={current === 'Булки'} style={ {width: '100%', color: 'black'} } onClick={setCurrent} ref={bunRef}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent} ref={sauceRef}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent} ref={mainRef}>
          Начинки
        </Tab>
      </div>
    
      <div className={burgerIngredientsStyle.container} onScroll={onScroll} ref={containerRef}> 
        {ingredientsElem}
      </div>
    </section>
  );
}

export default BurgerIngredients;