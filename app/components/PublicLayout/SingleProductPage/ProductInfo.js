import React, { Component } from 'react'

export default class ProductInfo extends Component {
  componentDidMount() {
    const { images } = this.props.product

    var swiper = new Swiper('.productInfoSlider', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      paginationBulletRender: function (index, className) {
          return '<div class="thumb ' + className + '"><img src=' + images[index].image + ' /></div>'
      }
    })
  }

  renderSlides() {
    return this.props.product.images.map( (image) => {
      return(
        <div className="swiper-slide">
          <div className="item">
            <img src={ image.image } />
          </div>
        </div>
      )
    })
  }

  render() {
    const { product } = this.props

    return(
      <div className="row singleProduct">
        <div className="col-xs-12">
          <div className="media">
            <div className="media-left productSlider">
              <div className="swiper-container productInfoSlider">
                <div className="swiper-wrapper">
                  { this.renderSlides() }
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="media-body">
              <ul className="list-inline">
                <li><a href="javascript:;"><i className="fa fa-reply" aria-hidden="true"></i>Continue Shopping</a></li>
                <li><a href="javascript:;"><i className="fa fa-plus" aria-hidden="true"></i>Share This</a></li>
              </ul>
              <h2>{ product.name }</h2>
              <h3>${ product.price }</h3>
              <p>{ product.description }</p>
              <div className="btn-area">
                <a href="javascript:;" className="btn btn-primary btn-block">Add to cart <i className="fa fa-angle-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
