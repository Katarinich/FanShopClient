import React, { Component } from 'react'

import Header from '../../components/PublicLayout/Navigation/Header'
import Footer from '../../components/PublicLayout/Navigation/Footer'
import Banner from '../../components/PublicLayout/Banner'
import Copyright from '../../components/PublicLayout/Copyright'
import HomeContent from '../../components/PublicLayout/HomePage/HomeContent'

export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Banner />
        <HomeContent />
        <Footer />
        <Copyright />
      </div>
    )
  }
}
