import React from 'react'
import { Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import HomePage from './containers/PublicPages/HomePage'
import ShopPage from './containers/PublicPages/ShopPage'
import SingleProductPage from './containers/PublicPages/SingleProductPage'
import CartPage from './containers/ProtectedPages/CartPage'
import AccountPage from './containers/ProtectedPages/AccountPages/AccountPage'
import DashboardPage from './containers/ProtectedPages/AccountPages/DashboardPage'
import ProfilePage from './containers/ProtectedPages/AccountPages/ProfilePage'
import MyAddressPage from './containers/ProtectedPages/AccountPages/MyAddressPage'
import WishlistPage from './containers/ProtectedPages/AccountPages/WishlistPage'
import OrdersPage from './containers/ProtectedPages/AccountPages/OrdersPage'

export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
  const { auth: { isAuthenticated } } = store.getState()
  if (!isAuthenticated) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
  callback()
}

  return (
    <Route path="/" component={ App }>
      <IndexRoute component={ HomePage } />
      <Route path="shop/:subcategory" >
        <IndexRoute component={ ShopPage } />
        <Route path=":productId" component={ SingleProductPage }/>
      </Route>
      <Route path="cart" component={ CartPage } onEnter={ requireAuth } />
      <Route path="account" component={ AccountPage } onEnter={ requireAuth } >
        <Route path="dashboard" component={ DashboardPage } />
        <Route path="profile" component={ ProfilePage } />
        <Route path="address" component={ MyAddressPage } />
        <Route path="wishlist" component={ WishlistPage } />
        <Route path="orders" component={ OrdersPage } />
      </Route>
    </Route>
  )
}
