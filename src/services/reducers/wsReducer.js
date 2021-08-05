import { WS_CONNECTION_SUCCESS,
         WS_CONNECTION_ERROR,
         WS_GET_ORDERS,
         WS_CONNECTION_CLOSE } from "../constants";
         
const initialState = { wsConnected: false, orders: [] };

export const wsReducer = ( state = initialState, action ) => {
  switch(action.type) {

    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        error: null,
        wsConnected: true
      }
    }

    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      }
    }

    case WS_CONNECTION_CLOSE: {
      return {
        ...state,
        error: null,
        wsConnected: false
      }
    }

    case WS_GET_ORDERS: {
      return {
        ...state,
        error: null,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      }
    }

    default: {
      return state;
    }

  }
}