import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import configRoutes from './routes'
import configureStore from './store/configureStore'
import { restoreSignedInUser } from './modules/auth'

const store = configureStore()
const routes = configRoutes(store)

store.dispatch(restoreSignedInUser())

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
