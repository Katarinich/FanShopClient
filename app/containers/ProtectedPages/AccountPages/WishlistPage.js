import React, { Component } from 'react'

export default class WishlistPage extends Component {
  render() {
    return(
      <div className="innerWrapper">
        <div className="orderBox myAddress wishList">
          <h4>Wishlist</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Unit Price</th>
                  <th>Stock Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-md-2 col-sm-3">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <span className="cartImage"><img src="http://savepic.ru/10528473.jpg" alt="image"/></span>
                  </td>
                  <td>Big Bag</td>
                  <td>$ 99.00</td>
                  <td>In Stock</td>
                  <td>
                    <a className="btn btn-default" href="#">Add to Cart</a>
                  </td>
                </tr>
                <tr>
                  <td className="col-md-2 col-sm-3">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <span className="cartImage"><img src="http://savepic.ru/10528473.jpg" alt="image"/></span>
                  </td>
                  <td>Big Bag</td>
                  <td>$ 99.00</td>
                  <td>In Stock</td>
                  <td>
                    <a className="btn btn-default" href="#">Add to Cart</a>
                  </td>
                </tr>
                <tr>
                  <td className="col-md-2 col-sm-3">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <span className="cartImage"><img src="http://savepic.ru/10528473.jpg" alt="image"/></span>
                  </td>
                  <td>Big Bag</td>
                  <td>$ 99.00</td>
                  <td>In Stock</td>
                  <td>
                    <a className="btn btn-default" href="#">Add to Cart</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
