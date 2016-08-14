import React, { Component } from 'react'

export default class LoginForm extends Component {
  handleSubmit(e) {
    e.preventDefault()

    const email = $('#email').val()
    const password = $('#password').val()

    this.props.onSignIn(email, password)
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <div className="form-group">
          <label>Enter Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">log in</button>
        <button type="button" className="btn btn-link btn-block">Forgot Password?</button>
      </form>
    )
  }
}
