import { GET_ORDER_REQUEST,
         GET_ORDER_SUCCESS,
         GET_ORDER_FAILED } from '../constants';

const ORDER_URL = 'https://norma.nomoreparties.space/api/orders';

export const getOrder = (data) => {
  return dispatch => {
    const body = { ingredients: data};
    dispatch({ type: GET_ORDER_REQUEST })
    fetch(ORDER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: res.order,
          name: res.name
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_ORDER_FAILED,
        })
      })

  }
}