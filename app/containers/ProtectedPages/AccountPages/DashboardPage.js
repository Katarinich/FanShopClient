import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router'

import Loader from '../../../components/Loader'

class DashboardPage extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      alertVisible: true
    }
  }

  render() {
    const { alertVisible } = this.state
    const { user, isProfileLoading } = this.props

    let closeAlert = () => this.setState({ alertVisible: false })

    return(
      <div className="innerWrapper">

        { alertVisible &&
          <Alert bsStyle="warning" onDismiss={ closeAlert } >
            <strong>Warning!</strong> You have one unpaid order.
          </Alert> }

        <h3>Wellcome <span>{ user.name ? user.name : '' }</span></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <ul className="list-inline">
          <li><Link className="btn btn-default btn-lg" to="/account/profile"><i className="fa fa-user" aria-hidden="true"></i>Profile</Link></li>
          <li><Link className="btn btn-default btn-lg" to="/account/address"><i className="fa fa-map-marker" aria-hidden="true"></i>My Address</Link></li>
          <li><Link className="btn btn-default btn-lg" to="/account/orders"><i className="fa fa-list" aria-hidden="true"></i>All Orders</Link></li>
          <li><Link className="btn btn-default btn-lg" to="/account/wishlist"><i className="fa fa-gift" aria-hidden="true"></i>Wishlist</Link></li>
          <li><a href="#" className="btn btn-default btn-lg"><i className="fa fa-plus-circle" aria-hidden="true"></i>New Address</a></li>
        </ul>
        <div className="orderBox">
          <h4>Unpaid Orders</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#252125</td>
                  <td>Mar 25, 2016</td>
                  <td>2</td>
                  <td>$ 99.00</td>
                  <td><a href="#" className="btn btn-default">Pay now</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Loader visible={ isProfileLoading } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.data ? state.user.data : {},
    isProfileLoading: state.user.isProfileLoading
  }
}

export default connect(mapStateToProps, { })(DashboardPage)
