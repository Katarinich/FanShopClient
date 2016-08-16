import { createReducer } from '../../utils'
import { GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE, CLEAR_CART } from './action-types'

const initialState = {
  items: null,
  isCartLoading: false
}

export default createReducer(initialState, {
  [GET_CART_REQUEST]: (state, payload) => {
      return {
          ...state,
          'isCartLoading': true
      }
  },

  [GET_CART_SUCCESS]: (state, payload) => {
    const response = payload.response;

    return {
        ...state,
        'items': response,
        'isCartLoading': false
    }
  },

  [GET_CART_FAILURE]: (state, payload) => {
      return {
          ...state,
          'items': null,
          'isCartLoading': false
      }
  },

  [CLEAR_CART]: (state, payload) => {
      return {
          ...state,
          'items': null
      }
  }
})
