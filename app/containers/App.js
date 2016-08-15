import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/PublicLayout/Navigation/Header'
import Footer from '../components/PublicLayout/Footer'
import Banner from '../components/PublicLayout/HomePage/Banner'
import Copyright from '../components/PublicLayout/Copyright'
import { signInUser } from '../modules/auth'

class App extends Component {
  render() {
    return(
      <div>
        <Header
          isAuthenticated={ this.props.isAuthenticated }
          userName={ this.props.user.data ? this.props.user.data.name : null }
          onSignIn={ this.props.signInUser }
          isAuthenticating={ this.props.isAuthenticating }
          isProfileLoading={ this.props.isProfileLoading } />

          { this.props.children }
        <Footer />
        <Copyright />
      </div>
    )
  }
}

function mapStateToProps(state) {
  let auth = state.auth

  return {
    isAuthenticated: auth.isAuthenticated ? auth.isAuthenticated : false,
    isAuthenticating: auth.isAuthenticating ? auth.isAuthenticating : false,
    isProfileLoading: state.user.isProfileLoading ? state.user.isProfileLoading : false,
    user: state.user,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { signInUser })(App)
