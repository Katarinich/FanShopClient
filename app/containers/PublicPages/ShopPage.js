import React, { Component } from 'react'
import { connect } from 'react-redux'

import LightSection from '../../components/PublicLayout/LightSection'
import SideBar from '../../components/PublicLayout/ShopPage/SideBar'
import Loader from '../../components/Loader'
import ProductsArea from '../../components/PublicLayout/ShopPage/ProductsArea'
import { getProducts } from '../../modules/catalog'

class ShopPage extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.params.subcategory != this.props.params.subcategory ) this.props.getProducts()
  }

  render() {
    const { subcategory } = this.props.params
    const { catalog } = this.props

    const category = catalog.categories ? catalog.categories.find(x => x.subcategories.some(y => y.id == subcategory)) : {}

    const pageTitle = category.subcategories ? category.subcategories.find(y => y.id == subcategory).name : ''

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
              <SideBar categories={ catalog.categories ? catalog.categories : [] } currentCategoryId={ category.id } />
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
