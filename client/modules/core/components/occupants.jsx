import React from 'react';

class Occupants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: [
                { _id: 1, type: "Boarding", customer: "Thisen", details: "1 cat for 10 days", status: "2 days till checkout" },
                { _id: 2, type: "Boarding", customer: "Madsn", details: "1 dog for 30 days", status: "2 days till checkout" }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="card col-md-12">
                        <div className="page-header">
                            <h3>Occupants</h3>
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
                                {this.state.bookings.map(function (result) {
                                    return <tr key={result._id}>
                                        <td>
                                            <a href="">
                                                View booking
                                            </a>
                                        </td>
                                        <td><span className="badge alert-success">{ result.type }</span></td>
                                        <td>{ result.customer }</td>
                                        <td>{ result.details }</td>
                                        <td><span className="text-info">{ result.status }</span></td>
                                        <td><span title="Edit booking" className="clickable glyphicon glyphicon-edit"></span></td>
                                    </tr>;
                                }) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Occupants;
