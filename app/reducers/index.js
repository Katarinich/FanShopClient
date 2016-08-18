import { combineReducers } from 'redux'

import auth from '../modules/auth'
import cart from '../modules/cart'
import catalog from '../modules/catalog'
import orders from '../modules/orders'
import user from '../modules/user'

export default combineReducers({
  auth,
  cart,
  catalog,
  orders,
  user
})
