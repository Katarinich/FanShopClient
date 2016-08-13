import jwtDecode from 'jwt-decode'

import { createReducer } from '../../utils'
import { SIGN_IN_USER_REQUEST, SIGN_IN_USER_FAILURE, SIGN_IN_USER_SUCCESS } from './action-types'

const initialState = {
    token: null,
    userId: null,
    isFetching: false,
    isAuthenticated: false,
    status: null,
    statusText: null
}

export default createReducer(initialState, {
    [SIGN_IN_USER_REQUEST]: (state, payload) => {
        return {
            ...state,
            isFetching: true,
            status: null,
            statusText: null
        }
    },

    [SIGN_IN_USER_SUCCESS]: (state, payload) => {
      const tokenData = getDecodedTokenData(payload.auth);
        return {
            ...state,
            'isFetching': false,
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
            'isFetching': false,
            'isAuthenticated': false,
            'token': null,
            'userId': null,
            'status': payload.status,
            'statusText': payload.statusText
        }
    }
})
