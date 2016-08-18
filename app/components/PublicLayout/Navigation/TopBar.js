import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import ModalWindow from '../Modal'
import LoginForm from '../LoginForm'
import RegistrationalForm from '../RegistrationalForm'

export default class TopBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showLoginModal: false,
      showSignUpModal: false
    }
  }

  handleLoginClick() {
    this.setState({ showLoginModal: true })
  }

  handleSignUpClick() {
    this.setState({ showSignUpModal: true })
  }

  handleSignOut() {
    this.props.onSignOut()
  }

  handleCartClick() {
    browserHistory.push('/cart')
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isAuthenticated) this.setState({ showLoginModal: false, showSignUpModal: false })
  }

  renderCartItems() {
    const items = this.props.cart.items ? this.props.cart.items : []

    return items.map( (item, i) => {
      return(
        <li key={ i }>
          <a href="javascript:void(0)">
            <div className="media">
              <img className="media-left media-object" src={ item.image_url } alt="cart-Image" />
              <div className="media-body">
                <h5 className="media-heading">{ item.name } <br /><span>1 X ${ item.price }</span></h5>
              </div>
            </div>
          </a>
        </li>
      )
    })
  }

  render() {
    const { isAuthenticated, userName, onSignIn, isAuthenticating, isProfileLoading, cart } = this.props

    let close = () => this.setState({ showLoginModal: false, showSignUpModal: false })
    let totalCartSum = cart.items ? cart.items.reduce((total, item) => { return total + item.price }, 0) : 0

    return(
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hidden-sm hidden-xs">
              <ul className="list-inline">
                <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                <li><a href="javascript:void(0)"><i className="fa fa-vk"></i></a></li>
                <li><a href="javascript:void(0)"><i className="fa fa-odnoklassniki"></i></a></li>
                <li><a href="javascript:void(0)"><i className="fa fa-google-plus"></i></a></li>
              </ul>
            </div>
            <div className="col-md-6 col-xs-12">
              <ul className="list-inline pull-right">

                <li>
                  { isAuthenticated && !isProfileLoading
                    ? <span>
                        Hello, <a href="javascript:void(0)"> { userName } </a>  <a title="Sign out" href="javascript:void(0)" onClick={ this.handleSignOut.bind(this) }><i className="fa fa-power-off"></i></a>
                      </span>
                     : <span>
                         <a href="javascript:void(0)" onClick={ this.handleLoginClick.bind(this) } >Log in</a>
                         <small>or</small>
                         <a href="javascript:void(0)" onClick={ this.handleSignUpClick.bind(this) } >Create an account</a>
                       </span> }
                </li>

                <li className="dropdown searchBox">
                  <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-search"></i></a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <span className="input-group">
                        <input type="text" className="form-control" placeholder="Search…" aria-describedby="basic-addon2" />
                        <span className="input-group-addon" id="basic-addon2">Search</span>
                      </span>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-shopping-cart"></i>${ totalCartSum }</a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>Item(s) in your cart</li>
                    { this.renderCartItems() }
                    <li>
                      <div className="btn-group" role="group" aria-label="...">
                        <button type="button" className="btn btn-default" onClick={ this.handleCartClick.bind(this) }>Shopping Cart</button>
                        <button type="button" className="btn btn-default">Checkout</button>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ModalWindow show={this.state.showLoginModal} onHide={ close } title="Log in" isFetching={ isAuthenticating }><LoginForm onSignIn={ onSignIn } /></ModalWindow>
        <ModalWindow show={this.state.showSignUpModal} onHide={ close } title="Sign Up" ><RegistrationalForm /></ModalWindow>
      </div>
    )
  }
}
