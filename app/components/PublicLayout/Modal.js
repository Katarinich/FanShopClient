import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

export default class ModalWindow extends Component {
  render() {
    const { title, show, onHide, children, isFetching } = this.props

    return(
      <Modal show={ show } onHide={ onHide }>
        <Modal.Header closeButton>
          <Modal.Title>{ title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { children }
        </Modal.Body>
      </Modal>
    )
  }
}
