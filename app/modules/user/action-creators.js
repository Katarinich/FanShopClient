import { checkHttpStatus, parseResponseJSON, authenticatedFetch } from '../../utils'
import { USER_REQUEST, USER_REQUEST_FAILURE, USER_REQUEST_SUCCESS, CLEAR_USER } from './action-types'

export function userRequest() {
  return {
    type: USER_REQUEST
  }
}

export function userRequestSuccess(response) {
  return {
    type: USER_REQUEST_SUCCESS,
    payload: {
      response
    }
  }
}

export function userRequestFailure(error) {
  return {
    type: USER_REQUEST_FAILURE
  }
}

export function getUserRequest(userId) {
    return function(dispatch, getState) {
      dispatch(userRequest())

    return authenticatedFetch(`/user/${userId}`, 'GET', dispatch, getState)
          .then(checkHttpStatus)
          .then(parseResponseJSON)
          .then(response => {
              try {
                dispatch(userRequestSuccess(response))
              } catch (e) {
                dispatch(userRequestFailure({
                    response: {
                        status: 403,
                        statusText: 'User request failed.'
                    }
                }))
              }
          })
          .catch(error => {
            dispatch(userRequestFailure(error))
          })
    }
}

export function clearUser() {
  return {
    type: CLEAR_USER
  }
}
