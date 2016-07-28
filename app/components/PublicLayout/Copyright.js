import React, { Component } from 'react'
import moment from 'moment'

export default class Copyright extends Component {
  render() {
    return(
      <div className="copyRight clearfix">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-xs-12">
              <p>&copy; {moment().format('YYYY')} FanShop</p>
            </div>
            <div className="col-sm-5 col-xs-12">
              <ul className="list-inline">
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-vk"></i></a></li>
                <li><a href="#"><i className="fa fa-odnoklassniki"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
