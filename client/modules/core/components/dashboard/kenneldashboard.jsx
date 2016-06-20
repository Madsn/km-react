import React from 'react';
import DashboardTable from './dashboard_table';

const KennelDashboard = ({bookings}) => (
  <div>
    <h1>KennelDashboard</h1>
    <DashboardTable header="Due to Check in" rows={bookings} />
    <DashboardTable header="Occupants" rows={bookings} />
  </div>
)

export default KennelDashboard;
