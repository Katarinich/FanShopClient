import React, { Component, PropTypes } from 'react'

export default class Loader extends Component {
  renderLoader() {
    const visible = this.props.visible

    if(visible){
      return(
        <div className="dimmer active">
          <div className="loader"></div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        { this.renderLoader() }
      </div>
    )
  }
}

Loader.propTypes = {
  visible: PropTypes.bool
}

Loader.defaultProps = {
  visible: false
}
