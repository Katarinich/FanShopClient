import React, { Component } from 'react'

import Header from '../components/PublicLayout/Navigation/Header'
import Footer from '../components/PublicLayout/Footer'
import Banner from '../components/PublicLayout/HomePage/Banner'
import Copyright from '../components/PublicLayout/Copyright'

export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
          { this.props.children }
        <Footer />
        <Copyright />
      </div>
    )
  }
}
