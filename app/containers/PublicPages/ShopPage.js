import React, { Component } from 'react'
import { connect } from 'react-redux'

import LightSection from '../../components/PublicLayout/LightSection'
import SideBar from '../../components/PublicLayout/ShopPage/SideBar'
import Loader from '../../components/Loader'
import ProductsArea from '../../components/PublicLayout/ShopPage/ProductsArea'
import { getProducts } from '../../modules/catalog'

import ShopItems from '../../constants/shopItems'

class ShopPage extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const { category, subcategory } = this.props.params
    const { catalog } = this.props

    const pageTitle = ShopItems[category - 1].items[subcategory - 1].text

    const breadcrumbs = [
      { name: 'Home', to: '/' },
      { name: 'Shop', to: '#' },
      { name: pageTitle }
    ]

    return(
      <div>
        <LightSection title={ pageTitle } breadcrumbs={ breadcrumbs }/>

        <section className="mainContent clearfix productsContent">
          <div className="container">
            <div className="row">
              <SideBar categories={ ShopItems } />
              { catalog.products && <ProductsArea products={ catalog.products } pathname={ this.props.location.pathname }/> }
              <Loader visible={ catalog.isFetching } />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog
  }
}

export default connect(mapStateToProps, { getProducts })(ShopPage)
