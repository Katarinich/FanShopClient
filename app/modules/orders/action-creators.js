import { checkHttpStatus, parseResponseJSON, authenticatedFetch } from '../../utils'
import { GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE, CLEAR_ORDERS } from './action-types'

export function getOrdersRequest() {
  return {
    type: GET_ORDERS_REQUEST
  }
}

export function getOrdersSuccess(response) {
  return {
    type: GET_ORDERS_SUCCESS,
    payload: {
      response
    }
  }
}

export function getOrdersFailure(error) {
  return {
    type: GET_ORDERS_FAILURE,
    error
  }
}

export function getOrders(userId) {
    return function(dispatch, getState) {
      dispatch(getOrdersRequest())

    return authenticatedFetch(`/user/${userId}/orders`, 'GET', dispatch, getState)
          .then(checkHttpStatus)
          .then(parseResponseJSON)
          .then(response => {
              try {
                dispatch(getOrdersSuccess(response))
              } catch (e) {
                dispatch(getOrdersFailure({
                    response: {
                        status: 403,
                        statusText: 'Cart request failed.'
                    }
                }))
              }
          })
          .catch(error => {
            dispatch(getOrdersFailure(error))
          })
    }
}

export function clearOrders() {
  return {
    type: CLEAR_ORDERS
  }
}
