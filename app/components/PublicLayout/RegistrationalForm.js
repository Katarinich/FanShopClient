import React, { Component } from 'react'

export default class RegistrationalForm extends Component {
  render() {
    return(
      <form action="" method="POST" role="form">
        <div className="form-group">
          <label>Enter Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label for="">Confirm Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign up</button>
      </form>  
    )
  }
}
