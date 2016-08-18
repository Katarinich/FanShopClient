import React, { Component } from 'react'

export default class ProfilePage extends Component {
  render() {
    return(
      <div className="innerWrapper profile">
        <div className="orderBox">
          <h4>profile</h4>
        </div>
        <div className="row">
          <div className="col-md-2 col-sm-3 col-xs-12">
            <div className="thumbnail">
              <img src="/images/avatar.png" alt="profile-image" />
              <div className="caption">
                <a href="#" className="btn btn-primary btn-block" role="button">Change Avatar</a>
              </div>
            </div>
          </div>
          <div className="col-md-10 col-sm-9 col-xs-12">
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-md-2 col-sm-3 control-label">First Name</label>
                <div className="col-md-10 col-sm-9">
                  <input type="text" className="form-control" id="" placeholder="" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 col-sm-3 control-label">Last Name</label>
                <div className="col-md-10 col-sm-9">
                  <input type="text" className="form-control" id="" placeholder="" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 col-sm-3 control-label">Phone Number</label>
                <div className="col-md-10 col-sm-9">
                  <input type="text" className="form-control" id="" placeholder="" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 col-sm-3 control-label">Email Address</label>
                <div className="col-md-10 col-sm-9">
                  <input type="email" className="form-control" id="" placeholder="" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 col-sm-3 control-label">Password</label>
                <div className="col-md-10 col-sm-9">
                  <input type="password" className="form-control" id="" placeholder="" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 col-sm-3 control-label">New Password</label>
                <div className="col-md-10 col-sm-9">
                  <input type="password" className="form-control" id="" placeholder="" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-offset-10 col-md-2 col-sm-offset-9 col-sm-3">
                  <button type="submit" className="btn btn-primary btn-block">SAVE INFO</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
