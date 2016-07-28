import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import ShopItems from '../../../constants/shopItems'

const AccountItems = [
  { text: 'Dashboard', to: '#' },
  { text: 'Profile', to: '#' },
  { text: 'All Orders', to: '#' },
  { text: 'Wishlist', to: '#' },
  { text: 'Address', 'to': '#' }
]

export default class NavBar extends Component {
  renderShopItems() {
    return ShopItems.map((category, i) => {
      const categoryItems = category.items.map(item => {
        return <li><a href={ item.to }>{ item.text }</a></li>
      })

      return (
        <li key={ i } className="col-sm-3 col-xs-12">
          <ul className="list-unstyled">
            <li>{ category.text }</li>
            { categoryItems }
          </ul>
        </li>
      )
    })
  }

  renderAccountItems() {
    return AccountItems.map((item, i) => {
      return <li key={ i }><a href={ item.to }>{ item.text }</a></li>
    })
  }

  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <a className="navbar-brand" href="javascript:void(0)"><img src="images/logo.png" alt="" /></a>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>

            <li className="active"><a href="javascript:void(0)">Home</a></li>

            <li className="dropdown megaDropMenu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="300" data-close-others="true" aria-expanded="false">Shop</a>
               <ul className="dropdown-menu row">
                 { this.renderShopItems() }
                 <li className="col-sm-3 col-xs-12">
                  <a href="#" className="menu-photo"><img src="images/menu-photo.png" alt="menu-img" /></a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account</a>
              <ul className="dropdown-menu dropdown-menu-right">
                { this.renderAccountItems() }
               </ul>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
