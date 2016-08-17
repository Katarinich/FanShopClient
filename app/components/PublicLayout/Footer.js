import React, { Component } from 'react'

import ShopItems from '../../constants/shopItems'

export default class Footer extends Component {
  renderShopItems() {
    return this.props.categories.map((category, i) => {
      const categoryItems = category.subcategories.map((item, j) => {
        const itemLink = `/shop/${item.id}`
        return <li key={ i + j } ><a href={ itemLink }>{ item.name }</a></li>
      })

      return(
        <div key={ i } className="col-sm-2 col-xs-12">
          <div className="footerLink">
            <h5>{ category.name }</h5>
            <ul className="list-unstyled">
              { categoryItems }
            </ul>
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <div className="footer clearfix">
        <div className="container">
          <div className="row">

            { this.renderShopItems() }

            <div className="col-sm-2 col-xs-12">
              <div className="footerLink">
                <h5>{'Get in touch'}</h5>
                <ul className="list-unstyled">
                  <li>{'Call us at (888)-888-8888'}</li>
                  <li>{'support@fanshop.com'}</li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12">
              <div className="newsletter clearfix">
                <h4>{'Newsletter'}</h4>
                <h3>{'Sign Up Now'}</h3>
                <p>{'Enter your email address and get notified about new products. We hate spam!'}</p>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="your email address" aria-describedby="basic-addon2" />
                  <a href="#" className="input-group-addon" id="basic-addon2">go <i className="glyphicon glyphicon-chevron-right"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
