import React, { Component } from 'react'

export default class MyAddressPage extends Component {
  render() {
    return(
      <div className="innerWrapper">
        <div className="orderBox myAddress">
          <h4>My Address</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Country</th>
                  <th className="col-md-2 col-sm-3">Phone</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Valve</td>
                  <td>Gabe Newell</td>
                  <td>PO BOX 1688, Bellevue, WA 98009</td>
                  <td>USA</td>
                  <td>+425-889-9642</td>
                  <td>
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-default"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                      <button type="button" className="btn btn-default"><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
