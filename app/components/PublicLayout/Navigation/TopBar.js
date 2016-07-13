import React, { Component } from 'react'

export default class TopBar extends Component {
  componentDidMount() {
    $('.dropdown').hover(
      function() {
        $(this).addClass('open')
      },
      function() {
        $(this).removeClass('open')
      }
    )
  }

  render() {
    return(
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hidden-sm hidden-xs">
              <ul className="list-inline">
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                <li><a href="#"><i className="fa fa-tumblr"></i></a></li>
              </ul>
            </div>
            <div className="col-md-6 col-xs-12">
              <ul className="list-inline pull-right">

                <li>
                  <span>
                    <a data-toggle="modal" href='.login-modal'>Log in</a>
                    <small>or</small>
                    <a data-toggle="modal" href='#signup'>Create an account</a>
                  </span>
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
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown disabled"><i className="fa fa-shopping-cart"></i>$0</a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>Item(s) in your cart</li>
                    <li>
                      <a href="single-product.html">
                        <div className="media">
                          <img className="media-left media-object" src="#" alt="cart-Image" />
                          <div className="media-body">
                            <h5 className="media-heading">INCIDIDUNT UT <br /><span>2 X $199</span></h5>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <div className="media">
                          <img className="media-left media-object" src="#" alt="cart-Image" />
                          <div className="media-body">
                            <h5 className="media-heading">INCIDIDUNT UT <br /><span>2 X $199</span></h5>
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
      </div>
    )
  }
}
