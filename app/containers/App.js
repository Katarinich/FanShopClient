import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/PublicLayout/Navigation/Header'
import Footer from '../components/PublicLayout/Footer'
import Banner from '../components/PublicLayout/HomePage/Banner'
import Copyright from '../components/PublicLayout/Copyright'
import { signInUser, signOut } from '../modules/auth'
import { getCategories } from '../modules/catalog'

class App extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return(
      <div>
        <Header
          isAuthenticated={ this.props.isAuthenticated }
          userName={ this.props.user.data ? this.props.user.data.name : null }
          onSignIn={ this.props.signInUser }
          onSignOut={ this.props.signOut }
          isAuthenticating={ this.props.isAuthenticating }
          isProfileLoading={ this.props.isProfileLoading }
          cart={ this.props.cart }
          categories={ this.props.categories } />

          { this.props.children }
        <Footer categories={ this.props.categories } />
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
    categories: state.catalog.categories ? state.catalog.categories : [],
    user: state.user,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { signInUser, signOut, getCategories })(App)
