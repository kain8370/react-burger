import { GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  ADD_BUN, 
  SET_TOTAL_PRICE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  CLEAN_ORDER,
  SORT_INGREDIENTS,
  RESET_ADDED_BUNS,
  RESET_ADDED_INGREDIENTS,
  RESET_INGREDIENTS_COUNT} from "../constants";
import { ingredientsReducer } from "./ingredientsReducer";

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual({
      ingredients: [],
      addedIngredients: [],
      currentIngredient: {},
      order: {},
      currentIngredientVisible: false,
      ingredientsCount: {},
      addedBuns: {},
      orderVisible: false
    })
  })

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(ingredientsReducer({}, { type: GET_INGREDIENTS_REQUEST })).toEqual({ ingredientsRequest: true, ingredientsFailed: false })
  })

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(ingredientsReducer({}, { type: GET_INGREDIENTS_SUCCESS, ingredients: [] })).toEqual({ ingredientsRequest: false, ingredients: [] })
  })

  it('should handle GET_INGREDIENTS_FAILED', () => {
    expect(ingredientsReducer({}, { type: GET_INGREDIENTS_FAILED })).toEqual({ ingredientsRequest: false, ingredientsFailed: true })
  })

  it('should handle SET_CURRENT_INGREDIENT', () => {
    expect(ingredientsReducer({}, { type: SET_CURRENT_INGREDIENT, data: {} })).toEqual({ currentIngredient: {}, currentIngredientVisible: true })
  })

  it('should handle REMOVE_CURRENT_INGREDIENT', () => {
    expect(ingredientsReducer({}, { type: REMOVE_CURRENT_INGREDIENT })).toEqual({ currentIngredient: {}, currentIngredientVisible: false })
  })

  it('should handle ADD_INGREDIENT', () => {
    expect(ingredientsReducer({addedIngredients: [], ingredientsCount: {}}, { type: ADD_INGREDIENT, ingredient: { _id: 123 } })).toEqual({ addedIngredients: [{ _id: 123 }], ingredientsCount: {'123': 1} })
  })

  it('should handle RESET_ADDED_BUNS', () => {
    expect(ingredientsReducer({}, { type: RESET_ADDED_BUNS })).toEqual({ addedBuns: {} })
  })

  it('should handle RESET_INGREDIENTS_COUNT', () => {
    expect(ingredientsReducer({}, { type: RESET_INGREDIENTS_COUNT })).toEqual({ ingredientsCount: {} })
  })

  it('should handle RESET_ADDED_INGREDIENTS', () => {
    expect(ingredientsReducer({}, { type: RESET_ADDED_INGREDIENTS })).toEqual({ addedIngredients: [] })
  })

  it('should handle REMOVE_INGREDIENT', () => {
    expect(ingredientsReducer({addedIngredients: [{_id: '123'}], ingredientsCount: { '123': 1}}, { type: REMOVE_INGREDIENT, ingredient: { _id: '123' } })).toEqual({ addedIngredients: [], ingredientsCount: { '123': 0 } })
  })

  it('should handle SET_TOTAL_PRICE', () => {
    expect(ingredientsReducer({}, { type: SET_TOTAL_PRICE, totalPrice: 12345 })).toEqual({ totalPrice: 12345 })
  })

  it('should handle GET_ORDER_REQUEST', () => {
    expect(ingredientsReducer({}, { type: GET_ORDER_REQUEST })).toEqual({ orderRequest: true, orderRequestFailed: false })
  })

  it('should handle GET_ORDER_SUCCESS', () => {
    expect(ingredientsReducer({}, { type: GET_ORDER_SUCCESS, order: {number: 5}, name: 'some name' })).toEqual({ orderRequest: false, orderRequestFailed: false, order: {orderNumber: 5, orderName: 'some name'} })
  })

  it('should handle GET_ORDER_FAILED', () => {
    expect(ingredientsReducer({}, { type: GET_ORDER_FAILED })).toEqual({ orderRequest: false, orderRequestFailed: true })
  })

  it('should handle CLEAN_ORDER', () => {
    expect(ingredientsReducer({}, { type: CLEAN_ORDER })).toEqual({ order: {} })
  })

  it('should handle SORT_INGREDIENTS', () => {
    expect(ingredientsReducer({ addedIngredients: [{_id: 1}, {_id: 2}, {_id: 3}, {_id: 4}, {_id: 5}]}, { type: SORT_INGREDIENTS, dragIndex: 4, hoverIndex: 1 })).toEqual({ addedIngredients: [{_id: 1}, {_id: 5}, {_id: 3}, {_id: 4}, {_id: 2}] })
  })
})
