import { PRODUCTS_REQUEST, PRODUCTS_REQUEST_FAILURE, PRODUCTS_REQUEST_SUCCESS,
         PRODUCT_INFO_REQUEST, PRODUCT_INFO_REQUEST_FAILURE, PRODUCT_INFO_REQUEST_SUCCESS } from './action-types'
import { checkHttpStatus, parseResponseJSON } from '../../utils'

const baseUri = 'http://private-517bbf-shop31.apiary-mock.com'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function productsRequest() {
  return {
    type: PRODUCTS_REQUEST
  }
}

function productsRequestSuccess(response) {
  return {
    type: PRODUCTS_REQUEST_SUCCESS,
    payload: {
      response
    }
  }
}

function productsRequestFailure(error) {
  return {
    type: PRODUCTS_REQUEST_FAILURE
  }
}

export function getProducts() {
    return (dispatch, getState)  => {
      dispatch(productsRequest())

      return fetch(`${baseUri}/catalog`, {
              method: 'get',
              headers: defaultHeaders,
              body: null
          })
          .then(checkHttpStatus)
          .then(parseResponseJSON)
          .then(response => {
              try {
                dispatch(productsRequestSuccess(response))
              } catch (e) {
                  dispatch(productsRequestFailure({
                    status: 403,
                    statusText: 'Products request failed.'
                  }))
              }
          })
          .catch(error => {
            dispatch(productsRequestFailure(error))
          })
    }
}

function productInfoRequest() {
  return {
    type: PRODUCT_INFO_REQUEST
  }
}

function productInfoRequestSuccess(response) {
  return {
    type: PRODUCT_INFO_REQUEST_SUCCESS,
    payload: {
      response
    }
  }
}

function productInfoRequestFailure(error) {
  return {
    type: PRODUCT_INFO_REQUEST_FAILURE
  }
}

export function getProductInfo() {
    return (dispatch, getState)  => {
      dispatch(productInfoRequest())

      return fetch(`${baseUri}/catalog/id`, {
              method: 'get',
              headers: defaultHeaders,
              body: null
          })
          .then(checkHttpStatus)
          .then(parseResponseJSON)
          .then(response => {
              try {
                dispatch(productInfoRequestSuccess(response))
              } catch (e) {
                  dispatch(productInfoRequestFailure({
                    status: 403,
                    statusText: 'Product Info request failed.'
                  }))
              }
          })
          .catch(error => {
            dispatch(productInfoRequestFailure(error))
          })
    }
}
