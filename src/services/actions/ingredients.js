import { GET_INGREDIENTS_REQUEST
        ,GET_INGREDIENTS_SUCCESS
        ,GET_INGREDIENTS_FAILED } from "../constants";

const DATA_URL = 'https://norma.nomoreparties.space/api/ingredients/';

export const getIngredients = () => {
  return dispatch => {

    dispatch({ type: GET_INGREDIENTS_REQUEST })
    fetch(DATA_URL)
      .then(res => {
        if (res.ok) return res.json();
        return Promise.reject(res.status)
      })
      .then(res => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      })

  }
}