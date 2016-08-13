import jwtDecode from 'jwt-decode'

import { SIGN_IN_USER_REQUEST, SIGN_IN_USER_FAILURE, SIGN_IN_USER_SUCCESS } from './action-types'
import { checkHttpStatus, parseResponseJSON } from '../../utils'

const baseUri = 'http://private-517bbf-shop31.apiary-mock.com'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function signInUserSuccess(auth) {
  let tokenData = jwtDecode(auth.token)

  return (dispatch) => {
    dispatch({
      type: SIGN_IN_USER_SUCCESS,
      payload: {
        auth: auth.token
      }
    })

    getSignInInitialData(tokenData, dispatch)
  }
}

function signInUserFailure(error) {
  return {
    type: SIGN_IN_USER_FAILURE,
    payload: {
      status: error.status,
      statusText: error.statusText
    }
  }
}

function signInUserRequest() {
  return {
    type: SIGN_IN_USER_REQUEST
  }
}

export function signInUser(login, password) {
    return function(dispatch) {
        dispatch(signInUserRequest())
        return fetch(`${baseUri}/auth`, {
                method: 'post',
                headers: defaultHeaders,
                body: JSON.stringify({ login: login, password: password })
            })
            .then(checkHttpStatus)
            .then(parseResponseJSON)
            .then(response => {
                try {
                  dispatch(signInUserSuccess(
                    {
                      token: response
                    }))
                } catch(e) {
                    dispatch(signInUserFailure({
                      status: 403,
                      statusText: 'Invalid auth token'
                    }))
                }
            })
            .catch(error => {
              dispatch(signInUserFailure({
                status: error.status,
                statusText: error.statusText
              }))
            })
    }
}

function getSignInInitialData(tokenData, dispatch) {
  dispatch(getUserCart(tokenData.userId))
}
