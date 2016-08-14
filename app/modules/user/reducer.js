import { createReducer } from '../../utils'
import { USER_REQUEST, USER_REQUEST_FAILURE, USER_REQUEST_SUCCESS } from './action-types'

const initialState = {
  data: null,
  isProfileLoading: false
}

export default createReducer(initialState, {
  [USER_REQUEST]: (state, payload) => {
      return {
          ...state,
          'isProfileLoading': true
      }
  },

  [USER_REQUEST_SUCCESS]: (state, payload) => {
    const response = payload.response;

    return {
        ...state,
        'data': {
          'userId': response.id,
          'name': response.name
        },
        'isProfileLoading': false
    }
  },

  [USER_REQUEST_FAILURE]: (state, payload) => {
      return {
          ...state,
          'data': null,
          'isProfileLoading': false
      }
  }
})
