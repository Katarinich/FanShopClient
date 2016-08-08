import React, { Component } from 'react'

export default class lightSection extends Component {
  renderBreadcrumbs() {
    const { breadcrumbs } = this.props

    return breadcrumbs.map( (breadcrumb, i) => {
      let className
      if( i === breadcrumbs.length - 1) className = 'active'

      return(
        <li>
          <a href={ breadcrumb.to } className={ className }>{ breadcrumb.name }</a>
        </li>
      )
    })
  }

  render() {
    const { title } = this.props

    return(
      <section className="lightSection clearfix pageHeader">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <div className="page-title">
                <h2>{ title }</h2>
              </div>
            </div>
            <div className="col-xs-6">
              <ol className="breadcrumb pull-right">
                { this.renderBreadcrumbs() }
              </ol>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
