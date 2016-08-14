import { combineReducers } from 'redux'

import auth from '../modules/auth'
import catalog from '../modules/catalog'
import user from '../modules/user'

export default combineReducers({
  auth,
  catalog,
  user
})
