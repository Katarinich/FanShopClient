import React, { Component } from 'react'

import ModalWindow from '../Modal'
import LoginForm from '../LoginForm'
import RegistrationalForm from '../RegistrationalForm'

export default class TopBar extends Component {
  constructor(props) {
    super(props)

    const { isAuthenticated } = this.props
    console.log(isAuthenticated)
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

  componentWillReceiveProps(nextProps) {
    if(nextProps.isAuthenticated) this.setState({ showLoginModal: false, showSignUpModal: false })
  }

  render() {
    let close = () => this.setState({ showLoginModal: false, showSignUpModal: false })
    const { isAuthenticated, userName, onSignIn } = this.props

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
                  { isAuthenticated ? <span> Hello, { userName } </span>
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
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-shopping-cart"></i>$0</a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>Item(s) in your cart</li>
                    <li>
                      <a href="#">
                        <div className="media">
                          <img className="media-left media-object" src="/images/cart-item.png" alt="cart-Image" />
                          <div className="media-body">
                            <h5 className="media-heading">{'ITEM #1'} <br /><span>{'2 X $199'}</span></h5>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="media">
                          <img className="media-left media-object" src="/images/cart-item.png" alt="cart-Image" />
                          <div className="media-body">
                            <h5 className="media-heading">{'ITEM #2'} <br /><span>{'2 X $199'}</span></h5>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="btn-group" role="group" aria-label="...">
                        <button type="button" className="btn btn-default">Shopping Cart</button>
                        <button type="button" className="btn btn-default">Checkout</button>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ModalWindow show={this.state.showLoginModal} onHide={ close } title="Log in" ><LoginForm onSignIn={ onSignIn } /></ModalWindow>
        <ModalWindow show={this.state.showSignUpModal} onHide={ close } title="Sign Up" ><RegistrationalForm /></ModalWindow>
      </div>
    )
  }
}
