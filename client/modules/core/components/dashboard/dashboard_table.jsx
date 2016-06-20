import React from 'react';
import DashboardActions from './dashboard_actions';

class DashboardTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="card col-md-12">
            <div className="page-header">
              <h3>{this.props.header}</h3>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Booking type </th>
                  <th>Customer</th>
                  <th>Details</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  if (this.props.row != null) {
                    this.props.rows.map(function (item) {
                      return <tr key={item._id}>
                        <td>
                          <a href="">
                            View booking
                          </a>
                        </td>
                        <td><span className="badge alert-success">{ item.bookingType }</span></td>
                        <td>{ item.customer }</td>
                        <td>{ item.details }</td>
                        <td><span className="text-info">{ item.status }</span></td>
                        <td>
                          <DashboardActions item={item} />
                        </td>
                      </tr>;
                    })
                  }
                })()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardTable;
