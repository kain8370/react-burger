import React from 'react';
import { isPropertySignature } from 'typescript';
import PropTypes from 'prop-types';

import ingredientImageStyle from './ingredient-image.module.css';

const IngredientImage = React.memo(props => {

  const countClassName = `text text_type_main-default ${ingredientImageStyle.count}`;
  
  return (
    <span style={{zIndex: props.zIndex}} className={ingredientImageStyle.ingredient}><img className={ingredientImageStyle.image} style={{ opacity: props.count > 1 ? 0.4 : 1}} src={props.url} alt="bun"/>{props.count > 1 && <span className={countClassName}>{`+${props.count}`}</span>}</span>
  )
});

IngredientImage.PropTypes = {
  count: PropTypes.number.isRequired
}

export default IngredientImage;