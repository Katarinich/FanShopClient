import { createReducer } from '../../utils'
import { USER_REQUEST, USER_REQUEST_FAILURE, USER_REQUEST_SUCCESS } from './action-types'

const initialState = {
  data: null,
  isFetching: false
}

export default createReducer(initialState, {
  [USER_REQUEST]: (state, payload) => {
      return {
          ...state,
          'isFetching': true
      }
  }

  [USER_REQUEST_SUCCESS]: (state, payload) => {
    const response = payload.response;

    return {
        ...state,
        'data': {
          'userId': response.userId,
          'name': response.name
        },
        'isFetching': false
    }
  },

  [USER_REQUEST_FAILURE]: (state, payload) => {
      return {
          ...state,
          'data': null,
          'isFetching': false
      }
  }
})
