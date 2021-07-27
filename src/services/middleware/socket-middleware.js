import { WS_CONNECTION_START,
         WS_CONNECTION_SUCCESS,
         WS_CONNECTION_ERROR,
         WS_GET_MESSAGE,
         WS_CONNECTION_CLOSE } from "../constants"; 

export const socketMiddleware = (wsUrl) => {
  return store => {
    let socket = null;
    return next => action => {
      const { dispatch, getState } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START) {
        socket = new WebSocket(wsUrl);
      }

      if (socket) {

        socket.onopen = event => {
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
        }

        socket.onerror = event => {
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        }

        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: WS_GET_MESSAGE, payload: data });
        }

        socket.onclose = event => {
          dispatch({ type: WS_CONNECTION_CLOSE, payload: event });
        }
      }

      next(action);

    }
  }
}