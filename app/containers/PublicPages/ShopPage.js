import React, { Component } from 'react'
import { Panel, Navbar, Nav, NavItem, Collapse } from 'react-bootstrap'

import LightSection from '../../components/PublicLayout/LightSection'
import SideBar from '../../components/PublicLayout/ShopPage/SideBar'
import ProductsArea from '../../components/PublicLayout/ShopPage/ProductsArea'

import ShopItems from '../../constants/shopItems'
import Products from '../../constants/products'

export default class ShopPage extends Component {
  componentWillMount() {
    const { category, subcategory } = this.props.params
    const pageTitle = ShopItems[category - 1].items[subcategory - 1].text

    const breadcrumbs = [
      { name: 'Home', to: '/' },
      { name: 'Shop', to: '#' },
      { name: pageTitle }
    ]

    this.setState({ pageTitle, breadcrumbs })
  }

  render() {
    const { pageTitle, breadcrumbs } = this.state
    
    return(
      <div>
        <LightSection title={ pageTitle } breadcrumbs={ breadcrumbs }/>

        <section className="mainContent clearfix productsContent">
          <div className="container">
            <div className="row">
              <SideBar categories={ ShopItems } />
              <ProductsArea products={ Products } pathname={ this.props.location.pathname }/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
