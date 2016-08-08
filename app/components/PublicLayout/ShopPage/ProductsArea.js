import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ProductsArea extends Component {
  renderProducts() {
    var { pathname } = this.props
    if(pathname[pathname.length - 1] === '/') pathname = pathname.slice(0, -1)

    return this.props.products.map( (product) => {
      return(
        <div className="col-sm-4 col-xs-12">
          <div className="productBox">
            <div className="productImage clearfix">
              <img src={ product.image_url } />
              <div className="productMasking">
                <ul className="list-inline btn-group" role="group">
                  <li><a href="javascript:;" className="btn btn-default"><i className="fa fa-heart"></i></a></li>
                  <li><a href="javascript:;" className="btn btn-default"><i className="fa fa-shopping-cart"></i></a></li>
                  <li><a className="btn btn-default" href="javascript:;" ><i className="fa fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="productCaption clearfix">
              <Link to={ pathname + '/' + product.id } >
                <h5>{ product.name }</h5>
              </Link>
              <h3>${ product.price }</h3>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <div className="col-md-9 col-sm-8 col-xs-12">
        <div className="row">
          { this.renderProducts() }
        </div>
      </div>
    )
  }
}
