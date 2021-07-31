import { WS_CONNECTION_START,
         WS_CONNECTION_SUCCESS,
         WS_CONNECTION_ERROR,
         WS_CONNECTION_CLOSE,
         WS_GET_ORDERS } from "../constants"; 

import { getCookie } from "../../utils/cookie";

export const socketMiddleware = (wsUrl) => {
  return store => {
    let socket = null;
    return next => action => {
      
      const { dispatch } = store;
      const { type } = action;
      const token = getCookie('token').replace('Bearer ', '');
      const USER_ORDER_URL = `wss://norma.nomoreparties.space/orders?token=${token}`

      if (type === WS_CONNECTION_START) {
        if (!action.userOrders) {
          socket = new WebSocket(wsUrl);
        } else {
          socket = new WebSocket(USER_ORDER_URL);
        }
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
        }

        socket.onerror = event => {
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        }

        socket.onmessage = event => {
          const { orders, total, totalToday } = JSON.parse(event.data);
          dispatch({ type: WS_GET_ORDERS, payload: { orders, total, totalToday }});
        }

        socket.onclose = event => {
          dispatch({ type: WS_CONNECTION_CLOSE, payload: event });
        }
      }

      next(action);

    }
  }
}