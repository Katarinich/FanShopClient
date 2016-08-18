import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loader from '../../../components/Loader'

class OrdersPage extends Component {
  getOrderStatusClassName(status) {
    console.log(status)
    switch(status) {
      case 'Completed': return 'label-primary'
      case 'Cancelled': return 'label-danger'
      default: return ''
    }
  }

  renderOrders() {
    return this.props.orders.map( order => {
      let totalOrderSum = order.products.reduce((total, item) => { return total + item.price }, 0)
      let orderStatusClassName = this.getOrderStatusClassName(order.status)
      return(
        <tr>
          <td>#{ order.id }</td>
          <td>Mar 25, 2016</td>
          <td>{ order.products.length }</td>
          <td>${ totalOrderSum }</td>
          <td><span className={`label ${orderStatusClassName}`} >{ order.status }</span></td>
          <td><a href="#" className="btn btn-default">View</a></td>
        </tr>
      )
    })
  }

  render() {
    return(
      <div className="innerWrapper">
        <div className="orderBox">
          <h4>All Orders</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.renderOrders() }
              </tbody>
            </table>
          </div>
        </div>
        <Loader visible={ this.props.isOrdersLoading } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders.items ? state.orders.items : [],
    isOrdersLoading: state.orders.isOrdersLoading
  }
}

export default connect(mapStateToProps, { })(OrdersPage)
