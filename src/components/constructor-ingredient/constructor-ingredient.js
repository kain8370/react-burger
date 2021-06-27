import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { REMOVE_INGREDIENT, SORT_INGREDIENTS } from '../../services/constants';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import constructoringredientStyle from './constructor-ingredient.module.css';

const constructorIngredientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
});

const ConstructorIngredient = (props) => {
  const ref = React.useRef(null);
  const dispatch = useDispatch();

  const moveIngredient = (dragIndex, hoverIndex) => {
    dispatch({ type: SORT_INGREDIENTS, dragIndex, hoverIndex });
  } 

  const [, drop] = useDrop({
    accept: 'remove-ingredient',
    hover(item, monitor) {
        if (!ref.current) {
            return;
        }
        const dragIndex = item.index;
        const hoverIndex = props.index;
        if (dragIndex === hoverIndex) {
            return;
        }
        const hoverBoundingRect = ref.current?.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }
        moveIngredient(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
  });

  const [{isDragging}, drag] = useDrag({
    type: 'remove-ingredient',
    item: () => {
        return { id: props.item._id, index: props.index };
    },
    collect: (monitor) => ({
        isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const opacity = isDragging ? 0 : 1;

  return (
     <div className={constructoringredientStyle.ingredient} ref={ref}>
      <span className={constructoringredientStyle.dragIcon}><DragIcon /></span>
      <ConstructorElement
      text={props.item.name}
      price={props.item.price}
      thumbnail={props.item.image}
      handleClose={e => dispatch({type: REMOVE_INGREDIENT, ingredient: props.item})}/>
    </div>
  )
}

ConstructorIngredient.propTypes = {
  item: constructorIngredientPropTypes,
  index: PropTypes.number.isRequired
}

export default ConstructorIngredient;