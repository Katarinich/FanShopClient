import React, { Component } from 'react'
import { Panel, Collapse } from 'react-bootstrap'

export default class SideBar extends Component {
  constructor(...args) {
    super(...args)

    this.state = {}
  }

  renderCategories() {
    return this.props.categories.map( (category, i) => {
      const categoryId = 'category' + (i + 1)

      const subcategories = category.items.map( (subcategory) => {
        return(
          <li><a href="javascript:;"><i className="fa fa-caret-right" aria-hidden="true"></i>{ subcategory.text }</a></li>
        )
      })

      return(
        <li>
           <a href="javascript:;" onClick={ () => this.setState({ [categoryId]: !this.state[categoryId] })}>
            { category.text } { this.state[categoryId] ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
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
