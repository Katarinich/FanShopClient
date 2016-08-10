import { createReducer } from '../../utils'
import { PRODUCTS_REQUEST, PRODUCTS_REQUEST_FAILURE, PRODUCTS_REQUEST_SUCCESS,
         PRODUCT_INFO_REQUEST, PRODUCT_INFO_REQUEST_FAILURE, PRODUCT_INFO_REQUEST_SUCCESS } from './action-types'

const initialState = {
  isFetching: false,
  products: null,
  product: null
}

export default createReducer(initialState, {
  [PRODUCTS_REQUEST]: (state, payload) => {
      return {
          ...state,
          'isFetching': true
      }
  },

  [PRODUCTS_REQUEST_SUCCESS]: (state, payload) => {
    const response = payload.response;

    return {
        ...state,
        products: response,
        'isFetching': false
    };
  },

  [PRODUCTS_REQUEST_FAILURE]: (state, payload) => {
      return {
          ...state,
          'products': null,
          'isFirmLoading': false
      };
  },

  [PRODUCT_INFO_REQUEST]: (state, payload) => {
      return {
          ...state,
          'isFetching': true
      }
  },

  [PRODUCT_INFO_REQUEST_SUCCESS]: (state, payload) => {
    const response = payload.response;

    return {
        ...state,
        product: response,
        'isFetching': false
    };
  },

  [PRODUCT_INFO_REQUEST_FAILURE]: (state, payload) => {
      return {
          ...state,
          'product': null,
          'isFirmLoading': false
      };
  }
})
