import { WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_GET_ORDERS,
  WS_CONNECTION_CLOSE } from "../constants";
import { wsReducer } from './wsReducer';

describe('webSocket reducer', () => {
  it('should return the initial state', () => {
    expect(wsReducer(undefined, {})).toEqual({ wsConnected: false, orders: [] })
  })

  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(wsReducer({}, {type: WS_CONNECTION_SUCCESS})).toEqual({ wsConnected: true, error: null })
  })

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(wsReducer({}, {type: WS_CONNECTION_ERROR, payload: 'error'})).toEqual({ wsConnected: false, error: 'error' })
  })

  it('should handle WS_CONNECTION_CLOSE', () => {
    expect(wsReducer({}, {type: WS_CONNECTION_CLOSE})).toEqual({ wsConnected: false, error: null })
  })

  it('should handle WS_GET_ORDER', () => {
    expect(wsReducer({}, {type: WS_GET_ORDERS, payload: { orders: [], total: 20, totalToday: 10}})).toEqual({ error: null, orders: [], total: 20, totalToday: 10 })
  })

})