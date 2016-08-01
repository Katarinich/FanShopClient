import React from 'react'
import { Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import HomePage from './containers/PublicPages/HomePage'

export default (store) => {
  return (
    <Route path="/" component={ App }>
      <IndexRoute component={ HomePage } />
    </Route>
  )
}
