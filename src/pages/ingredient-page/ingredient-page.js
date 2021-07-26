import React from 'react'
import { useHistory } from 'react-router-dom'; 

import ingredientPageStyle from './ingredient-page.module.css';

const IngredientPage = () => {

  const history = useHistory();
  const ingredient = history.location.state.data;
  const descriptionClassName = `text text_type_main-default ${ingredientPageStyle.description}`;
  const classNameInfoItem = `${ingredientPageStyle.ingredientInfoItem} text text_type_main-default text_color_inactive`;

  return (
    <div>
      <div className={ingredientPageStyle.container}>
        <h3 className="text text_type_main-large mb-10">Детали ингредиента</h3>
        <div className={ingredientPageStyle.ingredientDetails}>
          <img src={ingredient.image_large} alt={ingredient.name} />
          <h3 className="text text_type_main-medium">{ingredient.name}</h3>
          <p className={descriptionClassName}>Превосходные котлеты из марсианской Магнолии
            для фирменных космических бургеров, набирающих популярность по всей вселенной.
          </p>
          <div className={ingredientPageStyle.ingredientInfo}>
            <div className={classNameInfoItem}>
              <span>Калории,ккал</span>
              <span className='text text_type_digits-default'>{ingredient.calories}</span>
            </div>
            <div className={classNameInfoItem}>
              <span>Белки, г</span>
              <span className='text text_type_digits-default'>{ingredient.proteins}</span>
            </div>
            <div className={classNameInfoItem}>
              <span>Жиры, г</span>
              <span className='text text_type_digits-default'>{ingredient.fat}</span>
            </div>
            <div className={classNameInfoItem}>
              <span>Углеводы, г</span>
              <span className='text text_type_digits-default'>{ingredient.carbohydrates}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IngredientPage;