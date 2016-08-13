import { combineReducers } from 'redux'

import auth from '../modules/auth'
import catalog from '../modules/catalog'

export default combineReducers({
  auth,
  catalog
})
