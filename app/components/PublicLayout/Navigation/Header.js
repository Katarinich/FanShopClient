import React, { Component } from 'react'

import TopBar from './TopBar'
import NavBar from './NavBar'

export default class Header extends Component {
  componentDidMount() {
    $('.dropdown').hover(
      function() {
        $(this).addClass('open')
      },
      function() {
        $(this).removeClass('open')
      }
    )
  }

  render() {
    const { isAuthenticated, userName, onSignIn, onSignOut, isAuthenticating, isProfileLoading, cart } = this.props

    return(
      <div className="header clearfix">
        <TopBar
          isAuthenticated={ isAuthenticated }
          userName={ userName }
          onSignIn={ onSignIn }
          onSignOut={ onSignOut }
          isAuthenticating={ isAuthenticating }
          isProfileLoading={ isProfileLoading }
          cart={ cart } />
        <NavBar />
      </div>
    )
  }
}
