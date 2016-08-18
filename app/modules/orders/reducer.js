import { createReducer } from '../../utils'
import { GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE, CLEAR_ORDERS } from './action-types'

const initialState = {
  items: null,
  isOrdersLoading: false
}

export default createReducer(initialState, {
  [GET_ORDERS_REQUEST]: (state, payload) => {
      return {
          ...state,
          'isOrdersLoading': true
      }
  },

  [GET_ORDERS_SUCCESS]: (state, payload) => {
    const response = payload.response;

    return {
        ...state,
        'items': response,
        'isOrdersLoading': false
    }
  },

  [GET_ORDERS_FAILURE]: (state, payload) => {
      return {
          ...state,
          'items': null,
          'isOrdersLoading': false
      }
  },

  [CLEAR_ORDERS]: (state, payload) => {
      return {
          ...state,
          'items': null
      }
  }
})
