import React, { Component } from 'react'

export default class ProductReviews extends Component {
  renderReviews() {
    return this.props.reviews.map( (review) => {
      return(
        <div className=" reviewBox clearfix">
          <div className="col-md-1 col-sm-2 col-xs-12">
            <div className="thumbnail">
              <img src="/images/avatar.png" />
            </div>
          </div>
          <div className="col-md-11 col-sm-10 col-xs-12">
            <a href="javascript:;" className="userName">Jane Doe</a>
            <p>{ review.message }</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <div className="row productsContent">
        <div className="col-xs-12">
          <div className="page-header">
            <h4>Reviews</h4>
          </div>
        </div>
        <div className="col-xs-12">
          { this.renderReviews() }
        </div>
      </div>
    )
  }
}
