import React, { Component } from 'react'

import TopBar from './TopBar'

export default class Header extends Component {
  render() {
    return(
      <div className="header clearfix">
        <TopBar />
      </div>
    )
  }
}
