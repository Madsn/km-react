import React from 'react';

const Navbarlinks = () => (
  <ul className="nav navbar-nav">
    <li className={FlowHelpers.currentRoute('home')}>
      <a href={FlowHelpers.pathFor('home')}>Home</a>
    </li>
    <li className={FlowHelpers.currentRoute('dashboard')}>
      <a href={FlowHelpers.pathFor('dashboard')}>Dashboard</a>
    </li>
  </ul>
);

export default Navbarlinks;
