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

const initialState = {
  ingredients: [],
  addedIngredients: [],
  currentIngredient: {},
  order: {},
  currentIngredientVisible: false,
  ingredientsCount: {},
  addedBuns: {},
  orderVisible: false
}

export const ingredientsReducer = (state = initialState, action) => {
  switch(action.type) {

    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false
      };
    }
    
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredients: action.ingredients
      }
    }

    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true
      }
    }

    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.data,
        currentIngredientVisible: true
      }
    }

    case REMOVE_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: {},
        currentIngredientVisible: false
      }
    }

    case ADD_INGREDIENT: {
      return {
        ...state,
        addedIngredients: [...state.addedIngredients, action.ingredient],
        ingredientsCount: {...state.ingredientsCount, [action.ingredient._id]: state.ingredientsCount[action.ingredient._id] ? state.ingredientsCount[action.ingredient._id] + 1 : 1}
      }
    }

    case ADD_BUN: {
      return {
        ...state,
        addedBuns: {bun: action.ingredient, count: 2}
      }
    }

    case RESET_ADDED_BUNS: {
      return {
        ...state,
        addedBuns: {}
      }
    }

    case RESET_INGREDIENTS_COUNT: {
      return {
        ...state,
        ingredientsCount: {}
      }
    }

    case RESET_ADDED_INGREDIENTS: {
      return {
      ...state,
      addedIngredients: []
      }
    }

    case REMOVE_INGREDIENT: {
      const currentIndex = state.addedIngredients.findIndex(item => item._id === action.ingredient._id);
      const before = state.addedIngredients.slice(0, currentIndex);
      const after = state.addedIngredients.slice(currentIndex + 1);
      return {
        ...state,
        addedIngredients: [...before, ...after],
        ingredientsCount: {...state.ingredientsCount, [action.ingredient._id]:  state.ingredientsCount[action.ingredient._id] - 1}
      }
    }

    case SET_TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: action.totalPrice
      }
    }

    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderRequestFailed: false
      }
    }

    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: { orderNumber: action.order.number, orderName: action.name },
        orderRequest: false,
        orderRequestFailed: false
      }
    }

    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderRequestFailed: true
      }
    }

    case CLEAN_ORDER: {
      return {
        ...state,
        order: {}
      }
    }

    case SORT_INGREDIENTS: {

      const dragIndex = action.dragIndex;
      const hoverIndex = action.hoverIndex;
      const addedIngredients = [...state.addedIngredients];
      const dragElement = addedIngredients[dragIndex];
      const hoverElement = addedIngredients[hoverIndex];
      addedIngredients[dragIndex] = hoverElement;
      addedIngredients[hoverIndex] = dragElement;
        
      return {
        ...state,
        addedIngredients: addedIngredients
      }
    }

    default: {
      return state;
    }
  }
}