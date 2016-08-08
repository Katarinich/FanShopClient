import React from 'react'
import { Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import HomePage from './containers/PublicPages/HomePage'
import ShopPage from './containers/PublicPages/ShopPage'
import SingleProductPage from './containers/PublicPages/SingleProductPage'

export default (store) => {
  return (
    <Route path="/" component={ App }>
      <IndexRoute component={ HomePage } />
      <Route path="shop/:category/:subcategory" >
        <IndexRoute component={ ShopPage } />
        <Route path=":productId" component={ SingleProductPage }/>
      </Route>
    </Route>
  )
}
