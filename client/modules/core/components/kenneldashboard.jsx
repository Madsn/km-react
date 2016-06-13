import React from 'react';
import DueToCheckIn from './due_to_check_in';
import Occupants from './occupants';

class KennelDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>KennelDashboard</h1>
                <DueToCheckIn />
                <Occupants />
            </div>
        );
    }
}

export default KennelDashboard;