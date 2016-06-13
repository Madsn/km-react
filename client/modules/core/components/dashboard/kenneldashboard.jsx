import React from 'react';
import DashboardTable from './dashboard_table';

class KennelDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dueToCheckIn: [
                { _id: 3, type: "Boarding", customer: "Thisen", details: "1 cat for 2 days", status: "Checking in today" },
                { _id: 4, type: "Boarding", customer: "Madsn", details: "1 dog for 3 days", status: "Checking in today" }
            ],
            occupants: [
                { _id: 1, type: "Boarding", customer: "Thisen", details: "1 cat for 10 days", status: "2 days till checkout" },
                { _id: 2, type: "Boarding", customer: "Madsn", details: "1 dog for 30 days", status: "2 days till checkout" }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>KennelDashboard</h1>
                <DashboardTable header="Due to Check in" rows={this.state.dueToCheckIn} />
                <DashboardTable header="Occupants" rows={this.state.occupants} />
            </div>
        );
    }
}

export default KennelDashboard;