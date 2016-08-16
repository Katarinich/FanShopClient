import jwtDecode from 'jwt-decode'
import moment from 'moment'

import { SIGN_IN_USER_REQUEST, SIGN_IN_USER_FAILURE, SIGN_IN_USER_SUCCESS, SYNC_AUTH, RESTORE_SIGNED_IN_USER_REQUEST, SIGN_OUT_USER } from './action-types'
import { checkHttpStatus, parseResponseJSON } from '../../utils'
import { getUserRequest, clearUser } from '../user'
import { getCart, clearCart } from '../cart'

const baseUri = 'http://private-517bbf-shop31.apiary-mock.com'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export function restoreSignedInUser() {
    return (dispatch, getState) => {
        dispatch({
            type: RESTORE_SIGNED_IN_USER_REQUEST
        })
        let auth = getState().auth

        if (!auth.token) {
          return dispatch(signOut())
        }

        let tokenData = null

        try {
          tokenData = jwtDecode(auth.token)
        } catch (e) {
          return dispatch(signOut())
        }

        if(moment.unix(tokenData.expiryDate).isBefore(moment())) {
          return dispatch(signOut())
        } else {
          return dispatch(signInUser()) //later change it to refresh token
        }
    }
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

export function signInUser(email, password) {
    return function(dispatch) {
        dispatch(signInUserRequest())
        return fetch(`${baseUri}/auth/signin`, {
                method: 'post',
                headers: defaultHeaders,
                body: JSON.stringify({ email: email, password: password })
            })
            .then(checkHttpStatus)
            .then(parseResponseJSON)
            .then(response => {
                try {
                  dispatch(signInUserSuccess(
                    {
                      token: response.token
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

export function signOut(reasonError) {
    return (dispatch, state) => {
      dispatch({
          type: SIGN_OUT_USER,
          payload: {
            reasonError
          }
      })

      dispatch(clearUser())
      dispatch(clearCart())
    }
}


function getSignInInitialData(tokenData, dispatch) {
  dispatch(getUserRequest(tokenData.userId))
  dispatch(getCart(tokenData.userId))
}

export function syncAuth(auth) {
  return {
    type: SYNC_AUTH,
    payload: {
      auth
    }
  }
}
