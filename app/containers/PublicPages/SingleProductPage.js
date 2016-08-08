import React, { Component } from 'react'

import LightSection from '../../components/PublicLayout/LightSection'
import ProductInfo from '../../components/PublicLayout/SingleProductPage/ProductInfo'

import Products from '../../constants/products'

export default class SingleProductPage extends Component {
  componentWillMount() {
    const { productId } = this.props.params
    const product = Products.find( x => x.id == productId)

    const pageTitle = product.name

    const breadcrumbs = [
      { name: 'Home', to: '/' },
      { name: 'Shop', to: '#' },
      { name: pageTitle }
    ]

    this.setState({ pageTitle, breadcrumbs, product })
  }

  render() {
    const { pageTitle, breadcrumbs, product } = this.state

    return(
      <div>
        <LightSection title={ pageTitle } breadcrumbs={ breadcrumbs }/>

        <section className="mainContent clearfix">
          <div className="container">
            <ProductInfo product={ product }/>
          </div>
        </section>

      </div>
    )
  }
}
