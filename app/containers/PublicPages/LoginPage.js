import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import LightSection from '../../components/PublicLayout/LightSection'
import RegistrationalForm from '../../components/PublicLayout/RegistrationalForm'
import LoginForm from'../../components/PublicLayout/LoginForm'
import { signInUser } from '../../modules/auth'

class LoginPage extends Component {
  componentWillMount() {
    if(this.props.auth.isAuthenticated) browserHistory.push('/')
  }

  render() {
    const pageTitle = 'Sign In or Sign Up'

    const breadcrumbs = [
      { name: 'Home', to: '/' },
      { name: pageTitle }
    ]

    return(
      <div>
        <LightSection title={ pageTitle } breadcrumbs={ breadcrumbs } />

        <section className="mainContent clearfix signUp">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-heading"><h3>create an account</h3></div>
                  <div className="panel-body">
                    <RegistrationalForm />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-heading"><h3>allready registered?</h3></div>
                  <div className="panel-body">
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { signInUser })(LoginPage)
