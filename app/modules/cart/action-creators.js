import { checkHttpStatus, parseResponseJSON, authenticatedFetch } from '../../utils'
import { GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE, CLEAR_CART } from './action-types'

export function getCartRequest() {
  return {
    type: GET_CART_REQUEST
  }
}

export function getCartSuccess(response) {
  return {
    type: GET_CART_SUCCESS,
    payload: {
      response
    }
  }
}

export function getCartFailure(error) {
  return {
    type: GET_CART_FAILURE,
    error
  }
}

export function getCart(userId) {
    return function(dispatch, getState) {
      dispatch(getCartRequest())

    return authenticatedFetch(`/user/${userId}/cart`, 'GET', dispatch, getState)
          .then(checkHttpStatus)
          .then(parseResponseJSON)
          .then(response => {
              try {
                dispatch(getCartSuccess(response))
              } catch (e) {
                dispatch(getCartFailure({
                    response: {
                        status: 403,
                        statusText: 'Cart request failed.'
                    }
                }))
              }
          })
          .catch(error => {
            dispatch(getCartFailure(error))
          })
    }
}

export function clearCart() {
  return {
    type: CLEAR_CART
  }
}
