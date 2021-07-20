import React from 'react';

import ingredientDetailsStyle from './ingredient-details.module.css';
import { useHistory } from 'react-router-dom';

function IngredientDetails() {
  const classNameItemName = `${ingredientDetailsStyle.name} text text_type_main-medium`;
  const classNameDescription =`${ingredientDetailsStyle.description} text text_type_main-default`;
  const classNameInfoItem = `${ingredientDetailsStyle.ingredientInfoItem} text text_type_main-default text_color_inactive`;
  const classNameTitle = `${ingredientDetailsStyle.title} text text_type_main-large`;

  const history = useHistory();
  const data = history.location.state?.data;

  return (
    <>
      <h3 className={classNameTitle}>Детали ингредиента</h3>
      <div className={ingredientDetailsStyle.ingredientDetails}>
        <img src={data.image_large} alt={data.name} />
        <h3 className={classNameItemName}>{data.name}</h3>
        <p className={classNameDescription}>Превосходные котлеты из марсианской Магнолии
          для фирменных космических бургеров, набирающих популярность по всей вселенной.
        </p>
        <div className={ingredientDetailsStyle.ingredientInfo}>
          <div className={classNameInfoItem}>
            <span>Калории,ккал</span>
            <span className='text text_type_digits-default'>{data.calories}</span>
          </div>
          <div className={classNameInfoItem}>
            <span>Белки, г</span>
            <span className='text text_type_digits-default'>{data.proteins}</span>
          </div>
          <div className={classNameInfoItem}>
            <span>Жиры, г</span>
            <span className='text text_type_digits-default'>{data.fat}</span>
          </div>
          <div className={classNameInfoItem}>
            <span>Углеводы, г</span>
            <span className='text text_type_digits-default'>{data.carbohydrates}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default IngredientDetails;