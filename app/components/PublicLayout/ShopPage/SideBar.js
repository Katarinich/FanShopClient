import React, { Component } from 'react'
import { Panel, Collapse } from 'react-bootstrap'

export default class SideBar extends Component {
  constructor(...args) {
    super(...args)
    
    this.state = { }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentCategoryId) {
      const currentCategoryId = `category${this.props.currentCategoryId}`
      this.setState({ [currentCategoryId]: true })
    }
  }

  renderCategories() {
    return this.props.categories.map( (category, i) => {
      const categoryId = 'category' + (category.id)

      const subcategories = category.subcategories.map( (subcategory) => {
        return(
          <li><a href="javascript:;"><i className="fa fa-caret-right" aria-hidden="true"></i>{ subcategory.name }</a></li>
        )
      })

      return(
        <li>
           <a href="javascript:;" onClick={ () => this.setState({ [categoryId]: !this.state[categoryId] })}>
            { category.name } { this.state[categoryId] ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
           </a>
           <Collapse in={this.state[categoryId]}>
             <ul className="collapseItem">
              { subcategories }
            </ul>
          </Collapse>
        </li>
      )
    })
  }

  render() {
    const productPanelHeader = 'Product categories'

    return(
      <div className="col-md-3 col-sm-4 col-xs-12 sideBar">
        <Panel header={ productPanelHeader }>
          <div className="collapse navbar-collapse navbar-ex1-collapse navbar-side-collapse">
            <ul className="nav navbar-nav side-nav">
              { this.renderCategories() }
            </ul>
          </div>
        </Panel>
      </div>
    )
  }
}
