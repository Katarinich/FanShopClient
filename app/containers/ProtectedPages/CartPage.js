import React, { Component } from 'react'
import { connect } from 'react-redux'

import LightSection from '../../components/PublicLayout/LightSection'
import Loader from '../../components/Loader'

import ShopItems from '../../constants/shopItems'

class CartPage extends Component {
  renderCartItems() {
    const items = this.props.cart.items ? this.props.cart.items : []

    return items.map( (item) => {
      return(
        <tr>
          <td className="col-xs-2">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <img src={ item.image_url } alt="image" />
          </td>
          <td className="col-xs-4">{ item.name }</td>
          <td className="col-xs-2">$ { item.price }</td>
          <td className="col-xs-2"><input type="text" placeholder="1"/></td>
          <td className="col-xs-2">$ { item.price }</td>
        </tr>
      )
    })
  }

  render() {
    const { cart } = this.props

    const breadcrumbs = [
      { name: 'Home', to: '/' },
      { name: 'Cart' }
    ]

    let totalCartSum = cart.items ? cart.items.reduce((total, item) => {
      return typeof total === "object" ? total.price + item.price : total + item.price
    }) : 0

    return(
      <div>
        <LightSection title={ 'Cart' } breadcrumbs={ breadcrumbs }/>

        <section className="mainContent clearfix cartListWrapper">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="cartListInner">
                  <form>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Sub Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          { this.renderCartItems() }
                        </tbody>
                      </table>
                    </div>

                    <div className="totalAmountArea">
                      <div className="row ">
                        <div className="col-sm-4 col-sm-offset-8 col-xs-12">
                          <ul className="list-unstyled">
                            <li>Grand Total <span className="grandTotal">$ { totalCartSum }</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="checkBtnArea">
                      <a href="javascript:void(0)" className="btn btn-primary btn-block">checkout<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a>

                    </div>
                  </form>
                </div>
                <Loader visible={ cart.isCartLoading } />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {})(CartPage)
