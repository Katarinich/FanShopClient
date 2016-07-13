import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/PublicPages/App'

render(
  <App/>,
  document.getElementById('root')
)
