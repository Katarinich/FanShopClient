import jwtDecode from 'jwt-decode'

import { createReducer } from '../../utils'
import { SIGN_IN_USER_REQUEST, SIGN_IN_USER_FAILURE, SIGN_IN_USER_SUCCESS, SYNC_AUTH, RESTORE_SIGNED_IN_USER_REQUEST, SIGN_OUT_USER } from './action-types'

const initialState = {
    token: null,
    userId: null,
    isAuthenticating: false,
    isAuthenticated: false,
    status: null,
    statusText: null
}

export default createReducer(initialState, {
  [RESTORE_SIGNED_IN_USER_REQUEST]: (state, payload) => {
      return {
          ...state,
          isAuthenticating: false,
          status: null,
          statusText: null
      };
    },

    [SIGN_IN_USER_REQUEST]: (state, payload) => {
        return {
            ...state,
            isAuthenticating: true,
            status: null,
            statusText: null
        }
    },

    [SIGN_IN_USER_SUCCESS]: (state, payload) => {
      const tokenData = jwtDecode(payload.auth)

        return {
            ...state,
            'isAuthenticating': false,
            'isAuthenticated': true,
            'token': payload.auth,
            'userId': tokenData.userId,
            'status': 200,
            'statusText': 'You have been successfully signed in.'
        }
    },

    [SIGN_IN_USER_FAILURE]: (state, payload) => {
        return {
            ...state,
            'isAuthenticating': false,
            'isAuthenticated': false,
            'token': null,
            'userId': null,
            'status': payload.status,
            'statusText': payload.statusText
        }
    },

    [SIGN_OUT_USER]: (state, payload) => {
        return {
            ...state,
            'isAuthenticated': false,
            'token': null,
            'userId': null,
            'status': null,
            'statusText': null
        }
    },

    [SYNC_AUTH]: (state, payload) => {
      const auth = payload.auth || {}

      return {
          ...state,
          ...auth
      }
  }
})
