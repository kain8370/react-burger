import React from 'react';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';

const Bun = (props) => {
  // const [, dispatch] = React.useContext(ItemCountContext);

  React.useEffect(() => {
  //   return () => {
  //     dispatch({type: 'remove', id: props.id})
  //   }
  // }, [dispatch, props.id, props.price]
  })

  return (<div className="mb-4 mr-3">
          <ConstructorElement
          type={props.type}
          isLocked={true}
          text={props.text}
          price={props.price}
          thumbnail={props.thumbnail}
          />
      </div>);
}

Bun.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Bun;