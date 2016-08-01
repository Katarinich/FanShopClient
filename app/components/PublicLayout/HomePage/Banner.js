import React, { Component } from 'react'

export default class Banner extends Component {
  componentDidMount() {
    var swiper = new Swiper('.banner', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 10,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    })
  }

  render() {
    return(
      <div className="swiper-container banner">
        <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="images/slider-bg.jpg" style={{height: '100%', width: '100%'}} /></div>
            <div className="swiper-slide"><img src="images/slider-bg.jpg" style={{height: '100%', width: '100%'}} /></div>
            <div className="swiper-slide"><img src="images/slider-bg.jpg" style={{height: '100%', width: '100%'}} /></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}
