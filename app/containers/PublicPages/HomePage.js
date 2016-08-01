import React, { Component } from 'react'

import Slider from '../../components/PublicLayout/HomePage/Slider'
import Banner from '../../components/PublicLayout/HomePage/Banner'

export default class HomePage extends Component {
  render() {
    return(
      <div>
        <Banner />
        
        <section className="mainContent clearfix">
          <div className="container">
            <div className="row featuredProducts">
              <div className="col-xs-12">
                <div className="page-header">
                  <h4>Featured Products</h4>
                </div>
              </div>
              <div className="col-xs-12">
                <Slider />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
