import React, { Component } from 'react'

export function connectHistory(Component) {
  return React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    render() {
      return <Component {...this.props} context={this.context} />
    }
  })
}
