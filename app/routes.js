import React from 'react'
import { Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import HomePage from './containers/PublicPages/HomePage'
import ShopPage from './containers/PublicPages/ShopPage'
import SingleProductPage from './containers/PublicPages/SingleProductPage'
import CartPage from './containers/ProtectedPages/CartPage'

export default (store) => {
  return (
    <Route path="/" component={ App }>
      <IndexRoute component={ HomePage } />
      <Route path="shop/:subcategory" >
        <IndexRoute component={ ShopPage } />
        <Route path=":productId" component={ SingleProductPage }/>
      </Route>
      <Route path="cart" component={ CartPage } />
    </Route>
  )
}
