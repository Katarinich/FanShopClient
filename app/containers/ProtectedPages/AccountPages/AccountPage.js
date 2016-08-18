import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { connectHistory } from '../../../utils'

import LightSection from '../../../components/PublicLayout/LightSection'

const AccountItems = [
  { text: 'Dashboard', to: '/account/dashboard' },
  { text: 'Profile', to: '/account/profile' },
  { text: 'All Orders', to: '/account/orders' },
  { text: 'Wishlist', to: '/account/wishlist' },
  { text: 'Address', to: '/account/address' }
]

class AccountPage extends Component {
  render() {
    const currentPath = this.props.routes[this.props.routes.length - 1].path

    const pageTitle = AccountItems.find(x => `/account/${currentPath}` == x.to).text
    const breadcrumbs = [
      { name: 'Home', to: '/' },
      { name: pageTitle }
    ]

    return(
      <div>
        <LightSection title={ pageTitle } breadcrumbs={ breadcrumbs }/>

        <section className="mainContent clearfix userProfile">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="btn-group" role="group" aria-label="...">
                  <Link activeClassName="active" className="btn btn-default" to="/account/dashboard"><i className="fa fa-th" aria-hidden="true"></i>Account Dashboard</Link>
                  <Link activeClassName="active" className="btn btn-default" to="/account/profile"><i className="fa fa-user" aria-hidden="true"></i>Profile</Link>
                  <Link activeClassName="active" className="btn btn-default" to="/account/address"><i className="fa fa-map-marker" aria-hidden="true"></i>My Address</Link>
                  <Link activeClassName="active" className="btn btn-default" to="/account/orders"><i className="fa fa-list" aria-hidden="true"></i>All Orders</Link>
                  <Link activeClassName="active" className="btn btn-default" to="/account/wishlist"><i className="fa fa-gift" aria-hidden="true"></i>Wishlist</Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                { this.props.children }
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

contextTypes: {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {  })(AccountPage)
