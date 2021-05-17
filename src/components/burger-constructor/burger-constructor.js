import React from 'react';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import OrderDetails from '../order-details/order-details';
import Bun from '../bun/bun';

import ApiService from '../../services/api-service';

import { DataContext } from '../../services/dataContext';

import burgerConstructorStyle from './burger-constructor.module.css';

const addedBunsPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
});

const apiService = new ApiService();

const BurgerConstructor = (props) => {

  const [state, setState] = React.useState({visible: false, data: {}});
  const [data] = React.useContext(DataContext);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [numberOrder, setNumberOrder] = React.useState();

  const elements =  data && data.map((item, index) => {
    const arr = [];
    if (item.count && item.type !== 'bun') {
      for (let i = 0; i < item.count; i++) {
        arr.push(<div key={index + i} className={burgerConstructorStyle.ingredient}>
          <span className={burgerConstructorStyle.dragIcon}><DragIcon /></span>
          <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={() => {
          props.incrementCount(item._id);
          }}
        />
        </div>);
      }
    }
    return arr;
  });

  const getTotalPrice = () => {
    const ingredientsPrice = data.reduce((acc, item) => {
      if (!item.count) return acc;
      return acc += item.price * item.count;
    }, 0);
    const bunsPrice = props.addedBuns ?  props.addedBuns.price * props.addedBuns.count : 0;
    setTotalPrice(ingredientsPrice + bunsPrice);
  }

  const sendOrder = () => {
    const orderData = data.reduce((acc, item) => {
      if (item.count) {
        const tmpArr = []
        for (let i = 0; i < item.count; i++) {
          tmpArr.push(item._id);
        }
        acc.push(...tmpArr);
      }
      return acc;
    }, []);
    props.addedBuns && orderData.push(props.addedBuns._id);
    props.addedBuns && orderData.push(props.addedBuns._id);
    apiService.sendOrder(orderData)
      .then(data => setNumberOrder(data.order.number))
      .catch(err => console.log(err))
  }

  // const getTotalPrice = () => {
  //   let ingredientsPrice = Object.entries(stateCount)
  //     ingredientsPrice = ingredientsPrice.reduce((acc, [id, count]) => {
  //       const currentIngredient = props.addedIngredients.find(item => item._id === id);
  //       if (currentIngredient) return acc + currentIngredient.price * count;
  //       return acc;
  //     }, 0)
  //   const bunsPrice = props.addedBuns ? stateCount[props.addedBuns._id] * props.addedBuns.price : 0;
  //   setTotalPrice(ingredientsPrice + bunsPrice);
  // }

  React.useEffect(() => {
   data && getTotalPrice();
  })

  const onToggleVisible = () => {
    setState({ visible: !state.visible, data: {} });
  }

  return (
    <div className={burgerConstructorStyle.wrapper}>
      {props.addedBuns && <Bun type='top' text={`${props.addedBuns.name} (верх)`}
          price={props.addedBuns.price}
          id={props.addedBuns._id}
          thumbnail={props.addedBuns.image} />}
      <section className={burgerConstructorStyle.container}>
        
        {elements}   
          
      </section>
      {props.addedBuns && <Bun type='bottom' text={`${props.addedBuns.name} (низ)`}
          price={props.addedBuns.price}
          id={props.addedBuns._id}
          thumbnail={props.addedBuns.image} />} 
    <div className={burgerConstructorStyle.order}>
    <p className="text text_type_digits-medium">{totalPrice}</p><div className="ml-3 mr-10"><CurrencyIcon type="primary" /></div>
      <Button type="primary" size="medium" onClick={() => {sendOrder(); onToggleVisible()}}>
        Оформить заказ
      </Button>
    </div>
    { state.visible && <ModalOverlay visible={state.visible} onChangeVisible={setState}><OrderDetails numberOrder={numberOrder} /></ModalOverlay>}
  </div>  
  );
}

BurgerConstructor.propTypes = {
  addedBuns: addedBunsPropTypes,
  incrementCount: PropTypes.func
}

export default BurgerConstructor;