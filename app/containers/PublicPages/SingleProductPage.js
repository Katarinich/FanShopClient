import React, { Component } from 'react'
import { connect } from 'react-redux'

import LightSection from '../../components/PublicLayout/LightSection'
import ProductInfo from '../../components/PublicLayout/SingleProductPage/ProductInfo'
import ProductReviews from '../../components/PublicLayout/SingleProductPage/ProductReviews'
import Loader from '../../components/Loader'
import { getProductInfo } from '../../modules/catalog'

import Products from '../../constants/products'

class SingleProductPage extends Component {
  componentDidMount() {
    this.props.getProductInfo()
  }

  render() {
    const { catalog } = this.props
    const pageTitle = catalog.product ? catalog.product.name : null

    const breadcrumbs = [
      { name: 'Home', to: '/' },
      { name: 'Shop', to: '#' },
      { name:  pageTitle}
    ]

    return(
      <div>
        { catalog.product && <div><LightSection title={ pageTitle } breadcrumbs={ breadcrumbs }/>

        <section className="mainContent clearfix">
          <div className="container">
            <ProductInfo product={ catalog.product }/>
            <ProductReviews reviews={ catalog.product.reviews }/>
          </div>
        </section> </div>}

        <Loader visible={ catalog.isFetching } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog
  }
}

export default connect(mapStateToProps, { getProductInfo })(SingleProductPage)
