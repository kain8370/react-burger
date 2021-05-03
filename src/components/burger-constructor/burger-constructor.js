import React from 'react';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import burgerConstructorStyle from './burger-constructor.module.css';

const burgerConstructorPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
});

class BurgerConstructor extends React.Component {

  render() {
    let ingredients = this.props.ingredients.filter(item => item.count > 0);
    let elements = '';
    if (ingredients.length) {
       elements = ingredients.map(item => {
        if (item.type === 'bun') {
          return (
            <React.Fragment key={item._id}>
              <div className="mb-4">
                <ConstructorElement
                type="top"
                isLocked={true}
                text={item.name + ' (верх)'}
                price={item.price}
                thumbnail={item.image}
                />
              </div>
              <div className="mb-4">
                <ConstructorElement
                type="bottom"
                isLocked={true}
                text={item.name + ' (низ)'}
                price={item.price}
                thumbnail={item.image}
                />
              </div>
            </React.Fragment>
          )
        }
        return (<div key={item._id} className={burgerConstructorStyle.ingredient}>
          <span className={burgerConstructorStyle.dragIcon}><DragIcon /></span>
          <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          />
        </div>);
      });
        
    }
    return (
      <div className={burgerConstructorStyle.wrapper}>
        <div className="mb-4 mr-3">
            <ConstructorElement
            type="top"
            isLocked={true}
            text='Краторная булка N-200i (верх)'
            price='1255'
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
            />
          </div>
        <section className={burgerConstructorStyle.container}>
          
          {elements}   
            
        </section>
        <div className="mb-4 mt-4 mr-3">
        <ConstructorElement
        type="bottom"
        isLocked={true}
        text='Краторная булка N-200i (низ)'
        price='1255'
        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
      </div> 
      <div className={burgerConstructorStyle.order}>
      <p className="text text_type_digits-medium">12345</p><div className="ml-3 mr-10"><CurrencyIcon type="primary" /></div>
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>  
    );
  }
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(burgerConstructorPropTypes.isRequired).isRequired
}

export default BurgerConstructor;