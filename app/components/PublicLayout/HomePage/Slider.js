import React, { Component } from 'react'

const FeaturedProducts = [
  { name: 'product #1', img: 'images/product.jpg', price: '$199' },
  { name: 'product #2', img: 'images/product.jpg', price: '$199' },
  { name: 'product #3', img: 'images/product.jpg', price: '$199' },
  { name: 'product #4', img: 'images/product.jpg', price: '$199' },
  { name: 'product #5', img: 'images/product.jpg', price: '$199' },
  { name: 'product #6', img: 'images/product.jpg', price: '$199' },
  { name: 'product #7', img: 'images/product.jpg', price: '$199' },
  { name: 'product #8', img: 'images/product.jpg', price: '$199' }
]

export default class Slider extends Component {
  componentDidMount() {
    var swiper = new Swiper('.featuredProductsSlider', {
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: 2500,
      autoplayDisableOnInteraction: false,
      breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        }
      }
    })
  }

  renderSlides() {
    return FeaturedProducts.map((product) => {
      return(
        <div className="swiper-slide">
          <div className="productImage clearfix">
            <img src={ product.img } />
            <div className="productMasking">
              <ul className="list-inline btn-group" role="group">
                <li><a data-toggle="modal" href="#" className="btn btn-default"><i className="fa fa-heart"></i></a></li>
                <li><a href="#" className="btn btn-default"><i className="fa fa-shopping-cart"></i></a></li>
                <li><a data-toggle="modal" href="#" className="btn btn-default"><i className="fa fa-eye"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="productCaption clearfix">
            <a href="#">
              <h5>{ product.name }</h5>
            </a>
            <h3>{ product.price }</h3>
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <div className="swiper-container featuredProductsSlider">
        <div className="swiper-wrapper">
          { this.renderSlides() }
        </div>
      </div>
    )
  }
}
